import { useRef } from 'react';

import { format, isSameDay } from '~/libs/date-fns';
import { Avatar, Stack, Typography } from '~/libs/mui';
import { useDayPicker, useDayRender } from '~/libs/react-day-picker';

import { CustomBorderButton } from '~/components';

export interface IWeekHeadRowCellProps {
  weekday: Date;
}

export default function WeekHeadRowCell({ weekday }: IWeekHeadRowCellProps) {
  const {
    selected,
    locale,
    formatters: { formatWeekdayName },
  } = useDayPicker();

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dayRender = useDayRender(weekday, weekday, buttonRef);
  const { style: _, className: __, ...rest } = dayRender.buttonProps;

  const selectedDate = selected ? (selected as Date) : new Date();
  const dayName = format(weekday, 'd', { locale });

  return (
    <CustomBorderButton
      {...rest}
      disableBorder={!isSameDay(weekday, selectedDate)}
    >
      <Stack
        alignItems='center'
        direction='row'
        justifyContent='center'
        sx={{ height: '100%' }}
      >
        <Typography sx={{ fontWeight: 'regular' }} variant='body2'>
          {formatWeekdayName(weekday, { locale })}
        </Typography>
        {isSameDay(weekday, new Date()) ? (
          <Avatar
            sx={{
              width: '28px',
              height: '28px',
              ml: 1,
              backgroundColor: 'primary.main',
            }}
          >
            <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
              {dayName}
            </Typography>
          </Avatar>
        ) : (
          <Typography sx={{ ml: 1, fontWeight: 'medium' }} variant='body2'>
            {dayName}
          </Typography>
        )}
      </Stack>
    </CustomBorderButton>
  );
}
