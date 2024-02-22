export enum AlarmSeverity {
  URGENT = 'URGENT',
  HIGH = 'HIGH',
  LOW = 'LOW',
}

export enum AlarmType {
  PREDEFINED = 'PREDEFINED',
  CUSTOM = 'CUSTOM',
}

export enum AlarmStatus {
  TRIGGERED = 'TRIGGERED',
  SENT = 'SENT',
  SOLVED = 'SOLVED',
}

export type Station = {
  id: number;
  name: string;
  value: string;
  type: string;
  typeLabel: string;
};

export enum AlarmActionType {
  POPUP = 'POPUP',
  EMAIL = 'EMAIL',
}

export type SensorConfiguration = {
  id: number;
  address: string;
  x: string;
  y: string;
};

export type AlarmAction = {
  message: string;
  id: string;
  type: AlarmActionType;
  recipients?: string[];
};

export interface Alarm {
  id: number;
  sensorConfiguration: SensorConfiguration;
  type: AlarmType;
  severity: AlarmSeverity;
  timeDelay: number;
  min?: number;
  max?: number;
  actions: AlarmAction[];
  enabled: boolean;
  checkInterval: number;
}
