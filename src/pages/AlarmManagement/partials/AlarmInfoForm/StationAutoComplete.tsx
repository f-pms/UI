import { useMemo } from 'react';
import _ from 'lodash';
import { useFormContext } from 'react-hook-form';

import {
  FormHelperText,
  lighten,
  OutlinedInput,
  styled,
  TextField,
} from '~/libs/mui';
import { useQueryBlueprints } from '~/services/blueprint';
import { AlarmType, Station } from '~/types/alarm';
import { BlueprintType } from '~/types/blueprints';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

import { Autocomplete } from '~/components';
import { FormControl, Typography } from '~/components/MuiComponents';

const GroupHeader = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: '-8px',
  padding: '4px 10px',
  color: theme.palette.primary.main,
  backgroundColor: lighten(theme.palette.primary.light, 0.85),
  fontSize: '14px',
  fontWeight: 'bold',
}));

const GroupItems = styled('ul')({
  padding: 0,
});
export function StationAutoComplete() {
  const {
    control,
    getValues,
    formState: { errors },
    resetField,
    clearErrors,
  } = useFormContext<AlarmFormData>();
  const { data: blueprints } = useQueryBlueprints({
    blueprintType: BlueprintType.MONITORING,
  });
  const { data: alarmBlueprints } = useQueryBlueprints({
    blueprintType: BlueprintType.ALARM,
  });

  const isUpdated = getValues('isUpdate');

  const options: Station[] = useMemo(() => {
    const monitoringBlueprints =
      getValues('info.type') == AlarmType.PREDEFINED
        ? []
        : blueprints?.map((blueprint) => {
            return {
              id: blueprint.id,
              name: blueprint.name,
              value: blueprint.name,
              type: 'MONITORING',
              typeLabel: 'Giám sát',
            };
          });
    return [
      ...(monitoringBlueprints ?? []),
      {
        id:
          (alarmBlueprints?.find((b) => b.name === getValues('info.type'))
            ?.id as number) ?? 0,
        name:
          getValues('info.type') == AlarmType.PREDEFINED
            ? 'Cơ bản'
            : 'Nâng cao',
        value:
          getValues('info.type') == AlarmType.PREDEFINED
            ? AlarmType.PREDEFINED
            : AlarmType.CUSTOM,
        type: 'ALARM',
        typeLabel: 'Cảnh báo',
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blueprints, getValues('info.type'), alarmBlueprints]);

  return (
    <FormControl
      error={!!errors.info?.station}
      sx={{ mt: 1, width: '100%' }}
      variant='outlined'
    >
      <Typography
        color='text.strong'
        sx={{ fontWeight: 'bold' }}
        variant='subtitle2'
      >
        Trạm
      </Typography>
      <Typography variant='body2'>Mỗi trạm quản lý nhiều biến</Typography>
      {isUpdated ? (
        <OutlinedInput
          disabled
          size='small'
          sx={{ fontSize: '14px' }}
          value={_.upperFirst(getValues('info.station')?.name)}
        />
      ) : (
        <Autocomplete
          control={control}
          defaultValue={options[0]}
          disabled={isUpdated}
          freeSolo={false}
          getOptionLabel={(option) => _.upperFirst(option.name)}
          groupBy={(option) => option.typeLabel}
          name='info.station'
          options={options}
          renderGroup={(params) => (
            <li key={params.key}>
              <GroupHeader>{params.group}</GroupHeader>
              <GroupItems>{params.children}</GroupItems>
            </li>
          )}
          renderInput={(params) => <TextField {...params} size='small' />}
          renderOption={(props, option) => (
            <Typography {...props} variant='body2'>
              {_.upperFirst(option.name)}
            </Typography>
          )}
          sx={{
            '& input': {
              fontSize: '14px',
            },
          }}
          onChange={() => {
            resetField('info.sensorConfig');
            clearErrors('info.station');
          }}
        />
      )}

      <FormHelperText error={!!errors.info?.station} sx={{ ml: 0 }}>
        {errors.info?.station?.message}
      </FormHelperText>
    </FormControl>
  );
}
