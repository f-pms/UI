import { useContext, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { FilterReportFormData } from '~/pages/Report/helpers/filterReportFrom';

import { DateRangePicker } from '~/components/DateRangePicker';
import { DateRangeContext } from '~/components/DateRangePicker/context/DateRangeContext';
import { Box, Typography } from '~/components/MuiComponents';

export interface IReportDateRangePickerProps {}

export function ReportDateRangePicker() {
  const { range } = useContext(DateRangeContext);
  const { setValue } = useFormContext<FilterReportFormData>();

  useEffect(() => {
    setValue('startDate', range.from ?? new Date());
  }, [range, setValue]);

  useEffect(() => {
    setValue('endDate', range.to ?? new Date());
  }, [range, setValue]);
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
    </Box>
  );
}
