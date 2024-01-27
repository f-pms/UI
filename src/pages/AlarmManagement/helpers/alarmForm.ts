import { AlarmSeverity } from '~/types/alarm';

import { FilmOption } from '~/pages/AlarmManagement/partials/AlarmForm/StationAutoComplete';

export type AlarmFormData = {
  name: string;
  description: string;
  severity: AlarmSeverity;
  status?: boolean;
  checkInterval: number;
  timeDelay: number;
  station: FilmOption | null;
  variable: FilmOption | null;
};

export const defaultAlarmFormData: AlarmFormData = {
  name: '',
  description: '',
  severity: AlarmSeverity.Critical,
  variable: null,
  status: false,
  checkInterval: 0,
  timeDelay: 0,
  station: null,
};
