import { useState } from 'react';
import _ from 'lodash';

import {
  FormHelperText,
  IconButton,
  OutlinedInput,
  TextField,
} from '~/libs/mui';
import { useFormContext } from '~/libs/react-hook-form';
import { useQuerySensorConfigurations } from '~/services/sensorConfiguration/queries/useQuerySensorConfigurations';
import { SensorConfiguration } from '~/types';
import { BlueprintType } from '~/types/blueprints';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { CreateSensorAddressDialog } from '~/pages/AlarmManagement/partials/Dialogs/CreateSensorAddressDialog';
import { DeleteSensorAddressDialog } from '~/pages/AlarmManagement/partials/Dialogs/DeleteSensorAddressDialog';

import { Autocomplete } from '~/components';
import { DeleteOutlineOutlinedIcon } from '~/components/Icons';
import { FormControl, Typography } from '~/components/MuiComponents';
export interface IVariableAutoCompleteProps {}

export function SensorAutoComplete() {
  const {
    control,
    getValues,
    formState: { errors },
    clearErrors,
    setValue,
  } = useFormContext<AlarmFormData>();
  const [open, setOpen] = useState(false);
  const [deletedSensorConfiguration, setDeletedSensorConfiguration] =
    useState<SensorConfiguration>();

  const isUpdated = getValues('isUpdate');
  const selectedStation = getValues('info.station');

  const { data: sensorConfigs, refetch } = useQuerySensorConfigurations({
    blueprintType: selectedStation?.type ?? '',
    blueprintName: selectedStation?.value ?? '',
  });

  const onCloseDeleteSensorDialog = (refetchData?: boolean) => {
    if (refetchData) {
      refetch();
      setValue('info.sensorConfig', null);
    }
    setDeletedSensorConfiguration(undefined);
  };

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
            clearErrors={clearErrors}
            control={control}
            defaultChecked={true}
            defaultValue={sensorConfigs?.[0]}
            disabled={isUpdated || !selectedStation}
            freeSolo={false}
            getOptionDisabled={(option) => option.attachedToAlarm}
            getOptionLabel={(option) => option.address}
            multiple={false}
            name='info.sensorConfig'
            noOptionsText={
              selectedStation?.type === BlueprintType.ALARM ? (
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
            renderOption={(props, option) => {
              return (
                <Typography {...props}>
                  <Typography sx={{ flex: 1 }} variant='body2'>
                    {option.address}
                  </Typography>
                  {!option.attachedToAlarm &&
                    selectedStation?.type === BlueprintType.ALARM && (
                      <IconButton
                        size='small'
                        onClick={() => {
                          setDeletedSensorConfiguration(option);
                        }}
                      >
                        <DeleteOutlineOutlinedIcon
                          color='error'
                          sx={{ fontSize: '20px' }}
                        />
                      </IconButton>
                    )}
                </Typography>
              );
            }}
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
      <DeleteSensorAddressDialog
        deletedSensorConfiguration={deletedSensorConfiguration}
        open={!!deletedSensorConfiguration}
        onCloseDialog={onCloseDeleteSensorDialog}
      />
    </>
  );
}
