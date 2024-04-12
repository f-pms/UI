import { useContext } from 'react';
import _ from 'lodash';
import { SubmitHandler, useFormContext } from 'react-hook-form';

import {
  GetHistoricalReportsParams,
  useQueryHistoricalReports,
} from '~/services/report/queries/useQueryHistoricalReports';

import {
  defaultFilterReportFormData,
  FilterReportFormData,
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

export interface IHistoricalReportFilterProps {
  params: GetHistoricalReportsParams;
  setParams: React.Dispatch<React.SetStateAction<GetHistoricalReportsParams>>;
}

export function HistoricalReportFilter({
  params,
  setParams,
}: IHistoricalReportFilterProps) {
  const { setRange } = useContext(DateRangeContext);
  const { refetch } = useQueryHistoricalReports(params);
  const { reset, handleSubmit, getValues } =
    useFormContext<FilterReportFormData>();

  const onSubmit: SubmitHandler<FilterReportFormData> = () => {
    const newParams = { ...params, ...getValues() };
    if (_.isEqual(newParams, params)) {
      refetch();
    } else {
      setParams(newParams);
    }
  };
  const onReset = () => {
    reset(defaultFilterReportFormData);
    setRange({ from: new Date(), to: new Date() });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ width: '340px' }}>
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
  );
}
