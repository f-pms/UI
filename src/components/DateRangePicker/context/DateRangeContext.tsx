import { createContext, ReactNode, useMemo, useState } from 'react';

import { DateRange } from '~/libs/react-day-picker';

type DateRangeContextType = {
  range: DateRange;
  setRange: (range: DateRange) => void;
  focusedFromField: boolean;
  setFocusedFromField: (focused: boolean) => void;
  focusedToField: boolean;
  setFocusedToField: (focused: boolean) => void;
  onBlur: () => void;
};

export const DateRangeContext = createContext<DateRangeContextType>({
  range: { from: new Date(), to: new Date() },
  setRange: () => {},
  focusedFromField: false,
  setFocusedFromField: () => {},
  focusedToField: false,
  setFocusedToField: () => {},
  onBlur: () => {},
});

interface IDateRangeContextProps {
  children: ReactNode;
}

export function DateRangeProvider({ children }: IDateRangeContextProps) {
  const [range, setRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });
  const [focusedFromField, setFocusedFromField] = useState(false);
  const [focusedToField, setFocusedToField] = useState(false);

  const onBlur = () => {
    setFocusedFromField(false);
    setFocusedToField(false);
  };

  const value = useMemo(
    () => ({
      range,
      setRange,
      focusedFromField,
      setFocusedFromField,
      focusedToField,
      setFocusedToField,
      onBlur,
    }),
    [focusedFromField, focusedToField, range],
  );
  return (
    <DateRangeContext.Provider value={value}>
      {children}
    </DateRangeContext.Provider>
  );
}
