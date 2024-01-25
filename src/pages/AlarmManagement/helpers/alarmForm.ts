export type AlarmFormData = {
  name: string;
  description: string;
  severity: string;
  variable: string;
  status?: boolean;
  checkInterval: number;
  timeDelay: number;
};

export const defaultAlarmFormData: AlarmFormData = {
  name: '',
  description: '',
  severity: '',
  variable: '',
  status: false,
  checkInterval: 0,
  timeDelay: 0,
};
