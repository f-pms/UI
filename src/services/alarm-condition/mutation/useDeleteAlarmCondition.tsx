import { useMutation } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';

const deleteAlarmCondition = async (id: number) => {
  return await axiosClient.delete(`alarm-conditions/${id}`);
};

export const useDeleteAlarmCondition = () => {
  return useMutation({
    mutationFn: (id: number) => deleteAlarmCondition(id),
  });
};
