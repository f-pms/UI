import { useContext } from 'react';
import _ from 'lodash';

import { useQueryGetMultiDayReportCharts } from '~/services/report/queries/useQueryReportCharts';

import { StatisticReportContext } from '~/pages/Report/context/StatisticReportContext';
import { convertChartData } from '~/pages/Report/helpers/chartDataConverter';
import { ReportData } from '~/pages/Report/mocks/chartDataset';

import { CustomSkeleton } from '~/components';
import { PieChart } from '~/components/Charts/PieChart';

export interface IStatisticPieChartProps {}

export function StatisticPieChart() {
  const { params } = useContext(StatisticReportContext);

  const { data: pieChartData, isPending: pieChartDataLoading } =
    useQueryGetMultiDayReportCharts(params.pieChartParams);

  if (pieChartData && _.isEmpty(pieChartData.data)) {
    return <CustomSkeleton isEmpty height={540} />;
  }

  return (
    <>
      {pieChartDataLoading || !pieChartData ? (
        <CustomSkeleton height={540} />
      ) : (
        <PieChart
          dataset={convertChartData(pieChartData, 'PIE') as ReportData}
          height='100%'
          title='Tổng chỉ số điện của nhà máy'
        />
      )}
    </>
  );
}
