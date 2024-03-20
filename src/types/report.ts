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
  CHE_BIEN_DAM = 'CHE_BIEN_DAM',
  BAN_THANH_PHAN = 'BAN_THANH_PHAN',
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
  meterMultiplier: number[] | string[];
}

export interface DynamicValues {
  oldElectricValue: number[] | string[];
  checkpoints: CheckpointValue[];
  checkpointTotal: number[] | string[];
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
