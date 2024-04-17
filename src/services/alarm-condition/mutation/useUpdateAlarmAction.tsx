import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';
import { AlarmAction } from '~/types';

export interface UpdateAlarmActionDTO extends Omit<AlarmAction, 'message'> {}
type UpdateAlarmActionParams = {
  alarmConditionId: number;
  alarmActionId: number;
  payload: UpdateAlarmActionDTO;
};

const updateAlarmAction = async (
  alarmConditionId: number,
  alarmActionId: number,
  payload: UpdateAlarmActionDTO,
) => {
  return (
    await axiosClient.put(
      `alarm-conditions/${alarmConditionId}/actions/${alarmActionId}`,
      payload,
    )
  ).data as AlarmAction;
};

export const useUpdateAlarmAction = (
  options?: Omit<
    UseMutationOptions<AlarmAction, Error, UpdateAlarmActionParams, unknown>,
    'mutationFn'
  >,
) => {
  return useMutation({
    ...options,
    mutationFn: ({
      alarmConditionId,
      alarmActionId,
      payload,
    }: UpdateAlarmActionParams) =>
      updateAlarmAction(alarmConditionId, alarmActionId, payload),
  });
};
