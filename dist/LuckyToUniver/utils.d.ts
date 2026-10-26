import { BooleanNumber, Nullable, IBorderData, ThemeColorType } from '@univerjs/core';
import { IluckySheetborderInfoCellForImp, IluckySheetCelldata } from '../ToLuckySheet/ILuck';
/**
 * 删除对象中含undefined的值
 * @param object
 * @returns
 */
export declare function removeEmptyAttr(object: any): any;
export declare const handleStyle: (row: IluckySheetCelldata, borderInfo?: IluckySheetborderInfoCellForImp, domContent?: boolean) => {
    bd: Nullable<IBorderData>;
    bg: {
        rgb: string;
        th: ThemeColorType;
    };
    bl: number;
    cl: {
        rgb: string;
        th: ThemeColorType;
    };
    ff: string;
    fs: number;
    ht: any;
    it: number;
    n: {
        pattern: string;
    };
    st: {
        s: BooleanNumber;
    };
    tb: any;
    tr: {
        a: any;
        v: BooleanNumber;
    };
    ul: {
        s: BooleanNumber;
        t: any;
    };
    vt: any;
};
