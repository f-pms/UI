import { useMutation } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';

const deleteAlarmAction = async (
  alarmConditionId: number,
  actionId: number,
) => {
  return await axiosClient.delete(
    `alarm-conditions/${alarmConditionId}/actions/${actionId}`,
  );
};

export type DeleteAlarmActionParams = {
  alarmConditionId: number;
  actionId: number;
};

export const useDeleteAlarmAction = () => {
  return useMutation({
    mutationFn: ({ alarmConditionId, actionId }: DeleteAlarmActionParams) =>
      deleteAlarmAction(alarmConditionId, actionId),
  });
};
