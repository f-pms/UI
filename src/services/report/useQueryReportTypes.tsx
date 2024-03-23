import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants/queryKey';
import axiosClient from '~/libs/axios';
import { ReportType } from '~/types';

const getReportTypes = async () => {
  return (await axiosClient.get('reports/types')).data as ReportType[];
};

export const useQueryReportTypes = (
  options?: Omit<UseQueryOptions<ReportType[]>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEYS.REPORT_TYPES],
    queryFn: getReportTypes,
  });
};
