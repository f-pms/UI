import { useMutation } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';
import { User } from '~/types';

export interface UserDTO extends Omit<User, 'id'> {}

const createUser = async (payload: UserDTO) => {
  return (await axiosClient.post('users', payload)).data;
};

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (payload: UserDTO) => createUser(payload),
  });
};
