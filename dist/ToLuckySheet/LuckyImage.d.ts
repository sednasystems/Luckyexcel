import { IuploadfileList } from "../ICommon";
import { LuckyImageBase } from "./LuckyBase";
export declare class ImageList {
    private images;
    constructor(files: IuploadfileList);
    getImageByName(pathName: string): Image;
}
declare class Image extends LuckyImageBase {
    fromCol: number;
    fromColOff: number;
    fromRow: number;
    fromRowOff: number;
    toCol: number;
    toColOff: number;
    toRow: number;
    toRowOff: number;
    id: string;
    constructor(pathName: string, base64: string);
    setDefault(): void;
}
export {};
