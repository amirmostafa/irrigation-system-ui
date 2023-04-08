export interface PlotConfig {
    amountOfWater: number;
    startTime: Date;
    endTime: Date;
    intervalUnit: IntervalUnit;
    timeInterval: number;
}

export enum IntervalUnit {
    MINUTE = 'MINUTE', HOUR = 'HOUR', DAY = 'DAY', WEEK = 'WEEK', MONTH = 'MONTH', YEAR = 'YEAR'
}