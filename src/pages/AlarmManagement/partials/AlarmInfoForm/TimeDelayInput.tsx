import { Control } from 'react-hook-form';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

import { InputWithLabel } from '~/components';
import { InputAdornment, Typography } from '~/components/MuiComponents';

export interface ITimeDelayInputProps {
  control: Control<AlarmFormData>;
}

export function TimeDelayInput({ control }: ITimeDelayInputProps) {
  return (
    <InputWithLabel
      control={control}
      defaultValue={1}
      description=' Số nguyên dương, đơn vị: giây(s)'
      endAdornment={
        <InputAdornment position='end'>
          <Typography variant='body2'>(s)</Typography>
        </InputAdornment>
      }
      label='Độ trễ'
      name='timeDelay'
      type='number'
    />
  );
}
