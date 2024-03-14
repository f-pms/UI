import { useMutation } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';
import { AlarmAction } from '~/types';

export interface UpdateAlarmMessageDTO {
  message: string;
}

const updateAlarmMessage = async (
  id: number,
  payload: UpdateAlarmMessageDTO,
) => {
  return (await axiosClient.put(`alarm-conditions/${id}/message`, payload))
    .data as AlarmAction[];
};

export const useUpdateAlarmMessage = () => {
  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number;
      payload: UpdateAlarmMessageDTO;
    }) => updateAlarmMessage(id, payload),
  });
};
