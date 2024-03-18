export type ReportType = {
  id: number;
  name: string;
  value: ReportKey;
};

export type HistoricalReportItem = {
  id: number;
  reportType: ReportType;
  recordingDate: string;
};

export enum Shift {
  ALL_DAY = 'ALL_DAY',
  MORNING = 'MORNING',
  AFTERNOON = 'AFTERNOON',
}

export enum ReportKey {
  CHE_BIEN_DAM = 'CHE_BIEN_DAM',
  BAN_THANH_PHAN = 'BAN_THANH_PHAN',
}
