import { useState } from 'react';

import { TextField } from '~/libs/mui';
import { Control } from '~/libs/react-hook-form';
import { SensorConfig } from '~/types/alarmConfig';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { CreateSensorAddressDialog } from '~/pages/AlarmManagement/partials/CreateSensorAddressDialog';

import { Autocomplete } from '~/components';
import { FormControl, Typography } from '~/components/MuiComponents';

export interface IVariableAutoCompleteProps {
  control: Control<AlarmFormData>;
}

export function SensorAutoComplete({ control }: IVariableAutoCompleteProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <FormControl sx={{ mt: 1, width: '100%' }} variant='outlined'>
        <Typography
          color='text.strong'
          sx={{ fontWeight: 'bold' }}
          variant='subtitle2'
        >
          Địa chỉ biến
        </Typography>
        <Typography variant='body2'>
          Biến được áp dụng điều kiện cảnh báo
        </Typography>
        <Autocomplete
          control={control}
          defaultChecked={true}
          defaultValue={sensorConfigs[0]}
          freeSolo={false}
          getOptionLabel={(option) => option.address}
          multiple={false}
          name='variable'
          noOptionsText={
            <Typography variant='body2'>
              Địa chỉ không tồn tại?{' '}
              <Typography
                color='primary'
                component='span'
                sx={{
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
                variant='body2'
                onClick={() => setOpen(true)}
              >
                Tạo mới
              </Typography>
            </Typography>
          }
          options={sensorConfigs}
          renderInput={(params) => <TextField {...params} size='small' />}
          renderOption={(props, option) => (
            <Typography {...props} variant='body2'>
              {option.address}
            </Typography>
          )}
          sx={{
            '& input': {
              fontSize: '14px',
            },
          }}
        />
      </FormControl>
      <CreateSensorAddressDialog open={open} setOpen={setOpen} />
    </>
  );
}

const sensorConfigs: SensorConfig[] = [
  {
    id: 'address1',
    address: 'DB01:01:01',
  },
  {
    id: 'address2',
    address: 'DB01:01:02',
  },
];
