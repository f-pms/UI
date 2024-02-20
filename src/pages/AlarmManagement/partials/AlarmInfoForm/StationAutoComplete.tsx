import { useFormContext } from 'react-hook-form';

import { FormHelperText, TextField } from '~/libs/mui';
import { Station } from '~/types/alarm';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

import { Autocomplete } from '~/components';
import { FormControl, Typography } from '~/components/MuiComponents';

export interface IStationAutoCompleteProps {}

export function StationAutoComplete() {
  const {
    control,
    formState: { errors },
  } = useFormContext<AlarmFormData>();
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
      <Autocomplete
        control={control}
        defaultValue={stations[0]}
        freeSolo={false}
        getOptionLabel={(option) => option.name}
        name='info.station'
        options={stations}
        renderInput={(params) => <TextField {...params} size='small' />}
        renderOption={(props, option) => (
          <Typography {...props} variant='body2'>
            {option.name}
          </Typography>
        )}
        sx={{
          '& input': {
            fontSize: '14px',
          },
        }}
      />
      <FormHelperText error={!!errors.info?.station}>
        {errors.info?.station?.message}
      </FormHelperText>
    </FormControl>
  );
}

export type FilmOption = {
  id: number;
  label: string;
  year: number;
};

const stations: Station[] = [
  {
    id: 'station-1',
    name: 'Trạm 1',
  },
  {
    id: 'station-2',
    name: 'Trạm 2',
  },
  {
    id: 'station-3',
    name: 'Trạm 3',
  },
  {
    id: 'station-4',
    name: 'Trạm 4',
  },
  {
    id: 'station-5',
    name: 'Trạm 5',
  },
  {
    id: 'station-6',
    name: 'Trạm 6',
  },
  {
    id: 'station-7',
    name: 'Trạm 7',
  },
  {
    id: 'station-8',
    name: 'Trạm 8',
  },
  {
    id: 'station-9',
    name: 'Trạm 9',
  },
  {
    id: 'station-10',
    name: 'Trạm 10',
  },
];
