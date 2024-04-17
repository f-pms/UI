import { FieldError, useFormContext } from 'react-hook-form';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { useAlarmMessage } from '~/pages/AlarmManagement/hooks/useAlarmMessage';

import { InputWithLabel } from '~/components';
import { Button } from '~/components/MuiComponents';

export function ActionMessageInput() {
  const {
    control,
    formState: { errors },
    watch,
    clearErrors,
  } = useFormContext<AlarmFormData>();
  const { currentMessage, onUpdate, isUpdate } = useAlarmMessage();

  return (
    <InputWithLabel
      multiline
      clearErrors={clearErrors}
      control={control}
      endAdornment={
        isUpdate && (
          <Button
            disabled={currentMessage == watch('noti.message')}
            size='small'
            variant='contained'
            onClick={onUpdate}
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
