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
import { useLoadingStore } from '~/stores';
import { toISOStringWithoutTimeZone } from '~/utils/date';

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

export function HistoricalReportListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const setLoading = useLoadingStore((state) => state.setLoading);

  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: searchParams.get('page')
      ? parseInt(searchParams.get('page') ?? '1') - 1
      : 0,
    pageSize: parseInt(searchParams.get('size') ?? '10'),
  });

  const defaultFilterReportFormData = {
    typeIds: searchParams.get('typeIds')?.split(',').map(Number) ?? [],
    startDate: new Date(searchParams.get('startDate') ?? new Date()),
    endDate: new Date(searchParams.get('endDate') ?? new Date()),
    sortBy:
      (searchParams.get('sortBy') as ReportSortBy) ??
      ReportSortBy.RECORDING_DATE,
    order: (searchParams.get('order') as ReportOrder) ?? ReportOrder.ASC,
  };

  const [params, setParams] = useState<GetHistoricalReportsParams>(() => {
    return {
      ...defaultFilterReportFormData,
      page: pagination.pageIndex + 1,
      size: pagination.pageSize,
    };
  });

  const methods = useForm<FilterReportFormData>({
    defaultValues: defaultFilterReportFormData,
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
    formattedParams.append('page', String(params.page));
    formattedParams.append('size', String(params.size));
    formattedParams.append('typeIds', params.typeIds.join(','));
    formattedParams.append(
      'startDate',
      toISOStringWithoutTimeZone(params.startDate),
    );
    formattedParams.append(
      'endDate',
      toISOStringWithoutTimeZone(params.endDate),
    );
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
                setPagination={setPagination}
              />
            )}
          </Stack>
        </Paper>
      </FormProvider>
    </Container>
  );
}
