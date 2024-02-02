import { AlarmSeverity, SensorConfig, Station } from '~/types/alarm';

export type AlarmFormData = {
  message: string;
  severity: AlarmSeverity;
  status?: boolean;
  checkInterval: number;
  timeDelay: number;
  station: Station | null;
  variable: SensorConfig | null;
  min?: number;
  max?: number;
};

export const defaultAlarmFormData: AlarmFormData = {
  message: '',
  severity: AlarmSeverity.CRITICAL,
  variable: null,
  status: false,
  checkInterval: 0,
  timeDelay: 0,
  station: null,
  min: 0,
  max: 0,
};
