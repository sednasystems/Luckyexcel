import { IluckySheetborderInfoCellForImp } from "./ILuck";
import { ReadXml, Element, IStyleCollections } from "./ReadXml";
import { LuckySheetCelldataBase } from "./LuckyBase";
import { ImageList } from "./LuckyImage";
export declare class LuckySheetCelldata extends LuckySheetCelldataBase {
    _borderObject: IluckySheetborderInfoCellForImp;
    _fomulaRef: string;
    _formulaSi: string;
    _formulaType: string;
    private sheetFile;
    private readXml;
    private cell;
    private styles;
    private sharedStrings;
    private mergeCells;
    private cellImages;
    private imageList;
    private cellSize;
    constructor(cell: Element, cellSize: {
        width: number;
        height: number;
    }, styles: IStyleCollections, sharedStrings: Element[], mergeCells: Element[], sheetFile: string, cellImages: Element[], imageList: ImageList, ReadXml: ReadXml);
    /**
    * @param s Style index ,start 1
    * @param t Cell type, Optional value is ST_CellType, it's found at constat.ts
    */
    private generateValue;
    private htmlDecode;
    private getCellImage;
    private extractImageId;
    private getBase64ByRid;
}
