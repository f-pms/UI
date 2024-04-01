import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Skeleton,
} from '@mui/material';

import { useQueryOneDayReportCharts } from '~/services/report/queries/useQueryReportCharts';
import { useQueryReportDetailsById } from '~/services/report/queries/useQueryReportDetailsById';
import { ReportKey } from '~/types';

import { ConvertOneDayChartData } from '~/pages/Report/helpers/chartDataConverter';
import { REPORT_TYPE_LABELS } from '~/pages/Report/helpers/constants';
import { StatisticReportDetailsPageHeading } from '~/pages/Report/partials/Headings/StatisticReportDetailsPageHeading';

import { GroupBarChart } from '~/components/Charts/GroupBarChart';
import PieChart from '~/components/Charts/PieChart';
import { VerticalBarChart } from '~/components/Charts/VerticalBarChart';

export interface IHistoricalReportStatisticsPageProps {}

export function StatisticReportDetailsPage() {
  const { reportId } = useParams();

  const { data: reportData, isPending: loadingReportData } =
    useQueryReportDetailsById(reportId ?? '', {
      enabled: !!reportId,
    });
  const { data: reportChart, isPending: loadingReportChart } =
    useQueryOneDayReportCharts(reportId ?? '');

  const reportType = useMemo(
    () => REPORT_TYPE_LABELS[reportData?.type.name as ReportKey]?.toLowerCase(),
    [reportData?.type.name],
  );

  const oneDayChartData = useMemo(() => {
    if (!reportChart) {
      return undefined;
    }

    return ConvertOneDayChartData(reportChart.data ?? [], reportType);
  }, [reportChart, reportType]);

  if (loadingReportData || loadingReportChart || !oneDayChartData)
    return (
      <Box alignItems='center' textAlign='center'>
        <CircularProgress color='primary' />
      </Box>
    );

  return (
    <Container maxWidth='xl' sx={{ py: 2 }}>
      <StatisticReportDetailsPageHeading
        recordingDate={reportChart?.recordingDate}
      />
      <Grid
        container
        alignItems='flex-start'
        columnSpacing={5}
        justifyContent='space-between'
        rowSpacing={4}
      >
        <Grid container item columnSpacing={5} xs={12}>
          <Grid item xs={4}>
            {loadingReportChart || !oneDayChartData?.pieChartTotalReport ? (
              <Skeleton height={540} variant='rounded' />
            ) : (
              <PieChart
                dataset={oneDayChartData?.pieChartTotalReport}
                height='100%'
                title={`Tổng chỉ số điện của công đoạn SX ${reportType}`}
              />
            )}
          </Grid>
          <Grid item xs={8}>
            {loadingReportChart || !oneDayChartData?.barChartReportByShift ? (
              <Skeleton height={540} variant='rounded' />
            ) : (
              <VerticalBarChart
                dataset={oneDayChartData?.barChartReportByShift}
                height='100%'
                title={`Tổng chỉ số điện của công đoạn SX ${reportType} theo các khung giờ`}
              />
            )}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          {loadingReportChart || !oneDayChartData?.barChartReportByShift ? (
            <Skeleton height={540} variant='rounded' />
          ) : (
            <GroupBarChart
              isStacked
              dataset={oneDayChartData?.stackedBarChartReportByDeviceList}
              legendTitle='Giờ hoạt động'
              title={`Tổng chỉ số điện của các thiết bị điện của công đoạn SX ${reportType}`}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
