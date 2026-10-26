import { stringToNum, IattributeList, IDataVerificationMap, IDataVerificationType2Map } from "../ICommon";
export declare const columeHeader_word: string[];
export declare const columeHeader_word_index: stringToNum;
export declare const coreFile = "docProps/core.xml";
export declare const appFile = "docProps/app.xml";
export declare const contentTypesFile = "[Content_Types].xml";
export declare const workBookFile = "xl/workbook.xml";
export declare const calcChainFile = "xl/calcChain.xml";
export declare const stylesFile = "xl/styles.xml";
export declare const sharedStringsFile = "xl/sharedStrings.xml";
export declare const worksheetFilePath = "xl/worksheets/";
export declare const theme1File = "xl/theme/theme1.xml";
export declare const workbookRels = "xl/_rels/workbook.xml.rels";
export declare const cellImages = "xl/cellimages.xml";
export declare const cellImagesRels = "xl/_rels/cellimages.xml.rels";
export declare const ST_CellType: IattributeList;
export declare const BuiltInCellStyles: IattributeList;
export declare let numFmtDefault: IattributeList;
export declare const indexedColors: IattributeList;
export declare const OEM_CHARSET: IattributeList;
export declare const borderTypes: stringToNum;
export declare let numFmtDefaultMap: IattributeList;
export declare const fontFamilys: IattributeList;
export declare const DATA_VERIFICATION_MAP: IDataVerificationMap;
export declare const COMMON_TYPE2: string[];
export declare const DATA_VERIFICATION_TYPE2_MAP: IDataVerificationType2Map;
export declare enum ChartAttributeBits {
    Stack = 1073741824,
    PercentStack = 1610612736,
    Horizontal = 268435456
}
export declare enum ChartTypeBits {
    None = 0,
    Line = 2,
    Column = 4,
    ColumnStacked = 1073741828,
    ColumnPercentStacked = 1610612740,
    Bar = 268435460,
    BarStacked = 1342177284,
    BarPercentStacked = 1879048196,
    Pie = 8,
    Doughnut = 264,
    Area = 16,
    AreaStacked = 1073741840,
    AreaPercentStacked = 1610612752,
    Radar = 32,
    Scatter = 64,
    Combination = 128
}
export declare enum LabelContentType {
    Empty = 0,
    CategoryName = 2,
    SeriesName = 4,
    Value = 8,
    Percentage = 16
}
