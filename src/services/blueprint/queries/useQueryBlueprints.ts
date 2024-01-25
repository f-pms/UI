import { useQuery } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';
import { IBlueprint } from '~/services/blueprint/queries/useQueryBlueprintById';

const getBlueprints = async () => {
  return (await axiosClient.get('blueprints')).data as IBlueprint[];
};

export const useQueryBlueprints = () => {
  return useQuery({
    queryKey: ['blueprints'],
    queryFn: () => getBlueprints(),
    retry: 3,
  });
};
