import { Grid } from '@mui/material';

import {
  DUMMY_REPORT_BAR_DATA_LIST,
  DUMMY_REPORT_LINE_DATA,
  DUMMY_REPORT_PIE_DATA,
} from '~/pages/Report/mocks/chartDataset';

import { GroupBarChart } from '~/components/Charts/GroupBarChart';
import LineChart from '~/components/Charts/LineChart';
import PieChart from '~/components/Charts/PieChart';

const StatisticCharts = () => {
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
          <PieChart
            dataset={DUMMY_REPORT_PIE_DATA}
            height='100%'
            title='Tổng chỉ số điện của nhà máy'
          />
        </Grid>
        <Grid item xs={8}>
          <LineChart
            dataset={DUMMY_REPORT_LINE_DATA}
            height='100%'
            title='Tổng chỉ số điện của từng công đoạn sản xuất'
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <GroupBarChart
          isStacked
          dataset={DUMMY_REPORT_BAR_DATA_LIST}
          legendTitle='Thiết bị điện'
          title='Tổng chỉ số điện của các thiết bị điện theo công đoạn sản xuất'
        />
      </Grid>
    </Grid>
  );
};

export default StatisticCharts;
