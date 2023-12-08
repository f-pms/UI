import { addWeeks, startOfISOWeek, startOfWeek } from '~/libs/date-fns';

import { OPTION_DATE_PICKER } from '~/components/Calendar/helpers/optionDayPicker';

export const getPreviousWeek = (date: Date) => {
  const { locale, weekStartsOn, ISOWeek } = OPTION_DATE_PICKER;
  const start = ISOWeek
    ? startOfISOWeek(date || new Date())
    : startOfWeek(date || new Date(), { locale, weekStartsOn });

  return addWeeks(start, -1);
};
