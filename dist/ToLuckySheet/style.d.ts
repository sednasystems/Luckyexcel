import { LuckySheetborderInfoCellValueStyle, LuckySheetborderInfoCellValue, LuckySheetCelldataValue } from "./LuckyBase";
import { Element, IStyleCollections } from "./ReadXml";
export declare enum AbsoluteRefType {
    NONE = 0,
    ROW = 1,
    COLUMN = 2,
    ALL = 3
}
export interface IRange {
    startRow: number;
    startColumn: number;
    endRow: number;
    endColumn: number;
    startAbsoluteRefType: AbsoluteRefType;
    endAbsoluteRefType: AbsoluteRefType;
    rangeType: number;
}
export declare function getBorderInfo(borders: Element[], styles: IStyleCollections): LuckySheetborderInfoCellValueStyle;
export declare function handleBorder(border: Element, styles: IStyleCollections): {
    borderCellValue: LuckySheetborderInfoCellValue;
    isAdd: boolean;
};
export declare function getBackgroundByFill(fill: Element, styles: IStyleCollections): string | null;
export declare function getFontStyle(font: Element, styles: IStyleCollections): {
    cellValue: LuckySheetCelldataValue;
    familyFont: string;
};
export declare const handleRanges: (sqref: string) => {
    startRow: number;
    startColumn: number;
    endRow: number;
    endColumn: number;
    startAbsoluteRefType: AbsoluteRefType;
    endAbsoluteRefType: AbsoluteRefType;
    rangeType: number;
}[];
