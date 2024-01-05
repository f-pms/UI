import { useQuery } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';

export interface IBlueprint {
  id: string;
  name: string;
  description: string;
  sensorConfigurations: Group[];
}

export type Group = {
  groupId: string;
  figures: Figure[];
};

export type Figure = {
  id: string;
  dataType: string;
  offset: string;
  dataBlockNumber: number;
  displayCoordinate: DisplayCoordinate;
  address: string;
};

export type DisplayCoordinate = {
  x: number;
  y: number;
};

const getBlueprintById = async (id: string) => {
  const result: IBlueprint = (await axiosClient.get(`blueprints/${id}`)).data;
  return result;
};

export const useQueryBlueprintById = (id: string) => {
  return useQuery({
    queryKey: ['blueprint', id],
    queryFn: () => getBlueprintById(id),
  });
};
