import { useContext } from 'react';
import _ from 'lodash';

import { useQueryGetMultiDayReportCharts } from '~/services/report/queries/useQueryReportCharts';

import { StatisticReportContext } from '~/pages/Report/context/StatisticReportContext';
import { convertChartData } from '~/pages/Report/helpers/chartDataConverter';
import { ReportComplexBarData } from '~/pages/Report/mocks/chartDataset';

import { CustomSkeleton } from '~/components';
import { GroupBarChart } from '~/components/Charts/GroupBarChart';

export interface IStatisticBarChartProps {}

export function StatisticBarChart(props: IStatisticBarChartProps) {
  const { params } = useContext(StatisticReportContext);
  const { data: barChartData, isPending: barChartDataLoading } =
    useQueryGetMultiDayReportCharts(params.barChartParams);

  if (
    barChartData &&
    (_.isEmpty(barChartData.data) || _.isEmpty(barChartData.labelSteps))
  ) {
    return <CustomSkeleton isEmpty height={540} />;
  }
  return (
    <>
      {barChartDataLoading || !barChartData ? (
        <CustomSkeleton height={540} />
      ) : (
        <GroupBarChart
          isStacked
          dataset={
            convertChartData(barChartData, 'BAR') as ReportComplexBarData[]
          }
          legendTitle='Thiết bị điện'
          title='Tổng chỉ số điện của các thiết bị điện theo công đoạn sản xuất'
        />
      )}
    </>
  );
}
