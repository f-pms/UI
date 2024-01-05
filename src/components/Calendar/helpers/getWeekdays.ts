import { addDays, startOfISOWeek, startOfWeek } from '~/libs/date-fns';

import { OPTION_DATE_PICKER } from '~/components/Calendar/helpers/optionDayPicker';

export function getWeekdays(date?: Date): Date[] {
  const { locale, weekStartsOn, ISOWeek } = OPTION_DATE_PICKER;
  const start = ISOWeek
    ? startOfISOWeek(date ?? new Date())
    : startOfWeek(date ?? new Date(), { locale, weekStartsOn });

  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = addDays(start, i);
    days.push(day);
  }
  return days;
}
