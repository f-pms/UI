import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';
import { LoginResponse } from '~/types';

export type UserDTO = {
  username: string;
  password: string;
};

const loginAccount = async (user: UserDTO) => {
  return (await axiosClient.put(`auth/login`, user)).data as LoginResponse;
};

export const useLoginAccount = (
  options?: Omit<
    UseMutationOptions<LoginResponse, Error, UserDTO, unknown>,
    'mutationFn'
  >,
) => {
  return useMutation({
    ...options,
    mutationFn: (data: UserDTO) => loginAccount(data),
  });
};
