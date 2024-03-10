import { useQueryAlarmHistories } from '~/services/alarm-history/queries/useQueryAlarmHistories';
import { AlarmHistoryStatus } from '~/types';

import HistoryPageHeading from '~/pages/AlarmManagement/partials/Headings/HistoryPageHeading';
import { AlarmHistoryTable } from '~/pages/AlarmManagement/partials/Tables/AlarmHistoryTable';

import { SoftChip } from '~/components';
import { DateRangePicker } from '~/components/DateRangePicker';
import { FilterAltOutlinedIcon } from '~/components/Icons';
import {
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '~/components/MuiComponents';

export function AlarmHistoryPage() {
  const { data: solvedAlarms } = useQueryAlarmHistories({
    status: AlarmHistoryStatus.SOLVED,
  });
  return (
    <Container maxWidth='xl' sx={{ py: 2 }}>
      <HistoryPageHeading />
      <Paper elevation={0} sx={{ my: 1, py: 2 }} variant='elevation'>
        <Stack
          alignItems='center'
          direction='row'
          justifyContent='space-between'
        >
          <Stack alignItems='center' direction='row' spacing={1}>
            <Typography
              color='text.strong'
              sx={{ fontWeight: 'bold' }}
              variant='subtitle1'
            >
              Tất cả:
            </Typography>
            <SoftChip
              label={`${solvedAlarms?.length ?? 0} cảnh báo`}
              shape='square'
              size='small'
            />
          </Stack>
          <Stack
            alignItems='center'
            direction='row'
            justifyContent='space-between'
            spacing={2}
          >
            <DateRangePicker />
            <Button
              size='small'
              startIcon={<FilterAltOutlinedIcon />}
              variant='contained'
            >
              Lọc kết quả
            </Button>
          </Stack>
        </Stack>
      </Paper>

      <AlarmHistoryTable solvedAlarms={solvedAlarms ?? []} />
    </Container>
  );
}
