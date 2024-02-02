export enum AlarmSeverity {
  CRITICAL = 1,
  IMPORTANT = 2,
  WARNING = 3,
}

export enum AlarmType {
  PRE_DEFINED,
  USER_DEFINED,
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
  Toast,
  Email,
}

export interface AlarmConfigDTO extends AlarmInfoDTO, AlarmNotiDTO {}

export interface AlarmInfoDTO {
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

export type AlarmNotiDTO = {
  message: string;
  actions: AlarmAction[];
};
