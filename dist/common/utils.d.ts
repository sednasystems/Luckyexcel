export declare enum CHARSET_TYPE {
    UTF8 = "UTF-8",
    GBK = "GBK",
    CP936 = "CP936",
    ISO8859 = "ISO-8859"
}
export declare const getDataByFile: ({ file, charset }: any) => Promise<string>;
export declare const formatSheetData: (sheetData: string, file: File) => string[][];
export declare const replaceSpecialWrap: (text: string) => string;
