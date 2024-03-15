import { useMutation } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';

import { CreateSensorConfigDTO } from '~/pages/AlarmManagement/helpers/sensorConfigForm';

type CreateAddressParams = {
  blueprintId: number;
  payload: CreateSensorConfigDTO;
};

const createAddress = async (
  blueprintId: number,
  payload: CreateSensorConfigDTO,
) => {
  return (
    await axiosClient.post(
      `blueprints/${blueprintId}/sensor-configurations`,
      payload,
    )
  ).data;
};

export const useCreateAddress = () => {
  return useMutation({
    mutationFn: ({ blueprintId, payload }: CreateAddressParams) =>
      createAddress(blueprintId, payload),
  });
};
