import exceljs from "@zwight/exceljs";
declare const Workbook: typeof exceljs.Workbook;
export declare class WorkBook extends Workbook {
    constructor(snapshot: any);
    private init;
    private setDefineNames;
}
export {};
