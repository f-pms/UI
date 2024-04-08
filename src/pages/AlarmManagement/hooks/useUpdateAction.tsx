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

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

export const useUpdateAction = ({
  actionType,
  setCurrentAction,
}: {
  actionType: AlarmActionType;
  setCurrentAction: (action: AlarmActionDTO | null) => void;
}) => {
  const { getValues } = useFormContext<AlarmFormData>();
  const {
    mutate: updateAlarmAction,
    isSuccess: isUpdateSuccess,
    data: updateData,
    isError: isUpdateError,
  } = useUpdateAlarmAction();
  const { refetch } = useQueryAlarmConditions({
    enabled: false,
  });

  const handleUpdateAction = (recipients?: string[]) => {
    const action = getValues('noti.actions').find((a) => a.type == actionType);
    const alarmMessage = getValues('noti.message');
    const alarmId = getValues('info.id');

    const payload: UpdateAlarmActionDTO = {
      message: alarmMessage,
      id: action?.id ?? 0,
      type: actionType,
      recipients: recipients ?? [],
    };

    updateAlarmAction({
      alarmConditionId: alarmId,
      alarmActionId: action?.id ?? 0,
      payload,
    });
  };

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
      toast.error(
        'Cập nhật phương phức cảnh báo thất bại, vui lòng kiểm tra lại!',
      );
    }
  }, [isUpdateError]);

  return {
    handleUpdateAction,
  };
};
