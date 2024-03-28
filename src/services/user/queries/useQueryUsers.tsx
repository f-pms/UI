import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants/queryKey';
import axiosClient from '~/libs/axios';
import { UserList } from '~/types';

type GetUsersParams = {
  page: number;
  size: number;
};

const getUsers = async (params: GetUsersParams) => {
  return (await axiosClient.get('users', { params })).data as UserList;
};

export const useQueryUsers = (
  params: GetUsersParams,
  options?: Omit<UseQueryOptions<UserList>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEYS.USER, params],
    queryFn: () => getUsers(params),
  });
};
