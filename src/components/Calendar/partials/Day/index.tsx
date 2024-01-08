import { useRef } from 'react';

import { format, isSameDay, isSameMonth } from '~/libs/date-fns';
import { Avatar, Stack, Typography } from '~/libs/mui';
import {
  useDayPicker,
  useDayRender,
  useNavigation,
} from '~/libs/react-day-picker';

import { CustomBorderButton } from '~/components';

export interface DayProps {
  displayMonth: Date;
  date: Date;
}

export function Day({ date, displayMonth }: DayProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dayRender = useDayRender(date, displayMonth, buttonRef);
  const { selected, classNames, locale } = useDayPicker();
  const { currentMonth } = useNavigation();

  const isSelected = isSameDay(selected as Date, date);
  const isToday = isSameDay(new Date(), date);
  const isDayOfMonth = isSameMonth(date, currentMonth);
  const { style: _, className: __, ...rest } = dayRender.buttonProps;

  if (dayRender.isHidden) {
    return <div role='gridcell'></div>;
  }
  if (!dayRender.isButton) {
    return <div {...dayRender.divProps} />;
  }

  return (
    <CustomBorderButton
      {...rest}
      className={classNames.day}
      disableBorder={!isSelected}
      disabled={!isDayOfMonth}
    >
      <Stack alignItems='flex-start' sx={{ p: 1 }}>
        {isToday ? (
          <Avatar
            sx={{
              width: '24px',
              height: '24px',
              backgroundColor: 'primary.main',
              mb: 1,
            }}
          >
            <Typography
              sx={{ fontWeight: 'bold', lineHeight: '24px' }}
              variant='caption'
            >
              {format(date, 'd', { locale })}
            </Typography>
          </Avatar>
        ) : (
          <Typography
            sx={{
              mb: 1,
              lineHeight: '24px',
              color: isDayOfMonth ? 'text.primary' : 'text.disabled',
            }}
            variant='body2'
          >
            {format(date, 'd', { locale })}
          </Typography>
        )}
      </Stack>
    </CustomBorderButton>
  );
}
