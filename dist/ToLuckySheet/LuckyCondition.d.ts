import { IattributeList } from "../ICommon";
import { Element, IStyleCollections, ReadXml } from "./ReadXml";
import { IRange } from "./style";
export interface ConditionFormationRule {
    type: string;
    subType?: string;
    style?: {};
    value?: string;
    isShowValue?: boolean;
}
export interface LuckyConditionFormat<C = any> {
    ranges: IRange[];
    cfId: string;
    stopIfTrue: boolean;
    order: number;
    rule: C;
}
export declare enum CFTextOperator {
    beginsWith = "beginsWith",
    endsWith = "endsWith",
    containsText = "containsText",
    notContainsText = "notContainsText",
    equal = "equal",
    notEqual = "notEqual",
    containsBlanks = "containsBlanks",
    notContainsBlanks = "notContainsBlanks",
    containsErrors = "containsErrors",
    notContainsErrors = "notContainsErrors"
}
export declare enum CFTimePeriodOperator {
    today = "today",
    yesterday = "yesterday",
    tomorrow = "tomorrow",
    last7Days = "last7Days",
    thisMonth = "thisMonth",
    lastMonth = "lastMonth",
    nextMonth = "nextMonth",
    thisWeek = "thisWeek",
    lastWeek = "lastWeek",
    nextWeek = "nextWeek"
}
export declare enum CFNumberOperator {
    greaterThan = "greaterThan",
    greaterThanOrEqual = "greaterThanOrEqual",
    lessThan = "lessThan",
    lessThanOrEqual = "lessThanOrEqual",
    notBetween = "notBetween",
    between = "between",
    equal = "equal",
    notEqual = "notEqual"
}
export declare enum CFRuleType {
    highlightCell = "highlightCell",
    dataBar = "dataBar",
    colorScale = "colorScale",
    iconSet = "iconSet"
}
export declare enum CFSubRuleType {
    uniqueValues = "uniqueValues",
    duplicateValues = "duplicateValues",
    rank = "rank",
    text = "text",
    timePeriod = "timePeriod",
    number = "number",
    average = "average",
    formula = "formula"
}
interface ConditionElement extends Element {
    parentAttribute: IattributeList;
    extLst: Element;
    isExtLst: boolean;
}
export declare class LuckyCondition implements LuckyConditionFormat {
    ranges: IRange[];
    cfId: string;
    stopIfTrue: boolean;
    order: number;
    rule: any;
    constructor(ele: ConditionElement, readXml: ReadXml, styles: IStyleCollections);
    private handleRules;
}
export {};
