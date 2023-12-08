import { useQuery } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';

export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
}

const getPokemonById = async (id: string | number) => {
  const result: IPokemon = await axiosClient.get(`pokemon/${id}`);
  return result;
};

export const useQueryPokemonById = (id: string | number) => {
  return useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemonById(id),
    enabled: !!id,
  });
};
