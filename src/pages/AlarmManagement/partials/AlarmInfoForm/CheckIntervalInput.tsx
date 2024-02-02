import { useEffect, useState } from 'react';
import { Control } from 'react-hook-form';

import { InputAdornment, SelectChangeEvent } from '@mui/material';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import {
  UnitOfTime,
  UnitOfTimeSelect,
} from '~/pages/AlarmManagement/partials/AlarmInfoForm/UnitOfTimeSelect';

import { InputWithLabel } from '~/components';

export interface ICheckIntervalInputProps {
  control: Control<AlarmFormData>;
}

export function CheckIntervalInput({ control }: ICheckIntervalInputProps) {
  const [unit, setUnit] = useState<UnitOfTime>(UnitOfTime.Second);

  const handleUnitChange = (event: SelectChangeEvent) => {
    setUnit(event.target.value as UnitOfTime);
  };

  useEffect(() => {
    // TODO: parse data to cron format
  }, [unit]);

  return (
    <InputWithLabel
      control={control}
      defaultValue={1}
      description=' Số nguyên dương, đơn vị: giây(s)'
      endAdornment={
        <InputAdornment position='end'>
          <UnitOfTimeSelect handleUnitChange={handleUnitChange} unit={unit} />
        </InputAdornment>
      }
      label='Chu kì kiểm tra'
      name='checkInterval'
      type='number'
    />
  );
}
