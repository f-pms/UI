import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';

import { AlarmActionDTO } from '~/services/alarm-condition/mutation/useCreateAlarmCondition';
import { useDeleteAlarmAction } from '~/services/alarm-condition/mutation/useDeleteAlarmAction';
import { useQueryAlarmConditions } from '~/services/alarm-condition/queries/useQueryAlarmConditions';
import { AlarmActionType } from '~/types';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

export const useDeleteAction = ({
  actionType,
  onRemoveAction,
  setCurrentAction,
}: {
  actionType: AlarmActionType;
  onRemoveAction: (value: AlarmActionType) => void;
  setCurrentAction: (action: AlarmActionDTO | null) => void;
}) => {
  const { getValues } = useFormContext<AlarmFormData>();

  const {
    mutate: deleteAlarmAction,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
  } = useDeleteAlarmAction();
  const { refetch } = useQueryAlarmConditions({
    enabled: false,
  });

  const handleDeleteAction = () => {
    const isUpdate = getValues('isUpdate');
    const action = getValues('noti.actions').find((a) => a.type == actionType);
    const selectedOptions = getValues('noti.actions');

    if (isUpdate && selectedOptions.length === 1) {
      toast.error('Phải có ít nhất một phương thức cảnh báo');
      return;
    }

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

  useEffect(() => {
    if (isDeleteSuccess) {
      onRemoveAction(actionType);
      refetch();
      toast.success('Xóa phương phức cảnh báo thành công.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleteSuccess]);

  useEffect(() => {
    if (isDeleteError) {
      toast.error(
        'Xóa phương phức cảnh báo thất bại, vui lòng kiểm tra và thử lại.',
      );
    }
  }, [isDeleteError]);

  return {
    handleDeleteAction,
  };
};
