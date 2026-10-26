import { IuploadfileList } from "../ICommon";
import { LuckyFileBase } from "./LuckyBase";
export declare class LuckyFile extends LuckyFileBase {
    private files;
    private sheetNameList;
    private readXml;
    private fileName;
    private styles;
    private sharedStrings;
    private calcChain;
    private imageList;
    private cellImages;
    constructor(files: IuploadfileList, fileName: string);
    /**
    * @return All sheet name of workbook
    */
    private getSheetNameList;
    /**
    * @param sheetName WorkSheet'name
    * @return sheet file name and path in zip
    */
    private getSheetFileBysheetId;
    /**
    * @return workBook information
    */
    getWorkBookInfo(): void;
    /**
    * @return All sheet , include whole information
    */
    getSheetsFull(isInitialCell?: boolean): void;
    private columnWidthSet;
    private rowHeightSet;
    private extendArray;
    private imagePositionCaculation;
    /**
    * @return drawing file string
    */
    private getDrawingFile;
    private getDrawingRelsFile;
    private handleWorkBookInfo;
    /**
    * @return All sheet base information widthout cell and config
    */
    getSheetsWithoutCell(): void;
    /**
    * @return LuckySheet file json
    */
    Parse(): string;
    private toJsonString;
}
