import { AlarmSeverity } from '~/types/alarmConfig';

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
    value: AlarmSeverity.CRITICAL,
    label: 'Khẩn cấp',
  },
  {
    value: AlarmSeverity.IMPORTANT,
    label: 'Quan trọng',
  },
  {
    value: AlarmSeverity.WARNING,
    label: 'Thông báo',
  },
];
