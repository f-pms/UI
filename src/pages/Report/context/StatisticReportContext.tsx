import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

import {
  ELECTRICITY_CONSUMPTION_LIST,
  ElectricityConsumption,
} from '~/pages/Report/mocks/statisticReport';

type DateInformation = {
  startDate?: string;
  endDate?: string;
};

export type StatisticReportType = {
  date: DateInformation;
  setDate: Dispatch<SetStateAction<DateInformation>>;
  electricityConsumptionList: ElectricityConsumption[];
  setElectricityConsumptionList: Dispatch<
    SetStateAction<ElectricityConsumption[]>
  >;
};

export const StatisticReportContext = createContext<StatisticReportType>({
  date: {},
  setDate: () => {},
  electricityConsumptionList: [],
  setElectricityConsumptionList: () => {},
});

interface IStatisticReportProviderProps {
  children: React.ReactNode;
}

export function StatisticReportProvider({
  children,
}: IStatisticReportProviderProps) {
  const [date, setDate] = useState<DateInformation>({});
  const [electricityConsumptionList, setElectricityConsumptionList] = useState<
    ElectricityConsumption[]
  >(ELECTRICITY_CONSUMPTION_LIST);

  const value = useMemo(
    () => ({
      date,
      setDate,
      electricityConsumptionList,
      setElectricityConsumptionList,
    }),
    [date, electricityConsumptionList],
  );
  return (
    <StatisticReportContext.Provider value={value}>
      {children}
    </StatisticReportContext.Provider>
  );
}
