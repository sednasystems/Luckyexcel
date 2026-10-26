export declare class CSV {
    csvList: {
        [key: string]: Array<Array<any>>;
    };
    csvContent: {
        [key: string]: string;
    };
    constructor(snapshot: any);
    init(snapshot: any): void;
    handleCsvContent(): void;
}
