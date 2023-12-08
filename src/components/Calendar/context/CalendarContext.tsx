import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { startOfISOWeek, startOfWeek } from '~/libs/date-fns';
import { ViewTypes } from '~/types';

import { OPTION_DATE_PICKER } from '~/components/Calendar/helpers/optionDayPicker';

type CalendarContextType = {
  viewBy: ViewTypes;
  setViewBy: (viewBy: ViewTypes) => void;
  week: Date;
  goToWeek: (date: Date) => void;
  selected?: Date;
  setSelected: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

export const CalendarContext = createContext<CalendarContextType>({
  viewBy: ViewTypes.Month,
  setViewBy: () => {},
  week: new Date(),
  goToWeek: () => {},
  selected: undefined,
  setSelected: () => {},
});

interface CalendarProviderProps {
  children: ReactNode;
}

export function CalendarProvider({ children }: CalendarProviderProps) {
  const { locale, weekStartsOn, ISOWeek } = OPTION_DATE_PICKER;
  const [viewBy, setViewBy] = useState<ViewTypes>(ViewTypes.Month);
  const [week, setWeek] = useState<Date>(new Date());
  const [selected, setSelected] = useState<Date>();

  const goToWeek = useCallback(
    (date?: Date) => {
      const start = ISOWeek
        ? startOfISOWeek(date || new Date())
        : startOfWeek(date || new Date(), { locale, weekStartsOn });
      setWeek(start);
    },
    [ISOWeek, locale, weekStartsOn],
  );

  const value = useMemo(
    () => ({
      viewBy,
      setViewBy,
      week,
      setWeek,
      goToWeek,
      selected,
      setSelected,
    }),
    [goToWeek, selected, viewBy, week],
  );

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
}
