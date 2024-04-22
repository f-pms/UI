import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';

import { AlarmActionDTO } from '~/services/alarm-condition/mutation/useCreateAlarmCondition';
import {
  UpdateAlarmActionDTO,
  useUpdateAlarmAction,
} from '~/services/alarm-condition/mutation/useUpdateAlarmAction';
import { useQueryAlarmConditions } from '~/services/alarm-condition/queries/useQueryAlarmConditions';
import { AlarmActionType } from '~/types';
import { displayErrorMessage } from '~/utils/errorMessage';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

export const useUpdateAction = ({
  actionType,
  setCurrentAction,
}: {
  actionType: AlarmActionType;
  setCurrentAction: (action: AlarmActionDTO | null) => void;
}) => {
  const { getValues, trigger } = useFormContext<AlarmFormData>();
  const {
    mutate: updateAlarmAction,
    isSuccess: isUpdateSuccess,
    data: updateData,
    isError: isUpdateError,
    error,
  } = useUpdateAlarmAction();
  const { refetch } = useQueryAlarmConditions({
    enabled: false,
  });

  const handleUpdateAction = (recipients?: string[]) => {
    trigger('noti.actions').then((isValid) => {
      if (!isValid) return;

      const action = getValues('noti.actions').find(
        (a) => a.type == actionType,
      );
      const alarmId = getValues('info.id');

      const payload: UpdateAlarmActionDTO = {
        id: action?.id ?? 0,
        type: actionType,
        recipients: recipients ?? [],
      };

      updateAlarmAction({
        alarmConditionId: alarmId,
        alarmActionId: action?.id ?? 0,
        payload,
      });
    });
  };

  useEffect(() => {
    if (isUpdateSuccess) {
      refetch();
      setCurrentAction(updateData);
      toast.success('Cập nhật phương phức cảnh báo thành công.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdateSuccess]);

  useEffect(() => {
    if (isUpdateError) {
      toast.error(displayErrorMessage(error));
    }
  }, [isUpdateError, error]);

  return {
    handleUpdateAction,
  };
};
