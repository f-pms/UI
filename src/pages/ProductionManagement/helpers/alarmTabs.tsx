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
    value: AlarmSeverity.Urgent,
    label: 'Khẩn cấp',
  },
  {
    value: AlarmSeverity.High,
    label: 'Quan trọng',
  },
  {
    value: AlarmSeverity.Low,
    label: 'Bình thường',
  },
];
