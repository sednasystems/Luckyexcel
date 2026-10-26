import JSZip from "@progress/jszip-esm";
import { IuploadfileList } from "./ICommon";
export declare class HandleZip {
    uploadFile: File;
    workBook: JSZip;
    constructor(file?: any);
    unzipFile(successFunc: (file: IuploadfileList) => void, errorFunc: (err: Error) => void): void;
    unzipFileByUrl(url: string, successFunc: (file: IuploadfileList) => void, errorFunc: (err: Error) => void): void;
    newZipFile(): void;
    addToZipFile(title: string, content: string): void;
}
