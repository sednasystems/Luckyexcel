import { IStyleData, IWorkbookData, IWorksheetData, LocaleType, Nullable } from '@univerjs/core';
import { IResources } from '@univerjs/core/lib/types/services/resource-manager/type';
import { HyperLink } from './UniverSheet';
import { ILuckyFile } from '../ToLuckySheet/ILuck';
interface Sheets {
    [sheetId: string]: Partial<IWorksheetData & {
        hyperLink: HyperLink[];
    }>;
}
export declare class UniverWorkBook implements IWorkbookData {
    id: string;
    rev?: number | undefined;
    name: string;
    appVersion: string;
    locale: LocaleType;
    styles: Record<string, Nullable<IStyleData>>;
    sheetOrder: string[];
    sheets: Sheets;
    resources?: IResources | undefined;
    constructor(file: ILuckyFile);
    get mode(): IWorkbookData;
    private handleHyperLinks;
    private handleImage;
    private handleChart;
    private handleNames;
    private handleCondition;
    private handleVerification;
    private handleFilter;
}
export {};
