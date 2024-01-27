import { TextField } from '~/libs/mui';
import { Control } from '~/libs/react-hook-form';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

import { Autocomplete } from '~/components';
import { FormControl, Typography } from '~/components/MuiComponents';

export interface IVariableAutoCompleteProps {
  control: Control<AlarmFormData>;
}

export function VariableAutoComplete({ control }: IVariableAutoCompleteProps) {
  return (
    <FormControl sx={{ mt: 1, width: '100%' }} variant='outlined'>
      <Typography
        color='text.strong'
        sx={{ fontWeight: 'bold' }}
        variant='subtitle2'
      >
        Tên biến
      </Typography>
      <Typography variant='body2'>
        Biến được áp dụng điều kiện cảnh báo
      </Typography>
      <Autocomplete
        control={control}
        defaultValue={top100Films[0]}
        freeSolo={false}
        getOptionLabel={(option) => option.label}
        name='variable'
        options={top100Films}
        renderInput={(params) => <TextField {...params} size='small' />}
        renderOption={(props, option) => (
          <Typography {...props} variant='body2'>
            {option.label}
          </Typography>
        )}
        sx={{
          '& input': {
            fontSize: '14px',
          },
        }}
      />
    </FormControl>
  );
}

type FilmOption = {
  id: number;
  label: string;
  year: number;
};

const top100Films: FilmOption[] = [
  { id: 1, label: 'The Shawshank Redemption', year: 1994 },
  { id: 2, label: 'The Godfather', year: 1972 },
  { id: 3, label: 'The Godfather: Part II', year: 1974 },
  { id: 4, label: 'The Dark Knight', year: 2008 },
  { id: 5, label: '12 Angry Men', year: 1957 },
  { id: 6, label: "Schindler's List", year: 1993 },
  { id: 7, label: 'Pulp Fiction', year: 1994 },
  {
    id: 8,
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
];
