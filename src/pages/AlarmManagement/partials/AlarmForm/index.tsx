import { useState } from 'react';

import { SelectChangeEvent } from '@mui/material';

import { Control, UseFormSetValue } from '~/libs/react-hook-form';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { SeverityTabs } from '~/pages/AlarmManagement/partials/AlarmForm/SeverityTabs';
import { StationAutoComplete } from '~/pages/AlarmManagement/partials/AlarmForm/StationAutoComplete';
import {
  TypeCondition,
  TypeConditionSelect,
} from '~/pages/AlarmManagement/partials/AlarmForm/TypeConditionSelect';
import { VariableAutoComplete } from '~/pages/AlarmManagement/partials/AlarmForm/VariableAutocomplete';

import { InputWithLabel } from '~/components/InputWithLabel';
import {
  Box,
  FormControl,
  InputAdornment,
  Stack,
  Typography,
} from '~/components/MuiComponents';

export interface IAlarmFormProps {
  control: Control<AlarmFormData>;
  setValue: UseFormSetValue<AlarmFormData>;
}

export default function AlarmForm(props: IAlarmFormProps) {
  const { control, setValue } = props;
  const [typeCondition, setTypeCondition] = useState<TypeCondition>(
    TypeCondition.RANGE,
  );

  const handleChange = (event: SelectChangeEvent) => {
    setTypeCondition(event.target.value as TypeCondition);
  };

  return (
    <Box sx={{ width: '600px' }}>
      <SeverityTabs setValue={setValue} />
      <InputWithLabel control={control} label='Tên cảnh báo' name='name' />
      <InputWithLabel
        multiline
        control={control}
        label='Mô tả cảnh báo'
        maxRows={2}
        minRows={2}
        name='description'
        styled={{ mt: 2 }}
      />
      <Stack
        alignItems='center'
        direction='row'
        justifyContent='space-between'
        spacing={4}
        sx={{ mt: 4 }}
      >
        <StationAutoComplete control={control} />
        <VariableAutoComplete control={control} />
      </Stack>
      <Stack
        alignItems='center'
        direction='row'
        justifyContent='space-between'
        spacing={4}
        sx={{ mt: 2 }}
      >
        <InputWithLabel
          control={control}
          defaultValue={1}
          description=' Số nguyên dương, đơn vị: giây(s)'
          endAdornment={<InputAdornment position='end'>(s)</InputAdornment>}
          label='Chu kì kiểm tra'
          name='checkInterval'
          type='number'
        />
        <InputWithLabel
          control={control}
          defaultValue={1}
          description=' Số nguyên dương, đơn vị: giây(s)'
          endAdornment={<InputAdornment position='end'>(s)</InputAdornment>}
          label='Độ trễ'
          name='timeDelay'
          type='number'
        />
      </Stack>
      <FormControl sx={{ mt: 4, width: '100%' }} variant='outlined'>
        <Typography
          color='text.strong'
          sx={{ fontWeight: 'bold' }}
          variant='subtitle2'
        >
          Điều kiện cho phép
        </Typography>
        <Typography variant='body2'>
          Khi điểu kiện vượt/giảm quá mức cho phép, cảnh báo sẽ tự động kích
          hoạt
        </Typography>
        <Stack direction='row' mt={1} spacing={2}>
          <TypeConditionSelect
            handleChange={handleChange}
            typeCondition={typeCondition}
          />
          <InputWithLabel
            disabled={typeCondition === TypeCondition.LESS_THAN}
            name='min'
            placeholder='Giới hạn dưới'
            type='number'
          />
          <InputWithLabel
            disabled={typeCondition === TypeCondition.GREATER_THAN}
            name='min'
            placeholder='Giới hạn trên'
            type='number'
          />
        </Stack>
      </FormControl>
    </Box>
  );
}
