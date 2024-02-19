import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { SelectChangeEvent } from '@mui/material';

import {
  TypeCondition,
  TypeConditionSelect,
} from '~/pages/AlarmManagement/partials/AlarmInfoForm/TypeConditionSelect';

import { InputWithLabel } from '~/components';
import { FormControl, Stack, Typography } from '~/components/MuiComponents';

export interface IConditionInputProps {}

export function ConditionInput() {
  const { setValue, control } = useFormContext();
  const [typeCondition, setTypeCondition] = useState<TypeCondition>(
    TypeCondition.RANGE,
  );

  const handleChange = (event: SelectChangeEvent) => {
    setTypeCondition(event.target.value as TypeCondition);
  };

  useEffect(() => {
    if (typeCondition === TypeCondition.LESS_THAN) {
      setValue('info.min', 0);
    }
    if (typeCondition === TypeCondition.GREATER_THAN) {
      setValue('info.max', 0);
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
          name='info.min'
          placeholder='Giới hạn dưới'
          type='number'
        />
        <InputWithLabel
          control={control}
          disabled={typeCondition === TypeCondition.GREATER_THAN}
          name='info.max'
          placeholder='Giới hạn trên'
          type='number'
        />
      </Stack>
    </FormControl>
  );
}
