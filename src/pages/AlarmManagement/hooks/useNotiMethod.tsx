import { useFormContext } from 'react-hook-form';

import { AlarmActionType } from '~/types';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { useUpdateAction } from '~/pages/AlarmManagement/hooks/useUpdateAction';

interface IUsePushMessageMethodProps {
  onRemoveAction: (value: AlarmActionType) => void;
  actionType: AlarmActionType;
}

export function useNotiMethod({
  onRemoveAction,
  actionType,
}: IUsePushMessageMethodProps) {
  const { getValues } = useFormContext<AlarmFormData>();
  const { handleCreateAction, handleDeleteAction, disabled } = useUpdateAction({
    actionType: actionType,
    onRemoveAction,
  });
  const isUpdate = getValues('isUpdate');

  return {
    handleCreateAction,
    handleDeleteAction,
    disabled,
    isUpdate,
  };
}
