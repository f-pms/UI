import { Checkpoint } from '~/pages/Report/helpers/columns';

export enum ReportKey {
  CHE_BIEN_DAM = 'DAM',
  BAN_THANH_PHAM = 'BTP',
}

export type ReportType = {
  id: number;
  name: ReportKey;
};

export type HistoricalReport = {
  id: number;
  recordingDate: string;
  type: ReportType;
  sum: {
    TONG1: number;
    TONG2: number;
  };
};

export type HistoricalReportPagination = {
  pageTotal: number;
  recordTotal: number;
  content: HistoricalReport[];
};

export type HistoricalReportItem = {
  id: number;
  reportType: ReportType;
  recordingDate: string;
};

export enum Shift {
  ALL_DAY = 'ALL_DAY',
  MORNING = 'MORNING',
  NIGHT = 'NIGHT',
}

export type CheckpointValue = {
  [key in Checkpoint]: {
    newValue: number | string;
    total?: number | string;
  };
};

export interface StaticValues {
  id: number;
  locationInfo: string;
  electricRoom: string;
  electricMeter: string[];
  equipments: string[];
}

export interface DynamicValues {
  oldElectricValues: number[] | string[];
  checkpoints: CheckpointValue[];
  checkpointTotals: number[] | string[];
  meterMultipliers: number[] | string[];
}

export interface ElectricalMeterReadingRowValues
  extends StaticValues,
    DynamicValues {}

export type ElectricalMeterReadingTableValues = {
  title: string;
  rows: ElectricalMeterReadingRowValues[];
  total: number;
  totalOrderNumber: string | number;
};

export type RowsMap = {
  [key in ROWS_MAP_KEYS]: number;
};

export type ReportDetails = {
  id: number;
  recordingDate: string;
  type: ReportType;
  rowsMaps: RowsMap[];
  sum: {
    TONG1: number;
    TONG2: number;
  };
};

