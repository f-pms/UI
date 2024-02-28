import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';
import { Alarm, AlarmAction } from '~/types';

interface AlarmActionDTO extends Omit<AlarmAction, 'message'> {}

export type AlarmNotiDTO = {
  message: string;
  actions: AlarmActionDTO[];
};

export interface AlarmInfoDTO
  extends Omit<Alarm, 'id' | 'sensorConfiguration' | 'actions' | 'blueprint'> {
  sensorConfigurationId: number;
}

export interface CreateAlarmDTO extends AlarmInfoDTO, AlarmNotiDTO {}

const createAlarmCondition = async (data: CreateAlarmDTO) => {
  return (await axiosClient.post('alarm-conditions', data)).data as Alarm;
};

export const useCreateAlarmCondition = (
  options?: Omit<
    UseMutationOptions<Alarm, Error, CreateAlarmDTO, unknown>,
    'mutationFn'
  >,
) => {
  return useMutation({
    ...options,
    mutationFn: (data: CreateAlarmDTO) => createAlarmCondition(data),
  });
};
