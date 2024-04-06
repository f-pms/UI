import { useContext } from 'react';
import _ from 'lodash';

import { useQueryGetMultiDayReportCharts } from '~/services/report/queries/useQueryReportCharts';

import { StatisticReportContext } from '~/pages/Report/context/StatisticReportContext';
import { convertChartData } from '~/pages/Report/helpers/chartDataConverter';
import { ReportData } from '~/pages/Report/mocks/chartDataset';

import { CustomSkeleton } from '~/components';
import { LineChart } from '~/components/Charts/LineChart';

export interface IStatisticLineChartProps {}

export function StatisticLineChart() {
  const { params } = useContext(StatisticReportContext);

  const { data: lineChartData, isPending: lineChartDataLoading } =
    useQueryGetMultiDayReportCharts(params.lineChartParams);

  if (
    lineChartData &&
    (_.isEmpty(lineChartData.data) || _.isEmpty(lineChartData.labelSteps))
  ) {
    return <CustomSkeleton isEmpty height={540} />;
  }

  return (
    <>
      {lineChartDataLoading || !lineChartData ? (
        <CustomSkeleton height={540} />
      ) : (
        <LineChart
          dataset={convertChartData(lineChartData, 'LINE') as ReportData}
          height='100%'
          title='Tổng chỉ số điện của từng công đoạn sản xuất'
        />
      )}
    </>
  );
}
