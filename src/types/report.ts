import { Checkpoint } from '~/pages/Report/helpers/columns';

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
  NIGHT = 'NIGHT',
}

export enum ReportKey {
  CHE_BIEN_DAM = 'DAM',
  BAN_THANH_PHAM = 'THANH_PHAM',
}

export const UNITS = {
  [ReportKey.CHE_BIEN_DAM]: 'tấn',
  [ReportKey.BAN_THANH_PHAM]: 'm3',
};

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
  totalOrderNumber: string;
};

export type RowsMap = {
  [key in ROWS_MAP_KEYS]: number;
};

export type ReportDetails = {
  id: number;
  recordingDate: string;
  type: ReportType;
  rowsMap: RowsMap;
  sum: {
    TONG1: number;
    TONG2: number;
  };
};

export enum ROWS_MAP_KEYS {
  DAM_9_4 = 'DAM_9.4',
  DAM_5_3 = 'DAM_5.3',
  DAM_7_1 = 'DAM_7.1',
  DAM_3_4 = 'DAM_3.4',
  DAM_5_2 = 'DAM_5.2',
  DAM_7_0 = 'DAM_7.0',
  DAM_3_3 = 'DAM_3.3',
  DAM_5_1 = 'DAM_5.1',
  DAM_1_4 = 'DAM_1.4',
  DAM_3_2 = 'DAM_3.2',
  DAM_5_0 = 'DAM_5.0',
  DAM_9_3 = 'DAM_9.3',
  DAM_7_4 = 'DAM_7.4',
  DAM_9_2 = 'DAM_9.2',
  DAM_7_3 = 'DAM_7.3',
  DAM_9_1 = 'DAM_9.1',
  DAM_5_4 = 'DAM_5.4',
  DAM_7_2 = 'DAM_7.2',
  DAM_9_0 = 'DAM_9.0',
  DAM_1_3 = 'DAM_1.3',
  DAM_3_1 = 'DAM_3.1',
  DAM_1_2 = 'DAM_1.2',
  DAM_3_0 = 'DAM_3.0',
  DAM_1_1 = 'DAM_1.1',
  DAM_1_0 = 'DAM_1.0',
  DAM_11_2 = 'DAM_11.2',
  DAM_11_1 = 'DAM_11.1',
  DAM_11_0 = 'DAM_11.0',
  DAM_11_4 = 'DAM_11.4',
  DAM_11_3 = 'DAM_11.3',
  DAM_4_4 = 'DAM_4.4',
  DAM_6_2 = 'DAM_6.2',
  DAM_8_0 = 'DAM_8.0',
  DAM_4_3 = 'DAM_4.3',
  DAM_6_1 = 'DAM_6.1',
  DAM_2_4 = 'DAM_2.4',
  DAM_4_2 = 'DAM_4.2',
  DAM_6_0 = 'DAM_6.0',
  DAM_2_3 = 'DAM_2.3',
  DAM_4_1 = 'DAM_4.1',
  DAM_8_4 = 'DAM_8.4',
  DAM_8_3 = 'DAM_8.3',
  DAM_6_4 = 'DAM_6.4',
  DAM_8_2 = 'DAM_8.2',
  DAM_6_3 = 'DAM_6.3',
  DAM_8_1 = 'DAM_8.1',
  DAM_2_2 = 'DAM_2.2',
  DAM_4_0 = 'DAM_4.0',
  DAM_2_1 = 'DAM_2.1',
  DAM_2_0 = 'DAM_2.0',
  DAM_10_3 = 'DAM_10.3',
  DAM_10_2 = 'DAM_10.2',
  DAM_10_1 = 'DAM_10.1',
  DAM_10_0 = 'DAM_10.0',
  DAM_10_4 = 'DAM_10.4',
}
