import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { AlarmActionType } from '~/types';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { useCreateAction } from '~/pages/AlarmManagement/hooks/useCreateAction';
import { useDeleteAction } from '~/pages/AlarmManagement/hooks/useDeleteAction';
import { useUpdateAction } from '~/pages/AlarmManagement/hooks/useUpdateAction';

export const useAlarmAction = ({
  actionType,
  onRemoveAction,
}: {
  actionType: AlarmActionType;
  onRemoveAction: (value: AlarmActionType) => void;
}) => {
  const { getValues } = useFormContext<AlarmFormData>();
  const [currentAction, setCurrentAction] = useState(
    () => getValues('noti.actions').find((a) => a.type == actionType) ?? null,
  );

  const isUpdate = getValues('isUpdate');
  const action = getValues('noti.actions').find((a) => a.type == actionType);
  const disabled = !!action?.id;

  const { handleCreateAction } = useCreateAction({
    actionType,
    setCurrentAction,
  });

  const { handleUpdateAction } = useUpdateAction({
    actionType,
    setCurrentAction,
  });

  const { handleDeleteAction } = useDeleteAction({
    actionType,
    onRemoveAction,
    setCurrentAction,
  });

  return {
    handleCreateAction,
    handleDeleteAction,
    handleUpdateAction,
    disabled,
    currentAction,
    isUpdate,
  };
};
