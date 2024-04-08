import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';

import {
  CreateAlarmActionDTO,
  useCreateAlarmAction,
} from '~/services/alarm-condition/mutation/useCreateAlarmAction';
import { useDeleteAlarmAction } from '~/services/alarm-condition/mutation/useDeleteAlarmAction';
import {
  UpdateAlarmActionDTO,
  useUpdateAlarmAction,
} from '~/services/alarm-condition/mutation/useUpdateAlarmAction';
import { useQueryAlarmConditions } from '~/services/alarm-condition/queries/useQueryAlarmConditions';
import { AlarmActionType } from '~/types';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

export const useUpdateAction = ({
  actionType,
  onRemoveAction,
}: {
  actionType: AlarmActionType;
  onRemoveAction: (value: AlarmActionType) => void;
}) => {
  const { getValues, setValue } = useFormContext<AlarmFormData>();
  const {
    mutate: createAlarmAction,
    data,
    isSuccess: isCreateSuccess,
    isError: isCreateError,
    error: createError,
  } = useCreateAlarmAction();
  const {
    mutate: updateAlarmAction,
    isSuccess: isUpdateSuccess,
    data: updateData,
    isError: isUpdateError,
    error: updateError,
  } = useUpdateAlarmAction();
  const { mutate: deleteAlarmAction, isSuccess: isDeleteSuccess } =
    useDeleteAlarmAction();
  const { refetch } = useQueryAlarmConditions({
    enabled: false,
  });
  const [currentAction, setCurrentAction] = useState(
    () => getValues('noti.actions').find((a) => a.type == actionType) ?? null,
  );

  const isUpdate = getValues('isUpdate');
  const action = getValues('noti.actions').find((a) => a.type == actionType);
  const disabled = !!action?.id;

  useEffect(() => {
    if (isCreateSuccess) {
      setValue('noti.actions', [
        ...getValues('noti.actions').filter((a) => a.type != actionType),
        data,
      ]);
      setCurrentAction(data);
      refetch();
      toast.success('Thêm phương phức cảnh báo thành công');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreateSuccess]);

  const handleDeleteAction = () => {
    if (isUpdate && action?.id) {
      deleteAlarmAction({
        alarmConditionId: getValues('info.id'),
        actionId: action?.id ?? 0,
      });
      setCurrentAction(null);
    } else {
      onRemoveAction(actionType);
    }
  };

  const handleCreateAction = (recipients?: string[]) => {
    const payload: CreateAlarmActionDTO = {
      message: getValues('noti.message'),
      type: actionType,
      recipients: recipients ?? [],
    };
    createAlarmAction({ alarmConditionId: getValues('info.id'), payload });
  };
  const handleUpdateAction = (recipients?: string[]) => {
    const payload: UpdateAlarmActionDTO = {
      message: getValues('noti.message'),
      id: action?.id ?? 0,
      type: actionType,
      recipients: recipients ?? [],
    };
    updateAlarmAction({
      alarmConditionId: getValues('info.id'),
      alarmActionId: action?.id ?? 0,
      payload,
    });
  };
  useEffect(() => {
    if (isDeleteSuccess) {
      onRemoveAction(actionType);
      refetch();
      toast.success('Xóa phương phức cảnh báo thành công');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleteSuccess]);

  useEffect(() => {
    if (isUpdateSuccess) {
      refetch();
      setCurrentAction(updateData);
      toast.success('Cập nhật phương phức cảnh báo thành công');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdateSuccess]);

  useEffect(() => {
    if (isUpdateError) {
      toast.error('Thất bại: ' + updateError?.message);
    }
  }, [updateError?.message, isUpdateError]);

  useEffect(() => {
    if (isCreateError) {
      toast.error('Thất bại: ' + createError?.message);
    }
  }, [createError?.message, isCreateError]);

  return {
    handleCreateAction,
    handleDeleteAction,
    handleUpdateAction,
    disabled,
    currentAction,
  };
};
