import { useMutation } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';
import { DataTypeEnum } from '~/services/blueprint';

export interface IBlueprint {
  id: number;
  name: string;
  description: string;
  sensorConfigurations: FigureInfoType[];
}

export type FigureInfoType = {
  id: string;
  address: string;
  db: number;
  offset: number;
  dataType: DataTypeEnum;
  x: number;
  y: number;
};

interface UseMutationProps extends UpdateAddressBody {
  id: number;
  blueprintId: number;
}

interface UpdateAddressBody {
  address?: string;
  db?: number;
  offset?: number;
  dataType?: DataTypeEnum;
}

const updateAddress = async ({
  id,
  blueprintId,
  address,
  db,
  offset,
  dataType,
}: UseMutationProps) => {
  const body: UpdateAddressBody = { address, db, offset, dataType };

  return (
    await axiosClient.put(
      `blueprints/${blueprintId}/sensor-configurations/${id}`,
      body,
    )
  ).data;
};

export const useUpdateAddress = () => {
  return useMutation({
    mutationFn: (props: UseMutationProps) => updateAddress(props),
  });
};
