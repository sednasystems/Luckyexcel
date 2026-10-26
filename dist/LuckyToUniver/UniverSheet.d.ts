import { UniverSheetBase } from './UniverSheetBase';
import { IluckySheet } from '../ToLuckySheet/ILuck';
export interface HyperLink {
    id: string;
    payload: string | {
        gid: string;
        range: string;
    };
    row: number;
    column: number;
}
export interface UniverSheetMode extends UniverSheetBase {
    hyperLink: HyperLink[];
    mode: UniverSheetMode;
}
export declare class UniverSheet extends UniverSheetBase {
    hyperLink: HyperLink[];
    constructor(sheetData: IluckySheet);
    get mode(): Omit<UniverSheetMode, 'mode'>;
    private handleMerge;
    private handleCellData;
    private handleDocument;
    private handleCellImage;
    private handleRowAndColumnData;
    /**
     * 处理链接
     * @param sheetName IluckysheetHyperlink
     */
    private handleSheetLink;
    private handleFreeze;
}
