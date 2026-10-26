import { LuckySheetBase } from "./LuckyBase";
export declare class LuckySheet extends LuckySheetBase {
    private readXml;
    private sheetFile;
    private isInitialCell;
    private styles;
    private sharedStrings;
    private mergeCells;
    private calcChainEles;
    private sheetList;
    private cellImages;
    private imageList;
    private formulaRefList;
    constructor(sheetName: string, sheetId: string, sheetOrder: number, isInitialCell: boolean, allFileOption: any);
    private getImageBaseInfo;
    private getImage;
    private getGraphic;
    private getXdrValue;
    private getBase64ByRid;
    /**
    * @desc This will convert cols/col to luckysheet config of column'width
    */
    private generateConfigColumnLenAndHidden;
    /**
    * @desc This will convert cols/col to luckysheet config of column'width
    */
    private generateConfigRowLenAndHiddenAddCell;
    private generateConfigDataValidationsList;
    /**
     * luckysheet config of dataValidations
     *
     * @returns {IluckysheetDataVerification} - dataValidations config
     */
    private generateConfigDataValidations;
    /**
     * luckysheet config of hyperlink
     *
     * @returns {IluckysheetHyperlink} - hyperlink config
     */
    private generateConfigHyperlinks;
    private getCellSize;
}
