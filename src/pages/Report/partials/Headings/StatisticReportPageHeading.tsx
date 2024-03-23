import { useContext, useMemo } from 'react';

import { StatisticReportContext } from '~/pages/Report/context/StatisticReportContext';

import { SectionHeading } from '~/components';

export function StatisticReportPageHeading() {
  const { date } = useContext(StatisticReportContext);

  const hasDateInformation = useMemo(() => {
    return !!date.startDate && !!date.endDate;
  }, [date]);

  return (
    <SectionHeading
      description={
        hasDateInformation
          ? `Thống kê chỉ số điện SX cho nhà máy 7 từ ${date.startDate} đến ${date.endDate}`
          : ''
      }
      divider={true}
      header='Báo cáo thống kê'
    />
  );
}
