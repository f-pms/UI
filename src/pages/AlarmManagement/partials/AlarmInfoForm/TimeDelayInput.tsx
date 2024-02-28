import { useFormContext } from 'react-hook-form';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

import { InputWithLabel } from '~/components';
import { InputAdornment, Typography } from '~/components/MuiComponents';

export interface ITimeDelayInputProps {}

export function TimeDelayInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext<AlarmFormData>();

  return (
    <InputWithLabel
      control={control}
      defaultValue={1}
      description=' Số nguyên dương, đơn vị: giây'
      endAdornment={
        <InputAdornment position='end'>
          <Typography variant='body2'>(giây)</Typography>
        </InputAdornment>
      }
      error={errors.info?.timeDelay}
      label='Độ trễ'
      name='info.timeDelay'
      type='number'
    />
  );
}
