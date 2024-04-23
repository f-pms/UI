import { AxiosError } from 'axios';

import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';
import { LoginResponse } from '~/types';

export type UserDTO = {
  username: string;
  password: string;
};

const loginAccount = async (user: UserDTO) => {
  return (await axiosClient.post(`auth/login`, user, { withCredentials: true }))
    .data as LoginResponse;
};

export const useLoginAccount = (
  options?: Omit<
    UseMutationOptions<LoginResponse, AxiosError, UserDTO, unknown>,
    'mutationFn'
  >,
) => {
  return useMutation({
    ...options,
    mutationFn: (data: UserDTO) => loginAccount(data),
  });
};
