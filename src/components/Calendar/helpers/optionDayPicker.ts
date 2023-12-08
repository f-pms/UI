import { vi } from 'date-fns/locale';

import { DayPickerSingleProps } from '~/libs/react-day-picker';

export const OPTION_DATE_PICKER: DayPickerSingleProps = {
  locale: vi,
  weekStartsOn: 1,
  ISOWeek: false,
  mode: 'single',
};
