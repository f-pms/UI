import { Stack, Typography } from '~/libs/mui';
import { useDayPicker } from '~/libs/react-day-picker';

export interface IMonthHeadRowCellProps {
  weekday: Date;
}

export default function MonthHeadRowCell({
  weekday,
}: Readonly<IMonthHeadRowCellProps>) {
  const {
    locale,
    formatters: { formatWeekdayName },
  } = useDayPicker();
  return (
    <Stack alignItems='center' justifyContent='center'>
      <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
        {formatWeekdayName(weekday, { locale })}
      </Typography>
    </Stack>
  );
}
