import { test, describe } from "node:test";
import assert from "node:assert/strict";
import {
  getMultiSequenceToNum,
  getRegionSequence,
  getSingleSequenceToNum,
} from "../src/common/method";

/**
 * Original (O(n^2)) implementation of getSqrefRawArrFormat, kept here only as
 * an oracle to check that the linear implementation returns identical output.
 */
function legacyGetMultiSequenceToNum(sqref: string): string[] {
  const legacyFormat = (arr: string[]): string[] => {
    arr?.map((el) => {
      if (el.includes(":")) {
        const tempArr: string[] = el.split(":");
        if (tempArr?.length === 2) {
          arr = arr.concat(getRegionSequence(tempArr));
          arr.splice(arr.indexOf(el), 1);
        }
      }
    });
    return arr.filter((value, index, array) => array.indexOf(value) === index);
  };

  if (!sqref || sqref?.length <= 0) return [];
  sqref = sqref.toUpperCase();
  const sqrefArr = sqref.split(" ").filter((e) => e && e.trim());
  const sqrefLastArr = legacyFormat(sqrefArr);
  const resArr: string[] = [];
  for (let i = 0; i < sqrefLastArr.length; i++) {
    const _res = getSingleSequenceToNum(sqrefLastArr[i]);
    if (_res) resArr.push(_res);
  }
  return resArr;
}

describe("getMultiSequenceToNum", () => {
  test("single cell", () => {
    assert.deepEqual(getMultiSequenceToNum("E14"), ["13_4"]);
    assert.deepEqual(getMultiSequenceToNum("A1"), ["0_0"]);
    assert.deepEqual(getMultiSequenceToNum("ES14"), ["13_148"]);
  });

  test("simple range expands column-major", () => {
    assert.deepEqual(getMultiSequenceToNum("E46:E47"), ["45_4", "46_4"]);
    assert.deepEqual(getMultiSequenceToNum("A1:B2"), ["0_0", "1_0", "0_1", "1_1"]);
  });

  test("reversed range is normalised", () => {
    assert.deepEqual(getMultiSequenceToNum("B2:A1"), getMultiSequenceToNum("A1:B2"));
  });

  test("multiple space-separated cells", () => {
    assert.deepEqual(
      getMultiSequenceToNum("E14 J14 O14 T14 Y14 AD14 AI14 AN14 AS14 AX14"),
      ["13_4", "13_9", "13_14", "13_19", "13_24", "13_29", "13_34", "13_39", "13_44", "13_49"]
    );
  });

  test("multiple ranges: plain cells first, then expanded ranges in order", () => {
    assert.deepEqual(getMultiSequenceToNum("C3:C4 A1 E5:E6 B2"), [
      "0_0", // A1
      "1_1", // B2
      "2_2", // C3
      "3_2", // C4
      "4_4", // E5
      "5_4", // E6
    ]);
  });

  test("overlapping ranges and duplicates are removed, first occurrence wins", () => {
    // A1:B2 -> A1 A2 B1 B2 ; B1:C2 -> B1 B2 C1 C2 (B1, B2 already seen)
    assert.deepEqual(getMultiSequenceToNum("A1:B2 B1:C2"), [
      "0_0", "1_0", "0_1", "1_1", "0_2", "1_2",
    ]);
    // identical ranges and a plain cell that is also covered by a range
    assert.deepEqual(getMultiSequenceToNum("A1:A2 A1:A2 A2 A1"), ["1_0", "0_0"]);
    // duplicate plain cells
    assert.deepEqual(getMultiSequenceToNum("C3 A1 C3 A1"), ["2_2", "0_0"]);
  });

  test("lowercase input is upper-cased", () => {
    assert.deepEqual(getMultiSequenceToNum("a1:b2 c3"), getMultiSequenceToNum("A1:B2 C3"));
    assert.deepEqual(getMultiSequenceToNum("e14"), ["13_4"]);
  });

  test("extra whitespace is ignored", () => {
    assert.deepEqual(getMultiSequenceToNum("  A1   B2  "), ["0_0", "1_1"]);
  });

  test("empty / undefined / null input", () => {
    assert.deepEqual(getMultiSequenceToNum(""), []);
    assert.deepEqual(getMultiSequenceToNum(undefined as unknown as string), []);
    assert.deepEqual(getMultiSequenceToNum(null as unknown as string), []);
    assert.deepEqual(getMultiSequenceToNum("   "), []);
  });

  test("matches the legacy implementation on random input", () => {
    let seed = 12345;
    const rnd = (n: number) => {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed % n;
    };
    const cell = () => {
      const cols = ["A", "B", "C", "D", "Z", "AA", "AB"];
      return `${cols[rnd(cols.length)]}${1 + rnd(6)}`;
    };
    for (let iter = 0; iter < 300; iter++) {
      const parts: string[] = [];
      const count = 1 + rnd(8);
      for (let i = 0; i < count; i++) {
        parts.push(rnd(2) ? cell() : `${cell()}:${cell()}`);
      }
      const input = parts.join(" ");
      assert.deepEqual(
        getMultiSequenceToNum(input),
        legacyGetMultiSequenceToNum(input),
        `mismatch for "${input}"`
      );
    }
  });

  test("performance: large repeated sqref finishes quickly and dedupes", () => {
    // Mimics a data validation sqref repeated across thousands of columns.
    const parts: string[] = [];
    for (let i = 0; i < 4000; i++) {
      parts.push("B65507:I65507", "IX65507:JG65507", "ST65507:TC65507");
    }
    const sqref = parts.join(" ");

    const start = process.hrtime.bigint();
    const result = getMultiSequenceToNum(sqref);
    const elapsedMs = Number(process.hrtime.bigint() - start) / 1e6;

    // 8 + 10 + 10 distinct cells
    assert.equal(result.length, 28);
    assert.equal(new Set(result).size, result.length);
    assert.equal(result[0], "65506_1"); // B65507, first cell of first range
    // Legacy implementation takes multiple seconds for this input.
    assert.ok(elapsedMs < 1000, `took ${elapsedMs}ms`);
  });

  test("performance: many distinct cells stay linear", () => {
    const parts: string[] = [];
    for (let r = 1; r <= 20000; r++) parts.push(`A${r}`);
    const result = getMultiSequenceToNum(parts.join(" "));
    assert.equal(result.length, 20000);
    assert.equal(result[0], "0_0");
    assert.equal(result[19999], "19999_0");
  });
});
