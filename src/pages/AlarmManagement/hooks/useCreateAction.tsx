import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';

import {
  CreateAlarmActionDTO,
  useCreateAlarmAction,
} from '~/services/alarm-condition/mutation/useCreateAlarmAction';
import { AlarmActionDTO } from '~/services/alarm-condition/mutation/useCreateAlarmCondition';
import { useQueryAlarmConditions } from '~/services/alarm-condition/queries/useQueryAlarmConditions';
import { AlarmActionType } from '~/types';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

export const useCreateAction = ({
  actionType,
  setCurrentAction,
}: {
  actionType: AlarmActionType;
  setCurrentAction: (action: AlarmActionDTO | null) => void;
}) => {
  const { getValues, setValue } = useFormContext<AlarmFormData>();
  const {
    mutate: createAlarmAction,
    data,
    isSuccess: isCreateSuccess,
    isError: isCreateError,
  } = useCreateAlarmAction();
  const { refetch } = useQueryAlarmConditions({
    enabled: false,
  });

  const handleCreateAction = (recipients?: string[]) => {
    const payload: CreateAlarmActionDTO = {
      message: getValues('noti.message'),
      type: actionType,
      recipients: recipients ?? [],
    };
    createAlarmAction({ alarmConditionId: getValues('info.id'), payload });
  };

  useEffect(() => {
    if (isCreateSuccess) {
      setValue('noti.actions', [
        ...getValues('noti.actions').filter((a) => a.type != actionType),
        data,
      ]);
      setCurrentAction(data);
      refetch();
      toast.success('Thêm phương phức cảnh báo thành công.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreateSuccess]);

  useEffect(() => {
    if (isCreateError) {
      toast.error(
        'Thêm phương phức cảnh báo thất bại, vui lòng kiểm tra và thử lại.',
      );
    }
  }, [isCreateError]);

  return {
    handleCreateAction,
  };
};
