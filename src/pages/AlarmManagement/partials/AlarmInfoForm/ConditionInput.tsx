import { useEffect, useState } from 'react';
import { Control, UseFormSetValue } from 'react-hook-form';

import { SelectChangeEvent } from '@mui/material';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import {
  TypeCondition,
  TypeConditionSelect,
} from '~/pages/AlarmManagement/partials/AlarmInfoForm/TypeConditionSelect';

import { InputWithLabel } from '~/components';
import { FormControl, Stack, Typography } from '~/components/MuiComponents';

export interface IConditionInputProps {
  control: Control<AlarmFormData>;
  setValue: UseFormSetValue<AlarmFormData>;
}

export function ConditionInput(props: IConditionInputProps) {
  const { control, setValue } = props;
  const [typeCondition, setTypeCondition] = useState<TypeCondition>(
    TypeCondition.RANGE,
  );

  const handleChange = (event: SelectChangeEvent) => {
    setTypeCondition(event.target.value as TypeCondition);
  };

  useEffect(() => {
    if (typeCondition === TypeCondition.LESS_THAN) {
      setValue('min', 0);
    }
    if (typeCondition === TypeCondition.GREATER_THAN) {
      setValue('max', 0);
    }
  }, [typeCondition, setValue]);
  return (
    <FormControl sx={{ width: '100%' }} variant='outlined'>
      <Typography
        color='text.strong'
        sx={{ fontWeight: 'bold' }}
        variant='subtitle2'
      >
        Điều kiện cho phép
      </Typography>
      <Typography variant='body2'>
        Khi điểu kiện vượt/giảm quá mức cho phép, cảnh báo sẽ tự động kích hoạt
      </Typography>
      <Stack direction='row' mt={1} spacing={2}>
        <TypeConditionSelect
          handleChange={handleChange}
          typeCondition={typeCondition}
        />
        <InputWithLabel
          control={control}
          disabled={typeCondition === TypeCondition.LESS_THAN}
          name='min'
          placeholder='Giới hạn dưới'
          type='number'
        />
        <InputWithLabel
          control={control}
          disabled={typeCondition === TypeCondition.GREATER_THAN}
          name='max'
          placeholder='Giới hạn trên'
          type='number'
        />
      </Stack>
    </FormControl>
  );
}
