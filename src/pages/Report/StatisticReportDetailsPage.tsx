import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, Grid } from '@mui/material';

import { useQueryOneDayReportCharts } from '~/services/report/queries/useQueryReportCharts';
import { useQueryReportDetailsById } from '~/services/report/queries/useQueryReportDetailsById';
import { ReportKey } from '~/types';

import { ConvertOneDayChartData } from '~/pages/Report/helpers/chartDataConverter';
import { REPORT_TYPE_LABELS } from '~/pages/Report/helpers/constants';
import { StatisticReportDetailsPageHeading } from '~/pages/Report/partials/Headings/StatisticReportDetailsPageHeading';

import { CustomSkeleton } from '~/components';
import { GroupBarChart } from '~/components/Charts/GroupBarChart';
import { PieChart } from '~/components/Charts/PieChart';
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
    if (loadingReportChart || !reportChart) {
      return undefined;
    }

    return ConvertOneDayChartData(
      reportChart.data ?? [],
      reportType,
      reportData?.type.name as ReportKey,
    );
  }, [loadingReportChart, reportChart, reportType, reportData?.type.name]);

  useEffect(() => {
    if (!loadingReportData && !loadingReportChart && !oneDayChartData) {
      toast.error('Dữ liệu thống kê không có sẳn cho báo cáo này');
    }
  }, [loadingReportData, loadingReportChart, oneDayChartData]);

  return (
    <Container maxWidth='xl' sx={{ py: 2 }}>
      {loadingReportData || !reportChart ? (
        <CustomSkeleton
          height={100}
          isEmpty={!loadingReportData && !reportChart}
          sx={{ marginBottom: 2 }}
        />
      ) : (
        <StatisticReportDetailsPageHeading
          recordingDate={reportChart?.recordingDate}
        />
      )}

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
              <CustomSkeleton
                height={540}
                isEmpty={
                  !loadingReportChart && !oneDayChartData?.pieChartTotalReport
                }
              />
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
              <CustomSkeleton
                height={540}
                isEmpty={
                  !loadingReportChart && !oneDayChartData?.barChartReportByShift
                }
              />
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
            <CustomSkeleton
              height={540}
              isEmpty={
                !loadingReportChart && !oneDayChartData?.barChartReportByShift
              }
            />
          ) : (
            <GroupBarChart
              disableLabels
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
