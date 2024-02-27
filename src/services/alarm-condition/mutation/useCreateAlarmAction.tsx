import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';
import { AlarmAction } from '~/types';

export interface CreateAlarmActionDTO extends Omit<AlarmAction, 'id'> {}
type CreateAlarmActionParams = {
  alarmConditionId: number;
  payload: CreateAlarmActionDTO;
};

const createAlarmAction = async (
  alarmConditionId: number,
  payload: CreateAlarmActionDTO,
) => {
  return (
    await axiosClient.post(
      `alarm-conditions/${alarmConditionId}/actions`,
      payload,
    )
  ).data as AlarmAction;
};

export const useCreateAlarmAction = (
  options?: Omit<
    UseMutationOptions<AlarmAction, Error, CreateAlarmActionParams, unknown>,
    'mutationFn'
  >,
) => {
  return useMutation({
    ...options,
    mutationFn: ({ alarmConditionId, payload }: CreateAlarmActionParams) =>
      createAlarmAction(alarmConditionId, payload),
  });
};
