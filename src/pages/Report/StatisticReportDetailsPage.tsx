import { Box } from '@mui/material';

import { StatisticReportDetailsPageHeading } from '~/pages/Report/partials/Headings/StatisticReportDetailsPageHeading';

export interface IHistoricalReportStatisticsPageProps {}

export function StatisticReportDetailsPage() {
  return (
    <Box px={4} py={2}>
      <StatisticReportDetailsPageHeading />
    </Box>
  );
}
