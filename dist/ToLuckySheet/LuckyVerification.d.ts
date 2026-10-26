import { Element } from "./ReadXml";
import { IRange } from "./style";
export declare enum DataValidationType {
    /**
     * custom formula
     */
    CUSTOM = "custom",
    LIST = "list",
    LIST_MULTIPLE = "listMultiple",
    NONE = "none",
    TEXT_LENGTH = "textLength",
    DATE = "date",
    TIME = "time",
    /**
     * integer number
     */
    WHOLE = "whole",
    /**
     * decimal number
     */
    DECIMAL = "decimal",
    CHECKBOX = "checkbox"
}
export declare enum DataValidationOperator {
    BETWEEN = "between",
    EQUAL = "equal",
    GREATER_THAN = "greaterThan",
    GREATER_THAN_OR_EQUAL = "greaterThanOrEqual",
    LESS_THAN = "lessThan",
    LESS_THAN_OR_EQUAL = "lessThanOrEqual",
    NOT_BETWEEN = "notBetween",
    NOT_EQUAL = "notEqual"
}
export declare enum DataValidationErrorStyle {
    INFO = 0,
    STOP = 1,
    WARNING = 2
}
export declare enum DataValidationImeMode {
    DISABLED = 0,
    FULL_ALPHA = 1,
    FULL_HANGUL = 2,
    FULL_KATAKANA = 3,
    HALF_ALPHA = 4,
    HALF_HANGUL = 5,
    HALF_KATAKANA = 6,
    HIRAGANA = 7,
    NO_CONTROL = 8,
    OFF = 9,
    ON = 10
}
export declare enum DataValidationRenderMode {
    TEXT = 0,
    ARROW = 1,
    CUSTOM = 2
}
export interface LuckyVerificationFormat {
    type: DataValidationType;
    allowBlank?: boolean;
    formula1?: string;
    formula2?: string;
    operator?: DataValidationOperator;
    imeMode?: DataValidationImeMode;
    /**
     * for dropdown
     */
    showDropDown?: boolean;
    /**
     * validator error
     */
    showErrorMessage?: boolean;
    error?: string;
    errorStyle?: DataValidationErrorStyle;
    errorTitle?: string;
    /**
     * input prompt, not for using now.
     */
    showInputMessage?: boolean;
    prompt?: string;
    promptTitle?: string;
    /**
     * cell render mode of data validation
     */
    renderMode?: DataValidationRenderMode;
    /**
     * custom biz info
     */
    bizInfo?: {
        showTime?: boolean;
    };
    uid: string;
    ranges: IRange[];
}
export declare class LuckyVerification implements LuckyVerificationFormat {
    type: DataValidationType;
    allowBlank?: boolean;
    formula1?: string;
    formula2?: string;
    operator?: DataValidationOperator;
    imeMode?: DataValidationImeMode;
    showDropDown?: boolean;
    showErrorMessage?: boolean;
    error?: string;
    errorStyle?: DataValidationErrorStyle;
    errorTitle?: string;
    showInputMessage?: boolean;
    prompt?: string;
    promptTitle?: string;
    renderMode?: DataValidationRenderMode;
    bizInfo?: {
        showTime?: boolean;
    };
    uid: string;
    ranges: IRange[];
    constructor(ele: Element, extLst: Element[]);
}
