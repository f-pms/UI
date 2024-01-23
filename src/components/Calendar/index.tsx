import { useState } from 'react';

import { DayPicker } from '~/libs/react-day-picker';

import { CalendarProvider } from '~/components/Calendar/context/CalendarContext';
import { OPTION_DATE_PICKER } from '~/components/Calendar/helpers/optionDayPicker';
import { Caption } from '~/components/Calendar/partials/Caption';
import { Day } from '~/components/Calendar/partials/Day';
import { HeadRow } from '~/components/Calendar/partials/HeadRow';
import { Months } from '~/components/Calendar/partials/Months';

import 'react-day-picker/dist/style.css';

export function Calendar() {
  const [selected, setSelected] = useState<Date>(new Date());
  const { locale, mode } = OPTION_DATE_PICKER;

  return (
    <CalendarProvider>
      <DayPicker
        showOutsideDays
        components={{
          Caption: Caption,
          HeadRow: HeadRow,
          Months: Months,
          Day: Day,
        }}
        locale={locale}
        mode={mode}
        selected={selected}
        onDayClick={setSelected}
      />
    </CalendarProvider>
  );
}
