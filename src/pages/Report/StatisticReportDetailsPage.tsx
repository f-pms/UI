import { Container, Grid } from '@mui/material';

import {
  DUMMY_REPORT_DETAILS_BAR_DATA_LIST,
  DUMMY_REPORT_DETAILS_LINE_DATA,
  DUMMY_REPORT_PIE_DATA,
} from '~/pages/Report/mocks/chartDataset';
import { StatisticReportDetailsPageHeading } from '~/pages/Report/partials/Headings/StatisticReportDetailsPageHeading';

import { GroupBarChart } from '~/components/Charts/GroupBarChart';
import PieChart from '~/components/Charts/PieChart';
import { VerticalBarChart } from '~/components/Charts/VerticalBarChart';

export interface IHistoricalReportStatisticsPageProps {}

export function StatisticReportDetailsPage() {
  return (
    <Container maxWidth='xl' sx={{ py: 2 }}>
      <StatisticReportDetailsPageHeading />
      <Grid
        container
        alignItems='flex-start'
        columnSpacing={5}
        justifyContent='space-between'
        rowSpacing={4}
      >
        <Grid container item columnSpacing={5} xs={12}>
          <Grid item xs={4}>
            <PieChart
              dataset={DUMMY_REPORT_PIE_DATA}
              height='100%'
              title='Tổng chỉ số điện của công đoạn SX chế biến dăm'
            />
          </Grid>
          <Grid item xs={8}>
            <VerticalBarChart
              dataset={DUMMY_REPORT_DETAILS_LINE_DATA}
              height='100%'
              title='Tổng chỉ số điện của công đoạn SX chế biến dăm theo các khung giờ'
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <GroupBarChart
            isStacked
            dataset={DUMMY_REPORT_DETAILS_BAR_DATA_LIST}
            legendTitle='Giờ hoạt động'
            title='Tổng chỉ số điện của các thiết bị điện của công đoạn SX chế biến dăm'
          />
        </Grid>
      </Grid>
    </Container>
  );
}
