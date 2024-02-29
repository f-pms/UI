import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants/queryKey';
import axiosClient from '~/libs/axios';
import { AlarmHistory, AlarmHistoryStatus } from '~/types';

type GetAlarmHistoryParams = {
  status: AlarmHistoryStatus;
};

const getAlarmHistories = async (params: GetAlarmHistoryParams) => {
  return (await axiosClient.get('alarm-histories', { params }))
    .data as AlarmHistory[];
};

export const useQueryAlarmHistories = (
  params: GetAlarmHistoryParams,
  options?: Omit<UseQueryOptions<AlarmHistory[]>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEYS.ALARM_HISTORY, params],
    queryFn: () => getAlarmHistories(params),
  });
};
