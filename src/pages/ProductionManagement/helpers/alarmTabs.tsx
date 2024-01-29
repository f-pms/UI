import { AlarmSeverity } from '~/types/alarm';

export type TabItem = {
  value: number;
  label: string;
};

export const ALARM_TABS: TabItem[] = [
  {
    value: 0,
    label: 'Tất cả',
  },
  {
    value: AlarmSeverity.Critical,
    label: 'Khẩn cấp',
  },
  {
    value: AlarmSeverity.Important,
    label: 'Quan trọng',
  },
  {
    value: AlarmSeverity.Warning,
    label: 'Thông báo',
  },
];