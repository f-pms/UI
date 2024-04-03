import { Grid } from '@mui/material';

import { StatisticBarChart } from '~/pages/Report/partials/StatisticCharts/StatisticBarChart';
import { StatisticLineChart } from '~/pages/Report/partials/StatisticCharts/StatisticLineChart';
import { StatisticPieChart } from '~/pages/Report/partials/StatisticCharts/StatisticPieChart';

export const StatisticCharts = () => {
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
          <StatisticPieChart />
        </Grid>
        <Grid item xs={8}>
          <StatisticLineChart />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <StatisticBarChart />
      </Grid>
    </Grid>
  );
};
