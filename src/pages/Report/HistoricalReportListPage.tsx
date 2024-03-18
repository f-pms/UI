import { HistoryPaginationProvider } from '~/pages/Report/context/HistoryPaginationContext';
import {
  HistoricalReportFilter,
  HistoricalReportPageHeading,
  HistoricalReportTable,
} from '~/pages/Report/partials';

import { DateRangeProvider } from '~/components/DateRangePicker/context/DateRangeContext';
import { Container, Paper, Stack } from '~/components/MuiComponents';

export interface IHistoricalReportListPageProps {}

export function HistoricalReportListPage() {
  return (
    <Container maxWidth='xl' sx={{ py: 2 }}>
      <HistoryPaginationProvider>
        <HistoricalReportPageHeading />
        <Paper elevation={0} sx={{ my: 1, py: 2 }} variant='elevation'>
          <Stack
            alignItems='flex-start'
            direction='row'
            justifyContent='space-between'
          >
            <DateRangeProvider>
              <HistoricalReportFilter />
            </DateRangeProvider>
            <HistoricalReportTable />
          </Stack>
        </Paper>
      </HistoryPaginationProvider>
    </Container>
  );
}
