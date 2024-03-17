import { useState } from 'react';
import _ from 'lodash';

import { FormHelperText, OutlinedInput, TextField } from '~/libs/mui';
import { useFormContext } from '~/libs/react-hook-form';
import { useQuerySensorConfigurations } from '~/services/sensorConfiguration/queries/useQuerySensorConfigurations';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { CreateSensorAddressDialog } from '~/pages/AlarmManagement/partials/Dialogs/CreateSensorAddressDialog';

import { Autocomplete } from '~/components';
import { FormControl, Typography } from '~/components/MuiComponents';

export interface IVariableAutoCompleteProps {}

export function SensorAutoComplete() {
  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext<AlarmFormData>();
  const [open, setOpen] = useState(false);
  const isUpdated = getValues('isUpdate');
  const isMonitoringType = getValues('info.station.type') === 'MONITORING';

  const { data: sensorConfigs } = useQuerySensorConfigurations({
    blueprintType: getValues('info.station')?.type ?? '',
    blueprintName: getValues('info.station')?.value ?? '',
  });

  return (
    <>
      <FormControl
        error={!!errors.info?.sensorConfig}
        sx={{ mt: 1, width: '100%' }}
        variant='outlined'
      >
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
        {isUpdated ? (
          <OutlinedInput
            disabled
            size='small'
            sx={{ fontSize: '14px' }}
            value={_.upperFirst(getValues('info.sensorConfig')?.address)}
          />
        ) : (
          <Autocomplete
            control={control}
            defaultChecked={true}
            defaultValue={sensorConfigs?.[0]}
            disabled={isUpdated || !getValues('info.station')}
            freeSolo={false}
            getOptionDisabled={(option) => option.attachedToAlarm}
            getOptionLabel={(option) => option.address}
            multiple={false}
            name='info.sensorConfig'
            noOptionsText={
              !isMonitoringType ? (
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
              ) : (
                <Typography variant='body2'>
                  Không có địa chỉ biến nào
                </Typography>
              )
            }
            options={sensorConfigs ?? []}
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
        )}
        <FormHelperText error={!!errors.info?.sensorConfig} sx={{ ml: 0 }}>
          {errors.info?.sensorConfig?.message}
        </FormHelperText>
      </FormControl>
      <CreateSensorAddressDialog open={open} setOpen={setOpen} />
    </>
  );
}
