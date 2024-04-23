import { useMutation } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';

interface UserDTO {
  oldPassword?: string;
  password?: string;
  fullName?: string;
  email?: string;
}

type UpdateUserParams = {
  id: number | string;
  payload: UserDTO;
};

const updateUser = async (id: number | string, payload: UserDTO) => {
  return (await axiosClient.put(`users/${id}`, payload)).data;
};

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: ({ id, payload }: UpdateUserParams) => updateUser(id, payload),
  });
};
