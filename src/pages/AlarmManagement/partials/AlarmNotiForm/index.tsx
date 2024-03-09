import { FieldError, useFormContext } from 'react-hook-form';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { AddNotiMethod } from '~/pages/AlarmManagement/partials/AlarmNotiForm/AddNotiMethod';

import { InputWithLabel } from '~/components';
import { Box, Button, Stack } from '~/components/MuiComponents';

export interface IAlarmNotiFormProps {}

export function AlarmNotiForm() {
  const {
    getValues,
    control,
    formState: { errors },
  } = useFormContext<AlarmFormData>();
  const isUpdate = getValues('isUpdate');
  return (
    <Box sx={{ width: '900px' }}>
      <Stack direction='row'>
        <InputWithLabel
          multiline
          control={control}
          endAdornment={
            isUpdate && (
              <Button size='small' variant='contained'>
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
      </Stack>

      <AddNotiMethod />
    </Box>
  );
}
