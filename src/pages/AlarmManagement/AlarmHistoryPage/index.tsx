import { AlarmHistoryTable } from '~/pages/AlarmManagement/partials/AlarmHistoryTable';
import HistoryPageHeading from '~/pages/AlarmManagement/partials/HistoryPageHeading';

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
  return (
    <Container fixed sx={{ py: 2 }}>
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
            <SoftChip label='150 cảnh báo' shape='square' size='small' />
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

      <AlarmHistoryTable />
    </Container>
  );
}
