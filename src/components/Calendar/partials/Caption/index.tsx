import { useNavigation } from 'react-day-picker';

import { CalendarNavigation } from '~/components/Calendar/partials/Caption/CalendarNavigation';
import { CalendarPickers } from '~/components/Calendar/partials/Caption/CalendarPickers';
import { Stack } from '~/components/MuiComponents';

export function Caption() {
  const { currentMonth } = useNavigation();

  return (
    <Stack
      alignItems='center'
      direction={{ xs: 'column', md: 'row' }}
      justifyContent='space-between'
      sx={(theme) => ({
        height: { xs: '120px', md: '70px' },
        padding: '16px 24px',
        backgroundColor: theme.palette.grey[100],
        borderStartStartRadius: theme.spacing(1),
      })}
    >
      <CalendarPickers displayMonth={currentMonth} />
      <CalendarNavigation />
    </Stack>
  );
}
