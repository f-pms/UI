import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants/queryKey';
import axiosClient from '~/libs/axios';
import { Alarm } from '~/types';

const getAlarmConditions = async () => {
  return (await axiosClient.get('alarm-conditions')).data as Alarm[];
};

export const useQueryAlarmConditions = (
  options?: Omit<UseQueryOptions<Alarm[]>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEYS.ALARM_CONDITIONS],
    queryFn: () => getAlarmConditions(),
  });
};
