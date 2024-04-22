import { AxiosError } from 'axios';

import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';
import { User } from '~/types';

export interface UserDTO extends Omit<User, 'id'> {}

const createUser = async (payload: UserDTO) => {
  return (await axiosClient.post('users', payload)).data;
};

export const useCreateUser = (
  options?: Omit<
    UseMutationOptions<void, AxiosError, UserDTO, unknown>,
    'mutationFn'
  >,
) => {
  return useMutation({
    ...options,
    mutationFn: (payload: UserDTO) => createUser(payload),
  });
};
