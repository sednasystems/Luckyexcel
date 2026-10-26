import { Style } from "@zwight/exceljs";
export declare function cellStyle(style: any, numFmt: any, isCondition?: boolean): Style;
export declare function fontConvert(style: any): {
    name: any;
    size: any;
    family: number;
    color: any;
    bold: any;
    italic: any;
    underline: any;
    vertAlign: any;
    strike: any;
    outline: any;
    charset: number;
};
