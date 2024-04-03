import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants/queryKey';
import axiosClient from '~/libs/axios';
import { HistoricalReportPagination } from '~/types';
import { toISOStringWithoutTimeZone } from '~/utils/date';

import {
  ReportOrder,
  ReportSortBy,
} from '~/pages/Report/helpers/filterReportFrom';

export type GetHistoricalReportsParams = {
  page: number;
  size: number;
  typeIds: number[];
  startDate: Date;
  endDate: Date;
  sortBy: ReportSortBy;
  order: ReportOrder;
};

const getHistoricalReports = async (params: GetHistoricalReportsParams) => {
  const formattedParams = new URLSearchParams();
  formattedParams.append('page', String(params.page));
  formattedParams.append('size', String(params.size));
  formattedParams.append('typeIds', params.typeIds.join(','));
  formattedParams.append(
    'startDate',
    toISOStringWithoutTimeZone(params.startDate),
  );
  formattedParams.append('endDate', toISOStringWithoutTimeZone(params.endDate));
  formattedParams.append('sortBy', params.sortBy);
  formattedParams.append('order', params.order);
  return (
    await axiosClient.get('reports/details', {
      params: formattedParams,
    })
  ).data as HistoricalReportPagination;
};

export const useQueryHistoricalReports = (
  params: GetHistoricalReportsParams,
  options?: Omit<
    UseQueryOptions<HistoricalReportPagination>,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEYS.HISTORICAL_REPORTS, params],
    queryFn: () => getHistoricalReports(params),
  });
};
