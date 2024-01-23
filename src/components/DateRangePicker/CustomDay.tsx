import * as React from 'react';

import { useSoftColor } from '~/hooks';
import { format, isSameDay, isSameMonth } from '~/libs/date-fns';
import { useDayPicker, useDayRender } from '~/libs/react-day-picker';

import { DateRangeContext } from '~/components/DateRangePicker/context/DateRangeContext';
import { Button, Stack, Typography } from '~/components/MuiComponents';

export interface DayProps {
  displayMonth: Date;
  date: Date;
}

export default function CustomDay({ date, displayMonth }: DayProps) {
  const { range } = React.useContext(DateRangeContext);
  const { bgrColor } = useSoftColor('primary');
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const dayRender = useDayRender(date, displayMonth, buttonRef);
  const { style: _, className: __, ...rest } = dayRender.buttonProps;
  const { classNames, selected } = useDayPicker();

  const isInRange = React.useMemo(() => {
    if (!range.from || !range.to) {
      return false;
    }
    return date > range.from && date < range.to;
  }, [date, range.from, range.to]);

  const isOutside = isSameMonth(date, displayMonth) === false;

  const dayBackgroundColor = React.useMemo(() => {
    if (Array.isArray(selected)) {
      const isSelected = selected.some((d) => isSameDay(d as Date, date));
      if (isSelected) {
        return 'primary.main';
      }
    }
    if (isInRange) {
      return bgrColor;
    }
    return 'transparent';
  }, [bgrColor, date, isInRange, selected]);

  return (
    <Button
      ref={buttonRef}
      color='inherit'
      {...rest}
      className={classNames.day}
      sx={{
        p: 0,
        display: isOutside ? 'none' : 'flex',
        borderRadius: isInRange ? 0 : 2,
        py: isInRange ? '4px' : 0,
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Stack
        alignItems='center'
        justifyContent='center'
        sx={{
          backgroundColor: dayBackgroundColor,
          width: '100%',
          height: '100%',
        }}
      >
        <Typography variant='caption'>{format(date, 'd')}</Typography>
      </Stack>
    </Button>
  );
}
