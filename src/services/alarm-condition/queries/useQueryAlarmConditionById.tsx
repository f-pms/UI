import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants/queryKey';
import axiosClient from '~/libs/axios';
import { Alarm } from '~/types';

const getAlarmConditionById = async (id: string | number) => {
  return (await axiosClient.get(`alarm-conditions/${id}`)).data as Alarm;
};

export const useQueryAlarmConditionById = (
  id: string | number,
  options?: Omit<UseQueryOptions<Alarm>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEYS.ALARM_CONDITIONS, id],
    queryFn: () => getAlarmConditionById(id),
  });
};
