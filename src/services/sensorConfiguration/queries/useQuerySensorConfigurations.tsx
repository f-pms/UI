import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants/queryKey';
import axiosClient from '~/libs/axios';
import { SensorConfiguration } from '~/types';

export type GetSensorConfigurationsParams = {
  blueprintType: string;
  blueprintName: string;
};

const getSensorConfigurations = async (
  params: GetSensorConfigurationsParams,
) => {
  return (
    await axiosClient.get('sensor-configurations', {
      params,
    })
  ).data as SensorConfiguration[];
};

export const useQuerySensorConfigurations = (
  params: GetSensorConfigurationsParams,
  options?: Omit<
    UseQueryOptions<SensorConfiguration[]>,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEYS.SENSOR_CONFIGURATIONS, params],
    queryFn: () => getSensorConfigurations(params),
  });
};
