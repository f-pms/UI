import { useEffect, useState } from 'react';
import { MRT_PaginationState } from 'material-react-table';
import { FormProvider, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { Skeleton } from '@mui/material';

import {
  GetHistoricalReportsParams,
  useQueryHistoricalReports,
} from '~/services/report/queries/useQueryHistoricalReports';
import { useQueryReportTypes } from '~/services/report/queries/useQueryReportTypes';
import { useLoadingStore } from '~/stores';
import { convertDateRange } from '~/utils/date';

import {
  FilterReportFormData,
  filterReportSchema,
  ReportOrder,
  ReportSortBy,
} from '~/pages/Report/helpers/filterReportFrom';
import {
  HistoricalReportFilter,
  HistoricalReportPageHeading,
  HistoricalReportTable,
} from '~/pages/Report/partials';

import { DateRangeProvider } from '~/components/DateRangePicker/context/DateRangeContext';
import { Container, Paper, Stack } from '~/components/MuiComponents';

export interface IHistoricalReportListPageProps {}

const addOrSubtractDays = (date: Date, days: number) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
};

export function HistoricalReportListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const setLoading = useLoadingStore((state) => state.setLoading);

  const { data: reportTypes } = useQueryReportTypes();

  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: searchParams.get('page')
      ? parseInt(searchParams.get('page') ?? '1') - 1
      : 0,
    pageSize: parseInt(searchParams.get('size') ?? '10'),
  });

  const getDefaultFilterReportFormData = () => {
    const currentDate = new Date();
    return {
      typeIds:
        searchParams.get('typeIds')?.split(',').map(Number) ??
        reportTypes?.map((type) => type.id) ??
        [],
      startDate: new Date(
        searchParams.get('startDate') ?? addOrSubtractDays(currentDate, -1),
      ),
      endDate: new Date(searchParams.get('endDate') ?? currentDate),
      sortBy:
        (searchParams.get('sortBy') as ReportSortBy) ??
        ReportSortBy.RECORDING_DATE,
      order: (searchParams.get('order') as ReportOrder) ?? ReportOrder.ASC,
    };
  };

  const [params, setParams] = useState<GetHistoricalReportsParams>(() => {
    return {
      ...getDefaultFilterReportFormData(),
      page: pagination.pageIndex + 1,
      size: pagination.pageSize,
    };
  });

  const methods = useForm<FilterReportFormData>({
    defaultValues: getDefaultFilterReportFormData(),
    resolver: yupResolver(filterReportSchema),
  });

  const { data: historicalReports, isLoading } =
    useQueryHistoricalReports(params);

  useEffect(() => {
    setParams({
      ...params,
      page: pagination.pageIndex + 1,
      size: pagination.pageSize,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  useEffect(() => {
    const formattedParams = new URLSearchParams();
    const { start, end } = convertDateRange(params.startDate, params.endDate);
    formattedParams.append('page', String(params.page));
    formattedParams.append('size', String(params.size));
    formattedParams.append('typeIds', params.typeIds.join(','));
    formattedParams.append('startDate', start);
    formattedParams.append('endDate', end);
    formattedParams.append('sortBy', params.sortBy);
    formattedParams.append('order', params.order);
    setSearchParams(formattedParams);
  }, [setSearchParams, params]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  return (
    <Container maxWidth='xl' sx={{ py: 2 }}>
      <FormProvider {...methods}>
        <HistoricalReportPageHeading params={params} />
        <Paper elevation={0} sx={{ my: 1, py: 2 }} variant='elevation'>
          <Stack
            alignItems='flex-start'
            direction='row'
            justifyContent='space-between'
          >
            <DateRangeProvider
              defaultRange={{
                from: params.startDate,
                to: params.endDate,
              }}
            >
              <HistoricalReportFilter params={params} setParams={setParams} />
            </DateRangeProvider>
            {isLoading ? (
              <Skeleton
                animation='wave'
                sx={{
                  height: 680,
                  width: '100%',
                  bgcolor: 'white',
                  border: '1px solid #e0e0e0',
                  borderRadius: 1,
                  ml: '40px',
                }}
                variant='rectangular'
              />
            ) : (
              <HistoricalReportTable
                historicalReports={historicalReports}
                pagination={pagination}
                params={params}
                setPagination={setPagination}
              />
            )}
          </Stack>
        </Paper>
      </FormProvider>
    </Container>
  );
}
