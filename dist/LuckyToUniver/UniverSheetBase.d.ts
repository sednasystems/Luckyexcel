import { BooleanNumber, ICellData, IColumnData, IFreeze, IObjectArrayPrimitiveType, IObjectMatrixPrimitiveType, IRange, IRowData, IWorksheetData, SheetTypes } from '@univerjs/core';
export interface UniverSheetBaseParams {
    id?: string;
    name?: string;
    cellData?: IObjectMatrixPrimitiveType<ICellData>;
    rowCount?: number;
    colCount?: number;
}
export declare class UniverSheetBase implements IWorksheetData {
    id: string;
    name: string;
    type: SheetTypes;
    tabColor: string;
    hidden: BooleanNumber;
    freeze: IFreeze;
    rowCount: number;
    columnCount: number;
    zoomRatio: number;
    scrollTop: number;
    scrollLeft: number;
    defaultColumnWidth: number;
    defaultRowHeight: number;
    mergeData: IRange[];
    cellData: IObjectMatrixPrimitiveType<ICellData>;
    rowData: IObjectArrayPrimitiveType<Partial<IRowData>>;
    columnData: IObjectArrayPrimitiveType<Partial<IColumnData>>;
    rowHeader: {
        width: number;
        hidden?: BooleanNumber | undefined;
    };
    columnHeader: {
        height: number;
        hidden?: BooleanNumber | undefined;
    };
    showGridlines: BooleanNumber;
    rightToLeft: BooleanNumber;
    selections: string[];
    constructor(params?: UniverSheetBaseParams);
}
