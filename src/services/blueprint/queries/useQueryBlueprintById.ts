import { useQuery } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';

export interface IBlueprint {
  id: number;
  name: string;
  description: string;
  sensorConfigurations: FigureInfoType[];
}

export type FigureInfoType = {
  id: string;
  address: string;
  x: number;
  y: number;
};

const getBlueprintById = async (id: string) => {
  return (await axiosClient.get(`blueprints/${id}`)).data as IBlueprint;
};

export const useQueryBlueprintById = (id: string) => {
  return useQuery({
    queryKey: ['blueprint', id],
    queryFn: () => getBlueprintById(id),
    retry: 3,
  });
};
