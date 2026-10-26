import { Workbook, Worksheet } from "@zwight/exceljs";
export declare class Resource {
    sheetId: string;
    workbook: Workbook;
    worksheet: Worksheet;
    resources: any;
    constructor(sheetId: string, workbook: Workbook, worksheet: Worksheet, resources: any);
    private handleRang;
    private setFilter;
    private setConditional;
    private setDataValidation;
    private setImages;
    private getSheetResource;
    private handleRule;
}
