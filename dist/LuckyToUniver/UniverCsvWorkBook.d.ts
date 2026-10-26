import { IResources, IStyleData, IWorkbookData, IWorksheetData, LocaleType, Nullable } from '@univerjs/core';
export declare class UniverCsvWorkBook implements IWorkbookData {
    id: string;
    rev?: number | undefined;
    name: string;
    appVersion: string;
    locale: LocaleType;
    styles: Record<string, Nullable<IStyleData>>;
    sheetOrder: string[];
    sheets: {
        [sheetId: string]: Partial<IWorksheetData>;
    };
    resources?: IResources | undefined;
    constructor(data: string[][]);
    get mode(): IWorkbookData;
}
