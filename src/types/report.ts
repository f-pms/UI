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
  newElectricValue1: number;
  newElectricValue2: number;
  newElectricValue3: number;
  newElectricValue4: number;
};

export type ElectricalMeterReadingRow = {
  locationInfo: string;
  electricRoom: string;
  electricMeter: string[];
  equipments: string[];
  checkpoints: CheckpointValue[];
  checkpointTotal: number[];
  meterMultiplier: number[];
  total: number;
  oldElectricValue: number[];
};

export type ElectricalMeterReading = {
  title: string;
  rows: ElectricalMeterReadingRow[];
};
