import { useContext } from 'react';
import _ from 'lodash';

import { Grid, Skeleton } from '@mui/material';

import { useQueryGetMultiDayReportCharts } from '~/services/report/queries/useQueryReportCharts';

import { StatisticReportContext } from '~/pages/Report/context/StatisticReportContext';
import { convertChartData } from '~/pages/Report/helpers/chartDataConverter';
import {
  ReportComplexBarData,
  ReportData,
} from '~/pages/Report/mocks/chartDataset';

import { GroupBarChart } from '~/components/Charts/GroupBarChart';
import LineChart from '~/components/Charts/LineChart';
import PieChart from '~/components/Charts/PieChart';

const StatisticCharts = () => {
  const { params } = useContext(StatisticReportContext);

  const { data: pieChartData, isPending: pieChartDataLoading } =
    useQueryGetMultiDayReportCharts(params.pieChartParams);

  const { data: lineChartData, isPending: lineChartDataLoading } =
    useQueryGetMultiDayReportCharts(params.lineChartParams);

  const { data: barChartData, isPending: barChartDataLoading } =
    useQueryGetMultiDayReportCharts(params.barChartParams);

  let dataPie;

  if (pieChartData) {
    dataPie = pieChartData.data;
  }

  let labelStepsLine, dataLine;
  if (lineChartData) {
    labelStepsLine = lineChartData.labelSteps;
    dataLine = lineChartData.data;
  }

  let labelStepsBar, dataBar;
  if (barChartData) {
    labelStepsBar = barChartData.labelSteps;
    dataBar = barChartData.data;
  }

  return (
    <Grid
      container
      alignItems='flex-start'
      columnSpacing={5}
      justifyContent='space-between'
      marginTop={1}
      rowSpacing={4}
    >
      <Grid container item columnSpacing={5} xs={12}>
        <Grid item xs={4}>
          {pieChartDataLoading || !pieChartData || _.isEmpty(dataPie) ? (
            <Skeleton height={540} variant='rounded' />
          ) : (
            <PieChart
              dataset={convertChartData(pieChartData, 'PIE') as ReportData}
              height='100%'
              title='Tổng chỉ số điện của nhà máy'
            />
          )}
        </Grid>
        <Grid item xs={8}>
          {lineChartDataLoading ||
          !lineChartData ||
          !labelStepsLine ||
          _.isEmpty(dataLine) ? (
            <Skeleton height={540} variant='rounded' />
          ) : (
            <LineChart
              dataset={convertChartData(lineChartData, 'LINE') as ReportData}
              height='100%'
              title='Tổng chỉ số điện của từng công đoạn sản xuất'
            />
          )}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {barChartDataLoading ||
        !barChartData ||
        !labelStepsBar ||
        _.isEmpty(dataBar) ? (
          <Skeleton height={540} variant='rounded' />
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
      </Grid>
    </Grid>
  );
};

export default StatisticCharts;
