#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const pkgPath = path.join(root, "package.json");
const lockPath = path.join(root, "package-lock.json");

function fail(message) {
  console.error(message);
  process.exit(1);
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function bump(version, level) {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(version);
  if (!match) {
    fail(`Current version is not x.y.z: ${version}`);
  }
  let major = Number(match[1]);
  let minor = Number(match[2]);
  let patch = Number(match[3]);
  if (level === "major") {
    major += 1;
    minor = 0;
    patch = 0;
  } else if (level === "minor") {
    minor += 1;
    patch = 0;
  } else {
    patch += 1;
  }
  return `${major}.${minor}.${patch}`;
}

const current = readJson(pkgPath).version;
const arg = process.argv[2];
const levels = new Set(["patch", "minor", "major"]);
let next;

if (!arg || levels.has(arg)) {
  next = bump(current, arg || "patch");
} else if (/^\d+\.\d+\.\d+$/.test(arg)) {
  next = arg;
} else {
  fail("Usage: node scripts/bump-version.js [patch|minor|major|x.y.z]");
}

if (next === current) {
  fail(`${current} is already the version`);
}

function replaceLeadingVersions(file, expected) {
  const lines = fs.readFileSync(file, "utf8").split("\n");
  const needle = `"version": "${current}"`;
  const replacement = `"version": "${next}"`;
  let count = 0;
  const header = Math.min(lines.length, 30);
  for (let i = 0; i < header; i++) {
    if (!lines[i].includes(needle)) continue;
    lines[i] = lines[i].replace(needle, replacement);
    count += 1;
  }
  if (count !== expected) {
    fail(
      `${path.basename(file)}: expected ${expected} root version field(s) in the header, found ${count}`,
    );
  }
  fs.writeFileSync(file, lines.join("\n"));
}

replaceLeadingVersions(pkgPath, 1);
replaceLeadingVersions(lockPath, 2);
console.log(`${current} -> ${next}`);
