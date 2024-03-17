import { useContext } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import {
  defaultFilterReportFormData,
  FilterReportFormData,
  filterReportSchema,
} from '~/pages/Report/helpers/filterReportFrom';
import {
  ORDER_OPTIONS,
  SORT_BY_OPTIONS,
} from '~/pages/Report/helpers/sortOption';
import { ReportDateRangePicker } from '~/pages/Report/partials/HistoricalReportFilter/ReportDateRangePicker';
import { ReportTypeCheckboxGroup } from '~/pages/Report/partials/HistoricalReportFilter/ReportTypeCheckboxGroup';
import { SortFieldRadioGroup } from '~/pages/Report/partials/HistoricalReportFilter/SortFieldRadioGroup';

import { DateRangeContext } from '~/components/DateRangePicker/context/DateRangeContext';
import { FilterAltOutlinedIcon } from '~/components/Icons';
import { Box, Button, Divider, Stack } from '~/components/MuiComponents';

export interface IHistoricalReportFilterProps {}

export function HistoricalReportFilter() {
  const { setRange } = useContext(DateRangeContext);

  const methods = useForm<FilterReportFormData>({
    defaultValues: defaultFilterReportFormData,
    resolver: yupResolver(filterReportSchema),
  });

  const onSubmit: SubmitHandler<FilterReportFormData> = () => {};

  const onReset = () => {
    methods.reset(defaultFilterReportFormData);
    setRange({ from: new Date(), to: new Date() });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box sx={{ width: '320px' }}>
          <ReportTypeCheckboxGroup />
          <Divider />
          <ReportDateRangePicker />
          <Divider />
          <SortFieldRadioGroup
            label='Sắp xếp theo:'
            name='sortBy'
            options={SORT_BY_OPTIONS}
          />
          <Divider />
          <SortFieldRadioGroup
            label='Thứ tự sắp xếp:'
            name='order'
            options={ORDER_OPTIONS}
          />
          <Stack
            alignItems='center'
            direction='row'
            justifyContent='space-between'
          >
            <Button variant='outlined' onClick={onReset}>
              Xóa
            </Button>
            <Button
              startIcon={<FilterAltOutlinedIcon />}
              type='submit'
              variant='contained'
            >
              Lọc báo cáo
            </Button>
          </Stack>
        </Box>
      </form>
    </FormProvider>
  );
}
