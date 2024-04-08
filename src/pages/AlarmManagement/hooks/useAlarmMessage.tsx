import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useUpdateAlarmMessage } from '~/services/alarm-condition/mutation/useUpdateAlarmMessage';
import { useQueryAlarmConditions } from '~/services/alarm-condition/queries/useQueryAlarmConditions';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

export const useAlarmMessage = () => {
  const { getValues, setError } = useFormContext<AlarmFormData>();
  const { refetch: refetchAlarmConditions } = useQueryAlarmConditions({
    enabled: false,
  });
  const { mutate: updateAlarmMessage, isSuccess } = useUpdateAlarmMessage();

  const [currentMessage, setCurrentMessage] = useState(
    () => getValues('noti.message') ?? '',
  );
  const newMessage = getValues('noti.message');

  const onUpdate = () => {
    if (newMessage === '') {
      setError('noti.message', {
        message: 'Nội dung cảnh báo không được để trống',
      });
      return;
    }
    const actionId = getValues('info.id');
    updateAlarmMessage({ id: actionId, payload: { message: newMessage } });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Cập nhật nội dung cảnh báo thành công');
      setCurrentMessage(newMessage);
      refetchAlarmConditions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const isUpdate = getValues('isUpdate');
  return { onUpdate, currentMessage, isUpdate };
};
