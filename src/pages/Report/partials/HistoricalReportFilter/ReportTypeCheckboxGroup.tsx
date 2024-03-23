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

import { useQueryReportTypes } from '~/services/report/useQueryReportTypes';
import { ReportType } from '~/types';

import { REPORT_TYPE_LABELS } from '~/pages/Report/helpers/constants';
import { FilterReportFormData } from '~/pages/Report/helpers/filterReportFrom';

export interface IReportTypeCheckboxGroupProps {}

export function ReportTypeCheckboxGroup() {
  const { data: reportTypes } = useQueryReportTypes();
  const {
    control,
    formState: { errors },
  } = useFormContext<FilterReportFormData>();

  const handleCheckboxChange = (
    field: ControllerRenderProps<FilterReportFormData, 'typeIds'>,
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
      {reportTypes?.map((item: ReportType) => (
        <FormControlLabel
          key={item.id}
          control={
            <Controller
              control={control}
              name='typeIds'
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
      <FormHelperText error={!!errors.typeIds} sx={{ ml: 0 }}>
        {errors.typeIds?.message}
      </FormHelperText>
    </FormControl>
  );
}
