export enum AlarmSeverity {
  CRITICAL = '1',
  IMPORTANT = '2',
  WARNING = '3',
}

export enum AlarmType {
  PRE_DEFINED = '1',
  USER_DEFINED = '2',
}

export enum AlarmStatus {
  ACTIVE,
  INACTIVE,
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
  TOAST = '1',
  EMAIL = '2',
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
