import { ChartTypeBits } from "../common/constant";
import { ILuckyFile, ILuckyFileInfo, IluckySheet, IluckySheetCelldata, IluckySheetConfig, IluckySheetCelldataValue, IluckySheetCelldataValueMerge, ILuckySheetCellFormat, IluckySheetConfigMerges, IluckySheetConfigMerge, IluckySheetborderInfoCellValue, IluckySheetborderInfoCellValueStyle, IluckySheetborderInfoCellForImp, IluckySheetRowAndColumnLen, IluckySheetRowAndColumnHidden, IluckySheetSelection, IluckysheetFrozen, IluckySheetChart, IluckySheetPivotTable, IluckysheetConditionFormat, IluckysheetCalcChain, ILuckyInlineString, IluckyImage, IluckyImageBorder, IluckyImageCrop, IluckyImageDefault, IluckyImages, IluckysheetHyperlink, IluckysheetDataVerification, IWorkBookInfo, IluckyChart, ILuckyChartContext, ILuckyChartStyle, IluckyChartImage, IluckyChartImageData } from "./ILuck";
import type { LuckyConditionFormat } from './LuckyCondition';
import { IDefinedNames } from "./LuckyDefineName";
import { LuckyFilterFormat } from "./luckyFilter";
import { LuckyVerificationFormat } from "./LuckyVerification";
export declare class LuckyFileBase implements ILuckyFile {
    workbook: IWorkBookInfo;
    info: ILuckyFileInfo;
    sheets: IluckySheet[];
}
export declare class WorkBookInfo implements IWorkBookInfo {
    defineNames?: IDefinedNames;
}
export declare class LuckySheetBase implements IluckySheet {
    id: string;
    name: string;
    color: string;
    config: IluckySheetConfig;
    index: string;
    status: string;
    order: string;
    row: number;
    column: number;
    luckysheet_select_save: IluckySheetSelection[];
    scrollLeft: number;
    scrollTop: number;
    zoomRatio: number;
    showGridLines: string;
    defaultColWidth: number;
    defaultRowHeight: number;
    celldata: IluckySheetCelldata[];
    chart: IluckySheetChart[];
    isPivotTable: boolean;
    pivotTable: IluckySheetPivotTable;
    luckysheet_conditionformat_save: IluckysheetConditionFormat[];
    freezen: IluckysheetFrozen;
    calcChain: IluckysheetCalcChain[];
    images: IluckyImages;
    charts: IluckyChart[];
    dataVerification: IluckysheetDataVerification;
    hyperlink: IluckysheetHyperlink;
    hide: number;
    conditionalFormatting: LuckyConditionFormat[];
    dataVerificationList: LuckyVerificationFormat[];
    filter: LuckyFilterFormat;
}
export declare class LuckyFileInfo implements ILuckyFileInfo {
    name: string;
    creator: string;
    lastmodifiedby: string;
    createdTime: string;
    modifiedTime: string;
    company: string;
    appversion: string;
}
export declare class LuckySheetCelldataBase implements IluckySheetCelldata {
    r: number;
    c: number;
    v: IluckySheetCelldataValue | string | null;
}
export declare class LuckySheetCelldataValue implements IluckySheetCelldataValue {
    ct: LuckySheetCellFormat | undefined;
    bg: string | undefined;
    ff: string | undefined;
    fc: string | undefined;
    bl: number | undefined;
    it: number | undefined;
    fs: number | undefined;
    cl: number | undefined;
    un: number | undefined;
    vt: number | undefined;
    ht: number | undefined;
    mc: IluckySheetCelldataValueMerge | undefined;
    tr: number | undefined;
    tb: number | undefined;
    v: string | undefined;
    m: string | undefined;
    f: string | undefined;
    rt: number | undefined;
    qp: number | undefined;
    ti: number | undefined;
}
export declare class LuckySheetCellFormat implements ILuckySheetCellFormat {
    s: Array<IluckySheetCelldataValue | ILuckyInlineString>;
    ci: any;
    fa: string;
    t: string;
}
export declare class LuckyInlineString implements ILuckyInlineString {
    ff: string | undefined;
    fc: string | undefined;
    fs: number | undefined;
    cl: number | undefined;
    un: number | undefined;
    bl: number | undefined;
    it: number | undefined;
    va: number | undefined;
    v: string | undefined;
}
export declare class LuckyConfig implements IluckySheetConfig {
    merge: IluckySheetConfigMerges;
    borderInfo: IluckySheetborderInfoCellForImp[];
    rowlen: IluckySheetRowAndColumnLen;
    columnlen: IluckySheetRowAndColumnLen;
    rowhidden: IluckySheetRowAndColumnHidden;
    colhidden: IluckySheetRowAndColumnHidden;
    customHeight: IluckySheetRowAndColumnHidden;
    customWidth: IluckySheetRowAndColumnHidden;
}
export declare class LuckySheetborderInfoCellForImp implements IluckySheetborderInfoCellForImp {
    rangeType: string;
    value: IluckySheetborderInfoCellValue;
}
export declare class LuckySheetborderInfoCellValue implements IluckySheetborderInfoCellValue {
    row_index: number;
    col_index: number;
    l: IluckySheetborderInfoCellValueStyle;
    r: IluckySheetborderInfoCellValueStyle;
    t: IluckySheetborderInfoCellValueStyle;
    b: IluckySheetborderInfoCellValueStyle;
    tl_br: IluckySheetborderInfoCellValueStyle;
    bl_tr: IluckySheetborderInfoCellValueStyle;
}
export declare class LuckySheetborderInfoCellValueStyle implements IluckySheetborderInfoCellValueStyle {
    "style": number;
    "color": string;
}
export declare class LuckySheetConfigMerge implements IluckySheetConfigMerge {
    r: number;
    c: number;
    rs: number;
    cs: number;
}
export declare class LuckysheetCalcChain implements IluckysheetCalcChain {
    r: number;
    c: number;
    index: string | undefined;
}
export declare class LuckyImageBase implements IluckyImage {
    border: IluckyImageBorder;
    crop: IluckyImageCrop;
    default: IluckyImageDefault;
    fixedLeft: number;
    fixedTop: number;
    isFixedPos: Boolean;
    originHeight: number;
    originWidth: number;
    src: string;
    type: string;
}
export declare class LuckyChartImageBase implements IluckyChartImage {
    border: IluckyImageBorder;
    crop: IluckyImageCrop;
    default: IluckyImageDefault;
    transform: IluckyImageDefault;
    fixedLeft: number;
    fixedTop: number;
    isFixedPos: Boolean;
    originHeight: number;
    originWidth: number;
    data: IluckyChartImageData;
    type: string;
}
export declare class LuckyChart implements IluckyChart {
    id: string;
    range: string;
    chartType: ChartTypeBits;
    context: ILuckyChartContext;
    style: ILuckyChartStyle;
    isRowDirection: boolean;
}
