import { useQuery } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';
import { IBlueprint } from '~/services/blueprint/queries/useQueryBlueprintById';
import { BlueprintType } from '~/types/blueprints';

type GetBlueprintsParams = {
  blueprintType: BlueprintType;
  blueprintName?: string;
};

const getBlueprints = async (params: GetBlueprintsParams) => {
  return (await axiosClient.get('blueprints', { params })).data as IBlueprint[];
};

export const useQueryBlueprints = (params: GetBlueprintsParams) => {
  return useQuery({
    queryKey: ['blueprints'],
    queryFn: () => getBlueprints(params),
    retry: 3,
  });
};
