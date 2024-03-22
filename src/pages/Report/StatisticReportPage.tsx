import { Container, Stack } from '@mui/material';

import { DATA_LIST } from '~/pages/Report/mocks/chartDataset';
import { StatisticReportPageHeading } from '~/pages/Report/partials/Headings/StatisticReportPageHeading';
import StatisticReportFilter from '~/pages/Report/partials/StatisticReportFilter';

import BarChart from '~/components/Charts/BarChart';
import LineChart from '~/components/Charts/LineChart';
import PieChart from '~/components/Charts/PieChart';

export function StatisticReportPage() {
  return (
    <Container maxWidth='xl' sx={{ py: 2 }}>
      <StatisticReportPageHeading />
      <Stack direction={'row'} justifyContent={'center'}>
        <Stack spacing={20} width='60%'>
          <PieChart dataset={DATA_LIST} />
          <BarChart isStacked dataset={DATA_LIST} />
          <BarChart dataset={DATA_LIST} />
          <LineChart dataset={DATA_LIST} />
        </Stack>
        <StatisticReportFilter />
      </Stack>
    </Container>
  );
}
