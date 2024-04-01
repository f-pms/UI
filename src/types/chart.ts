export type OneDayChartByShift = {
  SUM_TOTAL: number;
  SUM_PEAK: number;
  SUM_OFFPEAK: number;
  SUM_STANDARD: number;
  SUM_SPECIFIC_1: number;
  SUM_SPECIFIC_2: number;
  SUM_SPECIFIC_3: number;
  SUM_SPECIFIC_4: number;
  SUM_SPECIFIC_5: number;
  SUM_SPECIFIC_6: number;
  SUM_SPECIFIC_7: number;
  SUM_SPECIFIC_8: number;
  SUM_SPECIFIC_9: number;
  SUM_SPECIFIC_11: number;
  SUM_SPECIFIC_12: number;
  SUM_SPECIFIC_13: number;
  SUM_SPECIFIC_14: number;
  SUM_SPECIFIC_15: number;
  SUM_SPECIFIC_16: number;
};

export type OneDayChartByShiftCharts = {
  recordingDate: string;
  data: OneDayChartByShift[];
};

export type MultiDateReportSummary = {
  SUM_TOTAL: number;
  SUM_OFFPEAK: number;
  SUM_STANDARD: number;
  SUM_PEAK: number;
};

export type MultiDateReportSummaryChart = {
  labelSteps: string[];
  data: {
    DAM: {
      SUM_SPECIFIC_2: number[];
      SUM_SPECIFIC_1: number[];
      SUM_SPECIFIC_3: number[];
      SUM_TOTAL: number[];
      SUM_OFFPEAK: number[];
      SUM_STANDARD: number[];
      SUM_PEAK: number[];
    };
    BTP: {
      SUM_TOTAL: number[];
      SUM_SPECIFIC_15: number[];
      SUM_SPECIFIC_9: number[];
      SUM_SPECIFIC_14: number[];
      SUM_PEAK: number[];
      SUM_SPECIFIC_16: number[];
      SUM_SPECIFIC_11: number[];
      SUM_SPECIFIC_13: number[];
      SUM_SPECIFIC_12: number[];
      SUM_SPECIFIC_2: number[];
      SUM_SPECIFIC_1: number[];
      SUM_SPECIFIC_4: number[];
      SUM_SPECIFIC_3: number[];
      SUM_SPECIFIC_6: number[];
      SUM_SPECIFIC_5: number[];
      SUM_OFFPEAK: number[];
      SUM_STANDARD: number[];
      SUM_SPECIFIC_8: number[];
      SUM_SPECIFIC_7: number[];
    };
  };
};
