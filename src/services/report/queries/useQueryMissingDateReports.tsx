import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants/queryKey';
import axiosClient from '~/libs/axios';

type GetMissingDateReportsParams = {
  start: string;
  end: string;
};

type MissingDateReports = {
  DAM: string[];
  BTP: string[];
};

const getMissingDateReports = async (params: GetMissingDateReportsParams) => {
  const formattedParams = new URLSearchParams();
  formattedParams.append('start', String(params.start));
  formattedParams.append('end', String(params.end));

  return (
    await axiosClient.get(`reports/charts/multi-day/missing-dates`, {
      params: formattedParams,
    })
  ).data as MissingDateReports;
};

export const useQueryMissingDateReports = (
  params: GetMissingDateReportsParams,
  options?: Omit<UseQueryOptions<MissingDateReports>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEYS.MISSING_DATE_REPORTS, params],
    queryFn: getMissingDateReports.bind(this, params),
  });
};
