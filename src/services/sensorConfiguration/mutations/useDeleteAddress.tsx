import { useMutation } from '@tanstack/react-query';

import axiosClient from '~/libs/axios';

interface UseMutationProps {
  id: number;
  blueprintId: number;
}

const deleteAddress = async ({ id, blueprintId }: UseMutationProps) => {
  return (
    await axiosClient.delete(
      `blueprints/${blueprintId}/sensor-configurations/${id}`,
    )
  ).data;
};

export const useDeleteAddress = () => {
  return useMutation({
    mutationFn: (props: UseMutationProps) => deleteAddress(props),
  });
};
