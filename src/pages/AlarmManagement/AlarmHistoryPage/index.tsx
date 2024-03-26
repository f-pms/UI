import { useQueryAlarmHistories } from '~/services/alarm-history/queries/useQueryAlarmHistories';
import { AlarmHistoryStatus } from '~/types';

import HistoryPageHeading from '~/pages/AlarmManagement/partials/Headings/HistoryPageHeading';
import { AlarmHistoryTable } from '~/pages/AlarmManagement/partials/Tables/AlarmHistoryTable';

import { Container } from '~/components/MuiComponents';

export function AlarmHistoryPage() {
  const { data: solvedAlarms } = useQueryAlarmHistories({
    status: AlarmHistoryStatus.SOLVED,
  });
  return (
    <Container maxWidth='xl' sx={{ py: 2 }}>
      <HistoryPageHeading />
      <AlarmHistoryTable solvedAlarms={solvedAlarms ?? []} />
    </Container>
  );
}
