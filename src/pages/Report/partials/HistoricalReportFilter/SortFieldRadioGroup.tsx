import { Controller, FieldPath, useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

import { FilterReportFormData } from '~/pages/Report/helpers/filterReportFrom';
import { SortOption } from '~/pages/Report/helpers/sortOption';

export interface ISortFieldRadioGroupProps {
  name: FieldPath<Pick<FilterReportFormData, 'order' | 'sortBy'>>;
  options: SortOption[];
  label: string;
}

export function SortFieldRadioGroup(props: ISortFieldRadioGroupProps) {
  const { name, options, label } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext<FilterReportFormData>();

  return (
    <FormControl component='fieldset' sx={{ my: 2 }} variant='standard'>
      <Typography
        color='text.strong'
        sx={{ fontWeight: 'bold' }}
        variant='subtitle2'
      >
        {label}
      </Typography>
      <FormGroup>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <RadioGroup {...field}>
              {options.map((item: SortOption) => (
                <FormControlLabel
                  key={item.value}
                  control={<Radio />}
                  label={<Typography variant='body2'>{item.label}</Typography>}
                  value={item.value}
                />
              ))}
            </RadioGroup>
          )}
        />
      </FormGroup>
      <FormHelperText error={!!errors[name]} sx={{ ml: 0 }}>
        {errors[name]?.message}
      </FormHelperText>
    </FormControl>
  );
}
