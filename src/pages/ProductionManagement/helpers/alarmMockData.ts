import { AlarmSeverity } from '~/types/alarm';

export type Alarm = {
  id: number;
  name: string;
  description: string;
  time: Date;
  severity: AlarmSeverity;
};

export const MOCK_DATA_ALARMS: Alarm[] = [
  {
    id: 1,
    severity: AlarmSeverity.Critical,
    name: 'Cảnh báo CosP TR42',
    description: 'Cảnh báo CosP TR42',
    time: new Date(),
  },
  {
    id: 2,
    severity: AlarmSeverity.Critical,
    name: 'Cảnh báo CosP TR43',
    description: 'Cảnh báo nhiệt độ TR43',
    time: new Date(2024, 1, 14),
  },
  {
    id: 3,
    severity: AlarmSeverity.Important,
    name: 'Cảnh báo CosP TR44',
    description: 'Cảnh báo PCCC TR44',
    time: new Date(2024, 1, 13),
  },
  {
    id: 4,
    severity: AlarmSeverity.Important,
    name: 'Cảnh báo CosP TR45',
    description: 'Cảnh báo tủ điện TR45',
    time: new Date(2024, 1, 12),
  },
  {
    id: 5,
    severity: AlarmSeverity.Critical,
    name: 'Cảnh báo CosP TR46',
    description: 'Cảnh báo máy chà nhám TR46',
    time: new Date(2024, 1, 11),
  },
  {
    id: 6,
    severity: AlarmSeverity.Important,
    name: 'Cảnh báo CosP TR47',
    description: 'Cảnh báo CosP TR47',
    time: new Date(2024, 1, 10),
  },
];
