import { useEffect, useState } from 'react';
import { FieldError, useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useUpdateAlarmMessage } from '~/services/alarm-condition/mutation/useUpdateAlarmMessage';
import { useQueryAlarmConditions } from '~/services/alarm-condition/queries/useQueryAlarmConditions';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

import { InputWithLabel } from '~/components';
import { Button } from '~/components/MuiComponents';

export default function ActionMessage() {
  const {
    getValues,
    control,
    formState: { errors },
    setError,
    watch,
    clearErrors,
  } = useFormContext<AlarmFormData>();
  const isUpdate = getValues('isUpdate');
  const { refetch } = useQueryAlarmConditions({
    enabled: false,
  });
  const { mutate: updateAlarmMessage, isSuccess } = useUpdateAlarmMessage();
  const [preMessage, setPreMessage] = useState(
    () => getValues('noti.message') ?? '',
  );

  const onSubmit = () => {
    const id = getValues('info.id');
    const message = getValues('noti.message');
    if (message === '') {
      setError('noti.message', {
        message: 'Nội dung cảnh báo không được để trống',
      });
      return;
    }
    updateAlarmMessage({ id, payload: { message } });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Cập nhật thông tin cảnh báo thành công');
      setPreMessage(getValues('noti.message'));
      refetch();
    }
  }, [getValues, isSuccess, refetch]);

  return (
    <InputWithLabel
      multiline
      clearErrors={clearErrors}
      control={control}
      endAdornment={
        isUpdate && (
          <Button
            disabled={preMessage == watch('noti.message')}
            size='small'
            variant='contained'
            onClick={onSubmit}
          >
            Lưu
          </Button>
        )
      }
      error={errors.noti?.message as FieldError}
      label='Nội dung cảnh báo'
      maxRows={2}
      minRows={2}
      name='noti.message'
    />
  );
}
