import { Workbook, WorksheetViewCommon, WorksheetViewFrozen } from "@zwight/exceljs";
export declare class ViewCommon implements WorksheetViewCommon {
    rightToLeft: boolean;
    activeCell: string;
    showRuler: boolean;
    showRowColHeaders: boolean;
    showGridLines: boolean;
    zoomScale: number;
    zoomScaleNormal: number;
}
export declare class FrozenView implements WorksheetViewFrozen {
    state: "frozen";
    style?: "pageBreakPreview";
    xSplit?: number;
    ySplit?: number;
    topLeftCell?: string;
}
export declare function ExcelWorkSheet(workbook: Workbook, snapshot: any): void;
