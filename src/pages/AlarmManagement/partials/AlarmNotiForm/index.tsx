import { FieldError, useFormContext } from 'react-hook-form';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { AddNotiMethod } from '~/pages/AlarmManagement/partials/AlarmNotiForm/AddNotiMethod';

import { InputWithLabel } from '~/components';
import { Box } from '~/components/MuiComponents';

export interface IAlarmNotiFormProps {}

export function AlarmNotiForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext<AlarmFormData>();
  return (
    <Box sx={{ width: '600px' }}>
      <InputWithLabel
        multiline
        control={control}
        error={errors.noti?.message as FieldError}
        label='Nội dung cảnh báo'
        maxRows={2}
        minRows={2}
        name='noti.message'
      />
      <AddNotiMethod />
    </Box>
  );
}
