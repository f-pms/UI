import { Container } from '@mui/material';

import { StatisticReportProvider } from '~/pages/Report/context/StatisticReportContext';
import { StatisticReportPageHeading } from '~/pages/Report/partials/Headings/StatisticReportPageHeading';
import { StatisticCharts } from '~/pages/Report/partials/StatisticCharts';
import StatisticReportFilter from '~/pages/Report/partials/StatisticReportFilter';
import StatisticReportOverall from '~/pages/Report/partials/StatisticReportOverall';

export function StatisticReportPage() {
  return (
    <Container maxWidth='xl' sx={{ py: 2 }}>
      <StatisticReportProvider>
        <StatisticReportPageHeading />
        <StatisticReportFilter />
        <StatisticReportOverall />
        <StatisticCharts />
      </StatisticReportProvider>
    </Container>
  );
}
