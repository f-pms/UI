import { useMutation } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';

const deleteUser = async (id: string | number) => {
  return (await axiosClient.delete(`users/${id}`)).data;
};

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: (id: string | number) => deleteUser(id),
  });
};
