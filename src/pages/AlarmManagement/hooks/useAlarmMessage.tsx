import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useUpdateAlarmMessage } from '~/services/alarm-condition/mutation/useUpdateAlarmMessage';
import { useQueryAlarmConditionById } from '~/services/alarm-condition/queries/useQueryAlarmConditionById';
import { useQueryAlarmConditions } from '~/services/alarm-condition/queries/useQueryAlarmConditions';
import { displayErrorMessage } from '~/utils/errorMessage';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

export const useAlarmMessage = () => {
  const { getValues, trigger } = useFormContext<AlarmFormData>();
  const { refetch: refetchAlarmConditions } = useQueryAlarmConditions({
    enabled: false,
  });
  const { refetch: refetchCurrentAlarm } = useQueryAlarmConditionById(
    getValues('info.id'),
    {
      enabled: false,
    },
  );
  const {
    mutate: updateAlarmMessage,
    isSuccess,
    isError,
    error,
  } = useUpdateAlarmMessage();

  const [currentMessage, setCurrentMessage] = useState(
    () => getValues('noti.message') ?? '',
  );
  const newMessage = getValues('noti.message');

  const onUpdate = () => {
    trigger('noti.message').then((isValid) => {
      if (!isValid) return;

      const actionId = getValues('info.id');
      updateAlarmMessage({ id: actionId, payload: { message: newMessage } });
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Cập nhật nội dung cảnh báo thành công.');
      setCurrentMessage(newMessage);
      refetchAlarmConditions();
      refetchCurrentAlarm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(displayErrorMessage(error));
    }
  }, [isError, error]);

  const isUpdate = getValues('isUpdate');
  return { onUpdate, currentMessage, isUpdate };
};
