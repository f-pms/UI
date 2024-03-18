import { Shift } from '~/types';

export type ShiftOption = {
  value: Shift;
  label: string;
};

export const SHIFT_OPTIONS: ShiftOption[] = [
  {
    value: Shift.ALL_DAY,
    label: 'Cả ngày',
  },
  {
    value: Shift.MORNING,
    label: 'Ca sáng',
  },
  {
    value: Shift.NIGHT,
    label: 'Ca chiều',
  },
];

export const SHIFT_NAVIGATION_OPTIONS: ShiftOption[] = [
  {
    value: Shift.ALL_DAY,
    label: 'Cả ngày',
  },
  {
    value: Shift.MORNING,
    label: 'Ca sáng (6h00-18h00)',
  },
  {
    value: Shift.NIGHT,
    label: 'Ca tối (18h00-6h00)',
  },
];
