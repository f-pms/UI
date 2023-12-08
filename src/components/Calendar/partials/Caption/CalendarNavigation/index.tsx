import { useContext, useRef } from 'react';

import {
  isSameDay,
  isSameMonth,
  isSameWeek,
  isValid,
  startOfMonth,
} from '~/libs/date-fns';
import {
  Button,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from '~/libs/mui';
import {
  useDayPicker,
  useDayRender,
  useNavigation,
} from '~/libs/react-day-picker';
import { ViewTypes } from '~/types';

import { CalendarContext } from '~/components/Calendar/context/CalendarContext';
import { getNextWeek } from '~/components/Calendar/helpers/getNextWeek';
import { getPreviousWeek } from '~/components/Calendar/helpers/getPreviousWeek';
import { NavigateBeforeIcon, NavigateNextIcon } from '~/components/Icons';

export function CalendarNavigation() {
  const { goToMonth, nextMonth, previousMonth, currentMonth } = useNavigation();
  const { viewBy, setViewBy, week, goToWeek } = useContext(CalendarContext);
  const { selected } = useDayPicker();
  const today = new Date();

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dayRender = useDayRender(today, selected as Date, buttonRef);
  const {
    style: _,
    className: __,
    onClick: ___,
    ...rest
  } = dayRender.buttonProps;

  // Define labels for different views
  const viewLabels = {
    [ViewTypes.Month]: 'Tháng này',
    [ViewTypes.Week]: 'Tuần này',
    [ViewTypes.Day]: 'Hôm nay',
  };

  const isDisabledTodayButton = () => {
    if (viewBy === ViewTypes.Month) {
      return isSameMonth(today, currentMonth);
    } else if (viewBy === ViewTypes.Week) {
      return isSameWeek(today, week);
    }
  };

  // Function to navigate to the previous month
  const goToPreviousMonth = () => previousMonth && goToMonth(previousMonth);

  // Function to navigate to the previous week
  const goToPreviousWeek = () => {
    const previousWeek = getPreviousWeek(week);
    const month = startOfMonth(previousWeek);
    // If the month of the previous week is not the same as the current month, update to that month
    // This is to prevent the case month of "Month" view is different from month of "Week" view
    if (!isSameMonth(currentMonth, month)) {
      goToMonth(month);
    }
    return previousWeek && goToWeek(previousWeek);
  };

  // Function to navigate -1 based on the current view
  const onPrevious = () => {
    if (viewBy === ViewTypes.Month) {
      return goToPreviousMonth();
    } else if (viewBy === ViewTypes.Week) {
      return goToPreviousWeek();
    }
  };

  // Function to navigate to the next month
  const goToNextMonth = () => nextMonth && goToMonth(nextMonth);

  // Function to navigate to the next week
  const goToNextWeek = () => {
    const nextWeek = getNextWeek(week);
    const month = startOfMonth(nextWeek);
    // If the month of the next week is not the same as the current month, update to that month
    // This is to prevent the case month of "Month" view is different from month of "Week" view
    if (!isSameMonth(currentMonth, month)) {
      goToMonth(month);
    }
    return nextWeek && goToWeek(nextWeek);
  };

  // Function to navigate +1 based on the current view
  const onNext = () => {
    if (viewBy === ViewTypes.Month) {
      return goToNextMonth();
    } else if (viewBy === ViewTypes.Week) {
      return goToNextWeek();
    }
  };

  // Function to navigate -1 based on the current view
  const onToday = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isSameDay(today, selected as Date) && dayRender?.buttonProps?.onClick) {
      dayRender.buttonProps.onClick(e);
    }

    goToMonth(today);
    goToWeek(today);
  };

  // This function handles the change event of a select element
  // If the selected date is valid
  //    Case 1: If the selected view is "Month", navigate to the selected month
  //    Case 2: If the selected view is "Week", navigate to the selected week
  // If the selected date is not valid
  //    Case 1: If the selected view is "Month", navigate to the current month
  //    Case 2: If the selected view is "Week" and the "currentMonth" is the same as the current month, navigate to the current week
  //    Case 3: If the selected view is "Week" and the "currentMonth" is not the same as the current month, navigate to first week of the month
  const handleChange = (event: SelectChangeEvent) => {
    const type = event.target.value as ViewTypes;
    if (isValid(selected)) {
      if (type === ViewTypes.Month) {
        goToMonth(selected as Date);
      } else if (type === ViewTypes.Week) {
        goToWeek(selected as Date);
      }
    } else {
      isSameMonth(currentMonth, today)
        ? goToWeek(today)
        : goToWeek(currentMonth);
    }

    setViewBy(event.target.value as ViewTypes);
  };

  return (
    <Stack alignItems='center' direction='row'>
      <Stack alignItems='center' direction='row'>
        <IconButton disabled={!previousMonth} size='small' onClick={onPrevious}>
          <NavigateBeforeIcon />
        </IconButton>
        <Button
          {...rest}
          disabled={isDisabledTodayButton()}
          size='small'
          sx={{ textTransform: 'none' }}
          variant='contained'
          onClick={onToday}
        >
          {viewLabels[viewBy]}
        </Button>
        <IconButton disabled={!nextMonth} size='small' onClick={onNext}>
          <NavigateNextIcon />
        </IconButton>
      </Stack>
      <Select
        size='small'
        sx={{ fontSize: '14px', width: '150px', backgroundColor: '#fff' }}
        value={viewBy}
        onChange={handleChange}
      >
        <MenuItem value={ViewTypes.Month}>Xem theo tháng</MenuItem>
        <MenuItem value={ViewTypes.Week}>Xem theo tuần</MenuItem>
        <MenuItem value={ViewTypes.Day}>Xem theo ngày</MenuItem>
      </Select>
    </Stack>
  );
}
