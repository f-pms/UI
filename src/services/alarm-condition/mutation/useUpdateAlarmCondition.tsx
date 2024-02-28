import { useMutation } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';
import { CreateAlarmDTO } from '~/services/alarm-condition/mutation/useCreateAlarmCondition';
import { Alarm } from '~/types';

export interface UpdateAlarmDTO
  extends Omit<CreateAlarmDTO, 'message' | 'actions'> {}

const updateAlarmCondition = async (id: number, payload: UpdateAlarmDTO) => {
  return (await axiosClient.put(`alarm-conditions/${id}`, payload))
    .data as Alarm;
};

export const useUpdateAlarmCondition = () => {
  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: UpdateAlarmDTO }) =>
      updateAlarmCondition(id, payload),
  });
};
