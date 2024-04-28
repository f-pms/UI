import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';
import { DataTypeEnum } from '~/services/blueprint';
import { SensorConfiguration } from '~/types';

export interface UpdateAddressDTO {
  address?: string;
  db?: number;
  offset?: number;
  dataType?: DataTypeEnum;
}

type UpdateAddressParams = {
  blueprintId: number;
  sensorConfigurationId: number;
  payload: UpdateAddressDTO;
};

const updateAddress = async ({
  blueprintId,
  sensorConfigurationId,
  payload,
}: UpdateAddressParams) => {
  return (
    await axiosClient.put(
      `blueprints/${blueprintId}/sensor-configurations/${sensorConfigurationId}`,
      payload,
    )
  ).data as SensorConfiguration;
};

export const useUpdateAddress = (
  options?: Omit<
    UseMutationOptions<
      SensorConfiguration,
      Error,
      UpdateAddressParams,
      unknown
    >,
    'mutationFn'
  >,
) => {
  return useMutation({
    ...options,
    mutationFn: (props: UpdateAddressParams) => updateAddress(props),
  });
};
