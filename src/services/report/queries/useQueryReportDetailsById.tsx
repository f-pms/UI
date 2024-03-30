import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants/queryKey';
import axiosClient from '~/libs/axios';
import { ReportDetails } from '~/types';

const getReportDetailsById = async (id: string) => {
  return (await axiosClient.get(`reports/details/${id}`)).data as ReportDetails;
};

export const useQueryReportDetailsById = (
  id: string,
  options?: Omit<UseQueryOptions<ReportDetails>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEYS.REPORT_DETAILS, id],
    queryFn: () => getReportDetailsById(id),
  });
};
