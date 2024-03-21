import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

type DateInformation = {
  startDate?: string;
  endDate?: string;
};

export type StatisticReportType = {
  date: DateInformation;
  setDate: Dispatch<SetStateAction<DateInformation>>;
};

export const StatisticReportContext = createContext<StatisticReportType>({
  date: {},
  setDate: () => {},
});

interface IStatisticReportProviderProps {
  children: React.ReactNode;
}

export function StatisticReportProvider({
  children,
}: IStatisticReportProviderProps) {
  const [date, setDate] = useState<DateInformation>({});

  const value = useMemo(
    () => ({
      date,
      setDate,
    }),
    [date, setDate],
  );
  return (
    <StatisticReportContext.Provider value={value}>
      {children}
    </StatisticReportContext.Provider>
  );
}
