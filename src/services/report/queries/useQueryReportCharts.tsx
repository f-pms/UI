import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants/queryKey';
import axiosClient from '~/libs/axios';
import {
  MultiDateReportSummary,
  MultiDateReportSummaryChart,
  OneDayChartByShiftCharts,
} from '~/types';

export enum QueryDateType {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

export enum QueryChartType {
  PIE = 'PIE',
  BAR = 'STACKED_BAR',
  LINE = 'MULTI_LINE',
}

export type GetMultiDayReportSummaryParams = {
  start: string;
  end: string;
  queryType: QueryDateType;
  chartType: QueryChartType;
};

const getOneDayReportCharts = async (reportId: string) => {
  return (await axiosClient.get(`reports/${reportId}/charts/one-day`))
    .data as OneDayChartByShiftCharts;
};

export const useQueryOneDayReportCharts = (
  reportId: string,
  options?: Omit<
    UseQueryOptions<OneDayChartByShiftCharts>,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEYS.ONE_DAY_REPORT_CHARTS, reportId],
    queryFn: getOneDayReportCharts.bind(this, reportId),
  });
};

const getMultiDayReportSummary = async (
  params: GetMultiDayReportSummaryParams,
) => {
  const formattedParams = new URLSearchParams();
  formattedParams.append('start', String(params.start));
  formattedParams.append('end', String(params.end));
  formattedParams.append('queryType', String(params.queryType));
  formattedParams.append('chartType', String(params.chartType));

  return (
    await axiosClient.get(`reports/charts/multi-day/summary`, {
      params: formattedParams,
    })
  ).data as MultiDateReportSummary;
};

export const useQueryGetMultiDayReportSummary = (
  params: GetMultiDayReportSummaryParams,
  options?: Omit<
    UseQueryOptions<MultiDateReportSummary>,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEYS.MULTI_DAY_REPORT_SUMMARY, params],
    queryFn: getMultiDayReportSummary.bind(this, params),
  });
};

const getMultiDayReportCharts = async (
  params: GetMultiDayReportSummaryParams,
) => {
  const formattedParams = new URLSearchParams();
  formattedParams.append('start', String(params.start));
  formattedParams.append('end', String(params.end));
  formattedParams.append('queryType', String(params.queryType));
  formattedParams.append('chartType', String(params.chartType));

  return (
    await axiosClient.get(`reports/charts/multi-day`, {
      params: formattedParams,
    })
  ).data as MultiDateReportSummaryChart;
};

export const useQueryGetMultiDayReportCharts = (
  params: GetMultiDayReportSummaryParams,
  options?: Omit<
    UseQueryOptions<MultiDateReportSummaryChart>,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEYS.MULTI_DAY_REPORT_CHARTS, params],
    queryFn: getMultiDayReportCharts.bind(this, params),
  });
};
