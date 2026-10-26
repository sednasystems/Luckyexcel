import { ReadXml } from "./ReadXml";
import { IRange } from "./style";
export interface IFilters {
    blank?: boolean;
    filters?: Array<string>;
}
export interface ICustomFilter {
    val: string | number;
    operator?: CustomFilterOperator;
}
export declare enum CustomFilterOperator {
    EQUAL = "equal",
    GREATER_THAN = "greaterThan",
    GREATER_THAN_OR_EQUAL = "greaterThanOrEqual",
    LESS_THAN = "lessThan",
    LESS_THAN_OR_EQUAL = "lessThanOrEqual",
    NOT_EQUALS = "notEqual"
}
export interface ICustomFilters {
    and?: 1;
    customFilters: [ICustomFilter] | [ICustomFilter, ICustomFilter];
}
export interface IFilterColumn {
    colId: number;
    filters?: IFilters;
    customFilters?: ICustomFilters;
}
export interface LuckyFilterFormat {
    ref: IRange;
    filterColumns: IFilterColumn[];
    cachedFilteredOut: number[];
}
export declare class LuckFilter implements LuckyFilterFormat {
    ref: IRange;
    filterColumns: IFilterColumn[];
    cachedFilteredOut: number[];
    constructor(readXml: ReadXml, sheetFile: string);
}
