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

import { REPORT_TYPE_LABELS } from '~/pages/Report/helpers/constants';
import { FilterReportFormData } from '~/pages/Report/helpers/filterReportFrom';
import { REPORT_TYPE_LIST } from '~/pages/Report/mocks/reportTypeList';

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
        Cụm sản xuất:
      </Typography>
      {REPORT_TYPE_LIST.map((item: ReportType) => (
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
          label={
            <Typography variant='body2'>
              {REPORT_TYPE_LABELS[item.name]}
            </Typography>
          }
        />
      ))}
      <FormHelperText error={!!errors.typeId} sx={{ ml: 0 }}>
        {errors.typeId?.message}
      </FormHelperText>
    </FormControl>
  );
}
