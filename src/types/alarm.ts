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

export type SensorConfig = {
  id: string;
  address: string;
};

export type Station = {
  id: string;
  name: string;
};

export enum AlarmActionType {
  POPUP = 'POPUP',
  EMAIL = 'EMAIL',
}

export interface AlarmInfo {
  id: string;
  sensorConfigId: string;
  type: AlarmType;
  severity: AlarmSeverity;
  checkInterval: number;
  timeDelay: number;
  isEnabled: boolean;
  min?: number;
  max?: number;
}

export type AlarmAction = {
  actionId: string;
  actionType: AlarmActionType;
  recipientsId?: string[];
};

export type AlarmNoti = {
  message: string;
  actions: AlarmAction[];
};

export interface CreateAlarmDTO extends Omit<AlarmInfo, 'id'>, AlarmNoti {}
export interface CreateAlarmAction extends Omit<AlarmAction, 'actionId'> {}
export interface Alarm extends AlarmInfo, AlarmNoti {}
export interface UpdateAlarmDTO extends Alarm {}

export type CreateAlarmNoti = {
  message: string;
  actions: CreateAlarmAction[];
};
