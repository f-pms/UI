import { useContext, useEffect, useState } from 'react';
import { vi } from 'date-fns/locale';

import { subMonths } from '~/libs/date-fns';
import { DayClickEventHandler, DayPicker } from '~/libs/react-day-picker';

import { DateRangeContext } from '~/components/DateRangePicker/context/DateRangeContext';
import CustomDay from '~/components/DateRangePicker/CustomDay';

export function CustomDatePicker() {
  const { range, setRange, focusedFromField, focusedToField } =
    useContext(DateRangeContext);

  const [month, setMonth] = useState<Date>(new Date());

  const handleDayClick: DayClickEventHandler = (day) => {
    if (focusedFromField) {
      setRange({ ...range, from: day });
    }
    if (focusedToField) {
      setRange({ ...range, to: day });
    }
  };

  const isDisabled = (day: Date) => {
    if (focusedFromField) {
      return day > (range.to ?? new Date());
    }

    if (focusedToField) {
      return day < (range.from ?? new Date()) || day > new Date();
    }

    return false;
  };

  useEffect(() => {
    if (focusedFromField) {
      setMonth(range.from ?? new Date());
    }

    if (focusedToField) {
      setMonth(subMonths(range.to ?? new Date(), 1));
    }
  }, [focusedFromField, focusedToField, range]);

  const selectedDays = Object.values(range).filter((date) => date) as Date[];

  return (
    <DayPicker
      captionLayout='dropdown-buttons'
      components={{ Day: CustomDay }}
      disabled={isDisabled}
      fromYear={2015}
      id='example'
      locale={vi}
      min={2}
      mode='multiple'
      month={month}
      numberOfMonths={2}
      selected={selectedDays}
      toYear={2025}
      onDayClick={handleDayClick}
      onMonthChange={setMonth}
    />
  );
}
