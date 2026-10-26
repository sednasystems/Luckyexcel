import { LuckyChart, LuckyChartImageBase } from "./LuckyBase";
import { Element, IStyleCollections, ReadXml } from "./ReadXml";
import { ChartTypeBits } from "../common/constant";
export declare class LuckyChartImage extends LuckyChartImageBase {
    id: string;
    constructor(id: string, xdr_xfrm: Element, range: string, chartType: ChartTypeBits);
}
export declare class ChartImageGroup {
    chart: LuckyChart;
    image: LuckyChartImage;
    readXml: ReadXml;
    constructor({ graphicFrame, readXml, drawingRelsFile, styles }: {
        graphicFrame: Element;
        readXml: ReadXml;
        drawingRelsFile: string;
        styles: IStyleCollections;
    });
    private getChartRange;
    private getChartRef;
}
