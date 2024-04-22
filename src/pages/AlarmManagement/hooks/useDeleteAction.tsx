import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';

import { AlarmActionDTO } from '~/services/alarm-condition/mutation/useCreateAlarmCondition';
import { useDeleteAlarmAction } from '~/services/alarm-condition/mutation/useDeleteAlarmAction';
import { useQueryAlarmConditions } from '~/services/alarm-condition/queries/useQueryAlarmConditions';
import { AlarmActionType } from '~/types';
import { displayErrorMessage } from '~/utils/errorMessage';

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
  const { getValues, setError } = useFormContext<AlarmFormData>();

  const {
    mutate: deleteAlarmAction,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
    error,
  } = useDeleteAlarmAction();
  const { refetch } = useQueryAlarmConditions({
    enabled: false,
  });

  const handleDeleteAction = () => {
    const isUpdate = getValues('isUpdate');
    const actions = getValues('noti.actions');
    const action = actions.find((a) => a.type == actionType);
    const numberCreatedActions = actions.filter((action) => action.id).length;

    if (isUpdate && action?.id) {
      if (numberCreatedActions === 1) {
        setError('noti.actions', {
          message: 'Phải có ít nhất một phương thức cảnh báo',
        });
        return;
      }

      deleteAlarmAction({
        alarmConditionId: getValues('info.id'),
        actionId: action.id,
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
      toast.error(displayErrorMessage(error));
    }
  }, [isDeleteError, error]);

  return {
    handleDeleteAction,
  };
};
