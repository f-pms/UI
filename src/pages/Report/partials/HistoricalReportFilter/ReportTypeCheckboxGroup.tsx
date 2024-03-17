import {
  Controller,
  ControllerRenderProps,
  useFormContext,
} from 'react-hook-form';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Typography,
} from '@mui/material';

import { ReportType } from '~/types';

import { FilterReportFormData } from '~/pages/Report/helpers/filterReportFrom';
import { reportTypeList } from '~/pages/Report/mocks/reportTypeList';

export interface IReportTypeCheckboxGroupProps {}

export function ReportTypeCheckboxGroup() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FilterReportFormData>();

  const handleCheckboxChange = (
    field: ControllerRenderProps<FilterReportFormData, 'typeId'>,
    id: number,
  ) => {
    if (!field.value.includes(id)) {
      field.onChange([...field.value, id]);
      return;
    }
    const newTopics = field.value.filter((topic: number) => topic !== id);
    field.onChange(newTopics);
  };

  return (
    <FormControl component='fieldset' sx={{ mb: 1 }} variant='standard'>
      <Typography
        color='text.strong'
        sx={{ fontWeight: 'bold' }}
        variant='subtitle2'
      >
        Loại chỉ số điện:
      </Typography>
      {reportTypeList.map((item: ReportType) => (
        <FormControlLabel
          key={item.id}
          control={
            <Controller
              control={control}
              name='typeId'
              render={({ field }) => (
                <Checkbox
                  {...field}
                  checked={field.value.includes(item.id)}
                  onChange={() => handleCheckboxChange(field, item.id)}
                />
              )}
            />
          }
          label={<Typography variant='body2'>{item.label}</Typography>}
        />
      ))}
      <FormHelperText error={!!errors.typeId} sx={{ ml: 0 }}>
        {errors.typeId?.message}
      </FormHelperText>
    </FormControl>
  );
}
