import { ChartTypeBits } from "../common/constant";
import { LuckyConditionFormat } from "./LuckyCondition";
import { IDefinedNames } from "./LuckyDefineName";
import { LuckyFilterFormat } from "./luckyFilter";
import { LuckyVerificationFormat } from "./LuckyVerification";
export interface ILuckyFile {
    info: ILuckyFileInfo;
    sheets: IluckySheet[];
    workbook: IWorkBookInfo;
}
export interface IWorkBookInfo {
    defineNames?: IDefinedNames;
}
export interface ILuckyFileInfo {
    name: string;
    creator: string;
    lastmodifiedby: string;
    createdTime: string;
    modifiedTime: string;
    company: string;
    appversion: string;
}
export interface IluckySheet {
    name: string;
    color: string;
    config?: IluckySheetConfig;
    index: string;
    status: string;
    order: string;
    row: number;
    column: number;
    luckysheet_select_save?: IluckySheetSelection[];
    scrollLeft: number;
    scrollTop: number;
    celldata?: IluckySheetCelldata[];
    chart?: IluckySheetChart[];
    isPivotTable: boolean;
    pivotTable?: IluckySheetPivotTable;
    luckysheet_conditionformat_save?: IluckysheetConditionFormat[];
    freezen?: IluckysheetFrozen;
    calcChain?: IluckysheetCalcChain[];
    zoomRatio: number;
    showGridLines: string;
    defaultColWidth: number;
    defaultRowHeight: number;
    images: IluckyImages;
    charts: IluckyChart[];
    dataVerification: IluckysheetDataVerification;
    hyperlink: IluckysheetHyperlink;
    hide: number;
    conditionalFormatting: LuckyConditionFormat[];
    dataVerificationList: LuckyVerificationFormat[];
    filter: LuckyFilterFormat;
}
export interface IluckySheetSelection {
    row: number[];
    column: number[];
}
export interface IluckySheetChart {
}
export interface IluckySheetPivotTable {
    pivot_select_save: IluckySheetSelection;
    pivotDataSheetIndex: string | undefined;
    column: IluckySheetPivotTableField[];
    row: IluckySheetPivotTableField[];
    filter: IluckySheetPivotTableField[];
    filterparm: IluckySheetPivotTablefilterParam;
    values: IluckySheetPivotTableField[];
    showType: string;
    pivotDatas: any[][];
    drawPivotTable: boolean;
    pivotTableBoundary: number[];
}
export interface IluckySheetPivotTableField {
    index: number;
    name: string;
    fullname: string;
    sumtype: string;
    nameindex: number;
}
export interface IluckySheetPivotTablefilterParam {
    [index: string]: IluckySheetPivotTablefilterParamItem;
}
export interface IluckySheetPivotTablefilterParamItem {
    caljs: IluckySheetPivotTablefilterParamItemCaljs;
    rowhidden: IluckySheetPivotTablefilterParamItemRowhidden;
    selected: IluckySheetPivotTablefilterParamItemSelected;
}
export interface IluckySheetPivotTablefilterParamItemCaljs {
    text: string;
    type: string;
    value: string;
    value1: string;
}
export interface IluckySheetPivotTablefilterParamItemRowhidden {
    [index: number]: number;
}
export interface IluckySheetPivotTablefilterParamItemSelected {
    [index: number]: number;
}
export interface IluckysheetFrozen {
    horizen: number | undefined;
    vertical: number | undefined;
}
export interface IluckysheetConditionFormat {
    type: string;
    cellrange: IluckySheetSelection[];
    format: string[] | IluckysheetCFDefaultFormat | IluckysheetCFIconsFormat;
    conditionName: string | undefined;
    conditionRange: IluckySheetSelection[];
    conditionValue: any[];
}
export interface IluckysheetCFDefaultFormat {
    textColor: string | undefined | null;
    cellColor: string | undefined | null;
}
export interface IluckysheetCFIconsFormat {
    len: string | number;
    leftMin: string | number;
    top: string | number;
}
export interface IluckysheetCalcChain {
    r: number;
    c: number;
    index: string | undefined;
}
export interface IluckySheetCelldata {
    r: number;
    c: number;
    v: IluckySheetCelldataValue | string | null;
}
export interface IluckySheetCelldataValue {
    ct: ILuckySheetCellFormat | undefined;
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
    rt: number | undefined;
    f: string | undefined;
    qp: number | undefined;
    ti: number | undefined;
}
export interface ILuckySheetCellFormat {
    fa: string;
    t: string;
    s: Array<IluckySheetCelldataValue | ILuckyInlineString> | undefined;
    ci: any;
}
export interface IluckySheetCelldataValueMerge {
    rs?: number;
    cs?: number;
    r: number;
    c: number;
}
export interface IluckySheetConfig {
    merge?: IluckySheetConfigMerges;
    borderInfo: IluckySheetborderInfoCellForImp[];
    rowlen?: IluckySheetRowAndColumnLen;
    columnlen?: IluckySheetRowAndColumnLen;
    rowhidden?: IluckySheetRowAndColumnHidden;
    colhidden?: IluckySheetRowAndColumnHidden;
    customHeight: IluckySheetRowAndColumnHidden;
    customWidth: IluckySheetRowAndColumnHidden;
}
export interface IluckySheetConfigMerges {
    [firstRange: string]: IluckySheetConfigMerge;
}
export interface IluckySheetConfigMerge {
    r: number;
    c: number;
    rs: number;
    cs: number;
}
export interface IluckySheetborderInfoCell {
    rangeType: string;
    value: IluckySheetborderInfoCellValue;
}
export interface IluckySheetborderInfoCellValue {
    row_index: number;
    col_index: number;
    l: IluckySheetborderInfoCellValueStyle;
    r: IluckySheetborderInfoCellValueStyle;
    t: IluckySheetborderInfoCellValueStyle;
    b: IluckySheetborderInfoCellValueStyle;
    tl_br: IluckySheetborderInfoCellValueStyle;
    bl_tr: IluckySheetborderInfoCellValueStyle;
}
export interface IluckySheetborderInfoCellValueStyle {
    "style": number;
    "color": string;
}
export interface IluckySheetborderInfoRange {
    rangeType: string;
    borderType: string;
    style: string;
    color: string;
    range: IluckySheetSelection[];
}
export interface IluckySheetborderInfoCellForImp {
    rangeType: string;
    cells?: string[];
    value: IluckySheetborderInfoCellValue;
}
export interface IMapluckySheetborderInfoCellForImp {
    [index: number]: IluckySheetborderInfoCellForImp;
}
export interface IluckySheetRowAndColumnLen {
    [index: string]: number;
}
export interface IluckySheetRowAndColumnHidden {
    [index: string]: number;
}
export interface IFormulaSI {
    [index: string]: IFormulaCell;
}
export interface IFormulaCell {
    [index: string]: IFormulaCellValue;
}
export interface IFormulaCellValue {
    t: string;
    ref: string;
    si: string;
    fv: string;
    cellValue: IluckySheetCelldata;
}
export interface ILuckyInlineString {
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
export interface IluckyImage {
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
    [key: string]: any;
}
export interface IluckyImageBorder {
    color: string;
    radius: number;
    style: string;
    width: number;
}
export interface IluckyImageCrop {
    height: number;
    offsetLeft: number;
    offsetTop: number;
    width: number;
}
export interface IluckyImageDefault {
    height: number;
    left: number;
    top: number;
    width: number;
}
export interface IluckyImages {
    [index: string]: IluckyImage;
}
export interface IcellOtherInfo {
    [index: string]: IformulaList;
}
export interface IformulaList {
    [index: string]: IformulaListItem;
}
export interface IformulaListItem {
    r: number;
    c: number;
}
export interface IluckyChartImage {
    border: IluckyImageBorder;
    crop: IluckyImageCrop;
    default: IluckyImageDefault;
    fixedLeft: number;
    fixedTop: number;
    isFixedPos: Boolean;
    originHeight: number;
    originWidth: number;
    data: IluckyChartImageData;
    type: string;
    [key: string]: any;
}
export interface IluckyChartImageData {
    border: string;
    background: string;
    range: string;
    chartType: ChartTypeBits;
    isRowDirection: boolean;
}
export interface IluckyCharts {
    [index: string]: IluckyChart;
}
export interface IluckyChart {
    id: string;
    range: string;
    chartType: ChartTypeBits;
    context: ILuckyChartContext;
    style: ILuckyChartStyle;
    isRowDirection: boolean;
}
export interface ILuckyChartContext {
    categoryIndex: number;
    seriesIndexes: number[];
}
export interface ILuckyChartStyle {
    titles: ILuckyChartStyleTitles;
    runtime: any;
    width: number;
    height: number;
    backgroundColor?: string;
    borderColor?: string;
    xAxis?: ILuckyChartStyleAxis;
    yAxis?: ILuckyChartStyleAxis;
    allSeriesStyle?: ILuckyChartStyleSeries;
    seriesStyleMap?: ILuckyChartStyleSerieStyles;
    legend?: ILuckyChartStyleLegend;
    gradientFill?: boolean;
}
export interface ILuckyChartStyleTitles {
    titlePosition?: 'top' | 'bottom' | 'left' | 'right' | 'hide';
    [key: string]: ILuckyChartStyleTitle | string;
}
export interface ILuckyChartStyleTitle extends ILuckyChartStyleBase {
    content: string;
}
export interface ILuckyChartStyleBase {
    color?: string;
    fontSize?: number;
    bold?: boolean;
    italic?: boolean;
}
export interface ILuckyChartStyleAxis {
    label: ILuckyChartStyleAxisLabel;
    reverse: boolean;
    lineVisible: boolean;
    gridLine: {
        visible: boolean;
        width: number;
        color: string;
    };
    tick: {
        visible: boolean;
        position: 'inside' | 'outside';
        length?: number;
        lineWidth?: number;
    };
    min: number;
    max: number;
}
export interface ILuckyChartStyleAxisLabel extends ILuckyChartStyleBase {
    axisTitleAlign: 'start' | 'center' | 'end';
    rotate: number;
}
export interface ILuckyChartStyleSeries {
    border?: ILuckyChartStyleBorder;
    label?: {
        visible?: boolean;
    };
    fillOpacity?: number;
}
export interface ILuckyChartStyleBorder {
    dashType: 'solid' | 'dotted' | 'dashed';
    width: number;
    opacity: number;
    color: string;
}
export interface ILuckyChartStyleSerieStyles {
    [key: string]: ILuckyChartStyleSerieStyle;
}
export interface ILuckyChartStyleSerieStyle {
    border?: ILuckyChartStyleBorder;
    rightYAxis?: boolean;
    label: {
        visible: boolean;
        position: 'inside' | 'outside';
        contentType: number;
    } & ILuckyChartStyleBase;
}
export interface ILuckyChartStyleLegend {
    position: 'top' | 'bottom' | 'left' | 'right' | 'hide';
    selectMode?: 'single' | 'multiple' | 'close';
    label?: ILuckyChartStyleBase;
}
export interface IluckysheetDataVerification {
    [key: string]: IluckysheetDataVerificationValue;
}
export interface IluckysheetDataVerificationValue {
    type: IluckysheetDataVerificationType;
    type2: string | null;
    value1: string | number | null;
    value2: string | number | null;
    checked: boolean;
    remote: boolean;
    prohibitInput: boolean;
    hintShow: boolean;
    hintText: string;
}
export type IluckysheetDataVerificationType = "dropdown" | "checkbox" | "number" | "number_integer" | "number_decimal" | "text_content" | "text_length" | "date" | "validity";
export interface IluckysheetHyperlink {
    [key: string]: IluckysheetHyperlinkValue;
}
export interface IluckysheetHyperlinkValue {
    linkAddress: string;
    linkTooltip: string;
    linkType: IluckysheetHyperlinkType;
    display: string;
}
export type IluckysheetHyperlinkType = "internal" | "external";
