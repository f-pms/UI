import { useContext, useEffect } from 'react';
import { isSameDay } from 'date-fns';
import { useFormContext } from 'react-hook-form';

import { FilterReportFormData } from '~/pages/Report/helpers/filterReportFrom';
import { ViewTypes } from '~/pages/Report/helpers/statisticReportForm';

import { DateRangePicker } from '~/components/DateRangePicker';
import { DateRangeContext } from '~/components/DateRangePicker/context/DateRangeContext';
import { Box, Button, Grid, Typography } from '~/components/MuiComponents';

export interface IReportDateRangePickerProps {}

type RangeDateOption = {
  label: string;
  type: ViewTypes;
  step: number;
};

const RANGE_DATE_OPTIONS: RangeDateOption[] = [
  {
    label: '1 tuần trước',
    type: ViewTypes.BY_WEEK,
    step: 1,
  },
  {
    label: '1 tháng trước',
    type: ViewTypes.BY_MONTH,
    step: 1,
  },
  {
    label: '3 tháng trước',
    type: ViewTypes.BY_MONTH,
    step: 3,
  },
  {
    label: '6 tháng trước',
    type: ViewTypes.BY_MONTH,
    step: 6,
  },
  {
    label: '1 năm trước',
    type: ViewTypes.BY_YEAR,
    step: 1,
  },
];

export function ReportDateRangePicker() {
  const { range, setRange } = useContext(DateRangeContext);
  const { setValue } = useFormContext<FilterReportFormData>();

  useEffect(() => {
    setValue('startDate', range.from ?? new Date());
    setValue('endDate', range.to ?? new Date());
  }, [range, setValue]);

  const calculateFromDate = (type: ViewTypes, step: number) => {
    const from = new Date();
    switch (type) {
      case ViewTypes.BY_WEEK:
        from.setDate(from.getDate() - step * 7);
        break;
      case ViewTypes.BY_MONTH:
        from.setMonth(from.getMonth() - step);
        break;
      case ViewTypes.BY_YEAR:
        from.setFullYear(from.getFullYear() - step);
        break;
      default:
        break;
    }
    return from;
  };

  const handleClick = (option: RangeDateOption) => {
    const { type, step } = option;
    const from = calculateFromDate(type, step);
    const to = new Date();
    setRange({ from, to });
  };

  const checkSelected = (option: RangeDateOption) => {
    const { type, step } = option;
    const from = calculateFromDate(type, step);
    const to = new Date();
    if (!range.from || !range.to) return false;
    return isSameDay(range.from, from) && isSameDay(range.to, to);
  };

  return (
    <Box sx={{ my: 2 }}>
      <Typography
        color='text.strong'
        sx={{ fontWeight: 'bold', mb: 1 }}
        variant='subtitle2'
      >
        Khoảng thời gian báo cáo:
      </Typography>
      <DateRangePicker />
      <Grid container mt={1} spacing={1}>
        {RANGE_DATE_OPTIONS.map((option) => (
          <Grid key={option.label} item>
            <Button
              color='primary'
              size='small'
              variant={checkSelected(option) ? 'contained' : 'outlined'}
              onClick={() => handleClick(option)}
            >
              {option.label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
