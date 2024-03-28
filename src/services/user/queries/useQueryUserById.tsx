import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants/queryKey';
import axiosClient from '~/libs/axios';
import { User } from '~/types';

const getUserById = async (id: number | string) => {
  return (await axiosClient.get(`users/${id}`)).data as User;
};

export const useQueryUserById = (
  id: number | string,
  options?: Omit<UseQueryOptions<User>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEYS.USER, id],
    queryFn: () => getUserById(id),
  });
};