export enum ROWS_MAP_KEYS {
  DAM_9_4 = 'DAM_9_4',
  DAM_5_3 = 'DAM_5_3',
  DAM_7_1 = 'DAM_7_1',
  DAM_3_4 = 'DAM_3_4',
  DAM_5_2 = 'DAM_5_2',
  DAM_7_0 = 'DAM_7_0',
  DAM_3_3 = 'DAM_3_3',
  DAM_5_1 = 'DAM_5_1',
  DAM_1_4 = 'DAM_1_4',
  DAM_3_2 = 'DAM_3_2',
  DAM_5_0 = 'DAM_5_0',
  DAM_9_3 = 'DAM_9_3',
  DAM_7_4 = 'DAM_7_4',
  DAM_9_2 = 'DAM_9_2',
  DAM_7_3 = 'DAM_7_3',
  DAM_9_1 = 'DAM_9_1',
  DAM_5_4 = 'DAM_5_4',
  DAM_7_2 = 'DAM_7_2',
  DAM_9_0 = 'DAM_9_0',
  DAM_1_3 = 'DAM_1_3',
  DAM_3_1 = 'DAM_3_1',
  DAM_1_2 = 'DAM_1_2',
  DAM_3_0 = 'DAM_3_0',
  DAM_1_1 = 'DAM_1_1',
  DAM_1_0 = 'DAM_1_0',
  DAM_11_2 = 'DAM_11_2',
  DAM_11_1 = 'DAM_11_1',
  DAM_11_0 = 'DAM_11_0',
  DAM_11_4 = 'DAM_11_4',
  DAM_11_3 = 'DAM_11_3',
  DAM_4_4 = 'DAM_4_4',
  DAM_6_2 = 'DAM_6_2',
  DAM_8_0 = 'DAM_8_0',
  DAM_4_3 = 'DAM_4_3',
  DAM_6_1 = 'DAM_6_1',
  DAM_2_4 = 'DAM_2_4',
  DAM_4_2 = 'DAM_4_2',
  DAM_6_0 = 'DAM_6_0',
  DAM_2_3 = 'DAM_2_3',
  DAM_4_1 = 'DAM_4_1',
  DAM_8_4 = 'DAM_8_4',
  DAM_8_3 = 'DAM_8_3',
  DAM_6_4 = 'DAM_6_4',
  DAM_8_2 = 'DAM_8_2',
  DAM_6_3 = 'DAM_6_3',
  DAM_8_1 = 'DAM_8_1',
  DAM_2_2 = 'DAM_2_2',
  DAM_4_0 = 'DAM_4_0',
  DAM_2_1 = 'DAM_2_1',
  DAM_2_0 = 'DAM_2_0',
  DAM_10_3 = 'DAM_10_3',
  DAM_10_2 = 'DAM_10_2',
  DAM_10_1 = 'DAM_10_1',
  DAM_10_0 = 'DAM_10_0',
  DAM_10_4 = 'DAM_10_4',
  BTP_16_3 = 'BTP_16_3',
  BTP_16_4 = 'BTP_16_4',
  BTP_14_3 = 'BTP_14_3',
  BTP_16_1 = 'BTP_16_1',
  BTP_14_4 = 'BTP_14_4',
  BTP_16_2 = 'BTP_16_2',
  BTP_12_3 = 'BTP_12_3',
  BTP_14_1 = 'BTP_14_1',
  BTP_12_4 = 'BTP_12_4',
  BTP_14_2 = 'BTP_14_2',
  BTP_16_0 = 'BTP_16_0',
  BTP_10_3 = 'BTP_10_3',
  BTP_12_1 = 'BTP_12_1',
  BTP_10_4 = 'BTP_10_4',
  BTP_12_2 = 'BTP_12_2',
  BTP_14_0 = 'BTP_14_0',
  BTP_10_1 = 'BTP_10_1',
  BTP_10_2 = 'BTP_10_2',
  BTP_12_0 = 'BTP_12_0',
  BTP_10_0 = 'BTP_10_0',
  BTP_2_3 = 'BTP_2_3',
  BTP_4_1 = 'BTP_4_1',
  BTP_2_2 = 'BTP_2_2',
  BTP_4_0 = 'BTP_4_0',
  BTP_4_3 = 'BTP_4_3',
  BTP_6_1 = 'BTP_6_1',
  BTP_2_4 = 'BTP_2_4',
  BTP_4_2 = 'BTP_4_2',
  BTP_6_0 = 'BTP_6_0',
  BTP_2_1 = 'BTP_2_1',
  BTP_2_0 = 'BTP_2_0',
  BTP_8_4 = 'BTP_8_4',
  BTP_6_3 = 'BTP_6_3',
  BTP_8_1 = 'BTP_8_1',
  BTP_4_4 = 'BTP_4_4',
  BTP_6_2 = 'BTP_6_2',
  BTP_8_0 = 'BTP_8_0',
  BTP_8_3 = 'BTP_8_3',
  BTP_6_4 = 'BTP_6_4',
  BTP_8_2 = 'BTP_8_2',
  BTP_15_4 = 'BTP_15_4',
  BTP_13_4 = 'BTP_13_4',
  BTP_15_2 = 'BTP_15_2',
  BTP_15_3 = 'BTP_15_3',
  BTP_11_4 = 'BTP_11_4',
  BTP_13_2 = 'BTP_13_2',
  BTP_15_0 = 'BTP_15_0',
  BTP_13_3 = 'BTP_13_3',
  BTP_15_1 = 'BTP_15_1',
  BTP_11_2 = 'BTP_11_2',
  BTP_13_0 = 'BTP_13_0',
  BTP_11_3 = 'BTP_11_3',
  BTP_13_1 = 'BTP_13_1',
  BTP_11_0 = 'BTP_11_0',
  BTP_11_1 = 'BTP_11_1',
  BTP_1_4 = 'BTP_1_4',
  BTP_3_2 = 'BTP_3_2',
  BTP_5_0 = 'BTP_5_0',
  BTP_1_3 = 'BTP_1_3',
  BTP_3_1 = 'BTP_3_1',
  BTP_3_4 = 'BTP_3_4',
  BTP_5_2 = 'BTP_5_2',
  BTP_7_0 = 'BTP_7_0',
  BTP_3_3 = 'BTP_3_3',
  BTP_5_1 = 'BTP_5_1',
  BTP_1_0 = 'BTP_1_0',
  BTP_1_2 = 'BTP_1_2',
  BTP_3_0 = 'BTP_3_0',
  BTP_1_1 = 'BTP_1_1',
  BTP_9_4 = 'BTP_9_4',
  BTP_9_3 = 'BTP_9_3',
  BTP_5_4 = 'BTP_5_4',
  BTP_7_2 = 'BTP_7_2',
  BTP_9_0 = 'BTP_9_0',
  BTP_5_3 = 'BTP_5_3',
  BTP_7_1 = 'BTP_7_1',
  BTP_7_4 = 'BTP_7_4',
  BTP_9_2 = 'BTP_9_2',
  BTP_7_3 = 'BTP_7_3',
  BTP_9_1 = 'BTP_9_1',
}
