import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

import { format } from '~/libs/date-fns';

import {
  defaultFixedDate,
  defaultSelectedDate,
  defaultStatisticReportFilterParams,
  StatisticReportFilterParams,
} from '~/pages/Report/helpers/statisticReportForm';
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
  params: StatisticReportFilterParams;
  setParams: Dispatch<SetStateAction<StatisticReportFilterParams>>;
};

export const StatisticReportContext = createContext<StatisticReportType>({
  date: {},
  setDate: () => {},
  electricityConsumptionList: [],
  setElectricityConsumptionList: () => {},
  params: defaultStatisticReportFilterParams,
  setParams: () => {},
});

interface IStatisticReportProviderProps {
  children: React.ReactNode;
}

export function StatisticReportProvider({
  children,
}: IStatisticReportProviderProps) {
  const [date, setDate] = useState<DateInformation>({
    startDate: format(defaultFixedDate, 'dd/MM/yyyy'),
    endDate: format(defaultSelectedDate, 'dd/MM/yyyy'),
  });
  const [electricityConsumptionList, setElectricityConsumptionList] = useState<
    ElectricityConsumption[]
  >(ELECTRICITY_CONSUMPTION_LIST);
  const [params, setParams] = useState<StatisticReportFilterParams>(
    defaultStatisticReportFilterParams,
  );

  const value = useMemo(
    () => ({
      date,
      setDate,
      electricityConsumptionList,
      setElectricityConsumptionList,
      params,
      setParams,
    }),
    [date, electricityConsumptionList, params],
  );
  return (
    <StatisticReportContext.Provider value={value}>
      {children}
    </StatisticReportContext.Provider>
  );
}
