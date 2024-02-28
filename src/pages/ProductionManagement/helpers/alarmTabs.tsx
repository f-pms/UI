import { AlarmSeverity } from '~/types/alarm';

export type TabItem = {
  value: string;
  label: string;
};

export const ALARM_TABS: TabItem[] = [
  {
    value: 'All',
    label: 'Tất cả',
  },
  {
    value: AlarmSeverity.URGENT,
    label: 'Khẩn cấp',
  },
  {
    value: AlarmSeverity.HIGH,
    label: 'Quan trọng',
  },
  {
    value: AlarmSeverity.LOW,
    label: 'Thông báo',
  },
];
