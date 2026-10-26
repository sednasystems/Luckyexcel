import { Element, ReadXml } from "./ReadXml";
export interface IDefinedNameParam {
    id: string;
    name: string;
    formulaOrRefString: string;
    comment?: string;
    localSheetId?: string;
    hidden?: boolean;
}
export interface IDefinedNames {
    [key: string]: LuckyDefineName;
}
export declare class LuckyDefineNames {
    defineNames: IDefinedNames;
    constructor(readXml: ReadXml);
}
export declare class LuckyDefineName implements IDefinedNameParam {
    id: string;
    name: string;
    formulaOrRefString: string;
    comment?: string;
    localSheetId?: string;
    hidden?: boolean;
    constructor(ele: Element);
}
