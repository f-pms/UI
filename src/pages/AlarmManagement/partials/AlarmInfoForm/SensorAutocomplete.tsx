import { useState } from 'react';

import { TextField } from '~/libs/mui';
import { Control } from '~/libs/react-hook-form';
import { SensorConfig } from '~/types/alarm';

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
  {
    id: 'address3',
    address: 'DB01:01:03',
  },
  {
    id: 'address4',
    address: 'DB01:01:04',
  },
  {
    id: 'address5',
    address: 'DB01:01:05',
  },
  {
    id: 'address6',
    address: 'DB01:01:06',
  },
  {
    id: 'address7',
    address: 'DB01:01:07',
  },
  {
    id: 'address8',
    address: 'DB01:01:08',
  },
  {
    id: 'address9',
    address: 'DB01:01:09',
  },
  {
    id: 'address10',
    address: 'DB01:01:10',
  },
  {
    id: 'address11',
    address: 'DB01:01:11',
  },
  {
    id: 'address12',
    address: 'DB01:01:12',
  },
  {
    id: 'address13',
    address: 'DB01:01:13',
  },
  {
    id: 'address14',
    address: 'DB01:01:14',
  },
  {
    id: 'address15',
    address: 'DB01:01:15',
  },
  {
    id: 'address16',
    address: 'DB01:01:16',
  },
  {
    id: 'address17',
    address: 'DB01:01:17',
  },
  {
    id: 'address18',
    address: 'DB01:01:18',
  },
  {
    id: 'address19',
    address: 'DB01:01:19',
  },
  {
    id: 'address20',
    address: 'DB01:01:20',
  },
  {
    id: 'address21',
    address: 'DB01:01:21',
  },
  {
    id: 'address22',
    address: 'DB01:01:22',
  },
  {
    id: 'address23',
    address: 'DB01:01:23',
  },
  {
    id: 'address24',
    address: 'DB01:01:24',
  },
];
