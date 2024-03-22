import { useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormControl,
  MenuItem,
  Select,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';

import {
  DateTypes,
  defaultStatisticReportFormData,
  statisticReportValidationSchema,
  ViewTypes,
} from '~/pages/Report/helpers/statisticReportForm';

import CustomSingleDatePicker from '~/components/DatePicker';

const StyledFilterBox = styled(Stack)(() => ({
  border: `1px solid rgba(0, 0, 0, 0.2)`,
  height: 'min-content',
  padding: `1rem`,
}));

const StyledSelect = styled(Select)(() => ({
  width: 160,
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

const StyledTextField = styled(TextField)(() => ({
  width: 160,
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

const StatisticReportFilter = () => {
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
    setValue,
    trigger,
  } = useForm({
    defaultValues: defaultStatisticReportFormData,
    resolver: yupResolver(statisticReportValidationSchema),
  });

  const watchStepField = watch('stepField');
  const watchSelectedDateType = watch('selectedDateType');
  const watchSelectedDate = watch('selectedDate');
  const watchViewType = watch('viewType');
  const watchFixedDate = watch('fixedDate');

  const onSubmit = () => {};

  const getFixedDate = useCallback(() => {
    const { viewType, stepField, selectedDateType, selectedDate } = watch();
    let dayStep = stepField;
    let monthStep = 0;
    const fixedDate = new Date(selectedDate);
    let currentDay;

    if (selectedDateType === DateTypes.END_DATE) {
      dayStep *= -1;
    }

    switch (viewType) {
      case ViewTypes.BY_DAY:
        dayStep *= 1;
        fixedDate.setDate(fixedDate.getDate() + dayStep);
        break;
      case ViewTypes.BY_WEEK:
        dayStep *= 7;
        fixedDate.setDate(fixedDate.getDate() + dayStep);
        break;
      case ViewTypes.BY_MONTH:
        monthStep =
          stepField * (selectedDateType === DateTypes.START_DATE ? 1 : -1);
        currentDay = fixedDate.getDate();
        fixedDate.setMonth(fixedDate.getMonth() + monthStep);
        if (currentDay > fixedDate.getDate()) {
          fixedDate.setDate(0);
        }
        break;
      case ViewTypes.BY_YEAR:
        fixedDate.setMonth(fixedDate.getMonth() + 12 * stepField);
        break;
      default:
        break;
    }
    return fixedDate;
  }, [watch]);

  const getStepPostFix = () => {
    switch (watchViewType) {
      case ViewTypes.BY_DAY:
        return 'ngày';
      case ViewTypes.BY_WEEK:
        return 'tuần';
      case ViewTypes.BY_MONTH:
        return 'tháng';
      case ViewTypes.BY_YEAR:
        return 'năm';
      default:
        break;
    }
  };

  useEffect(() => {
    setValue('fixedDate', getFixedDate());
  }, [
    watchSelectedDate,
    watchSelectedDateType,
    watchStepField,
    watchViewType,
    getFixedDate,
    setValue,
  ]);

  useEffect(() => {
    trigger();
  }, [
    watchStepField,
    watchSelectedDateType,
    watchSelectedDate,
    watchViewType,
    watchFixedDate,
    trigger,
  ]);

  return (
    <StyledFilterBox>
      <Stack direction='row'>
        <FormControl>
          <Controller
            control={control}
            name='viewType'
            render={({ field }) => (
              <StyledSelect
                sx={{ width: 160 }}
                {...field}
                error={!!errors.viewType} // Set error indicator if there's an error
              >
                <MenuItem value={ViewTypes.BY_DAY}>{ViewTypes.BY_DAY}</MenuItem>
                <MenuItem value={ViewTypes.BY_WEEK}>
                  {ViewTypes.BY_WEEK}
                </MenuItem>
                <MenuItem value={ViewTypes.BY_MONTH}>
                  {ViewTypes.BY_MONTH}
                </MenuItem>
                <MenuItem value={ViewTypes.BY_YEAR}>
                  {ViewTypes.BY_YEAR}
                </MenuItem>
              </StyledSelect>
            )}
          />
        </FormControl>
        <FormControl>
          <Controller
            control={control}
            name='stepField'
            render={({ field }) => (
              <TextField
                {...field}
                InputProps={{
                  endAdornment: (
                    <Typography paddingInlineStart={1}>
                      {getStepPostFix()}
                    </Typography>
                  ),
                }}
                error={!!errors.stepField}
                helperText={errors.stepField?.message}
                sx={{
                  width: 230,
                }}
                type='number'
              />
            )}
          />
        </FormControl>
      </Stack>

      <Stack direction='row'>
        <FormControl>
          <Controller
            control={control}
            name='selectedDateType'
            render={({ field }) => (
              <StyledSelect sx={{ width: 160 }} {...field}>
                <MenuItem value={DateTypes.START_DATE}>
                  {DateTypes.START_DATE}
                </MenuItem>
                <MenuItem value={DateTypes.END_DATE}>
                  {DateTypes.END_DATE}
                </MenuItem>
              </StyledSelect>
            )}
          />
        </FormControl>
        <FormControl>
          <Controller
            control={control}
            name='selectedDate'
            render={({ field }) => (
              <CustomSingleDatePicker width={230} {...field} disableFuture />
            )}
          />
        </FormControl>
      </Stack>

      <Stack direction='row'>
        <StyledTextField
          disabled
          // Access value from form state using watch
          value={
            watch('selectedDateType') === DateTypes.START_DATE
              ? DateTypes.END_DATE
              : DateTypes.START_DATE
          }
        />
        <FormControl>
          <Controller
            control={control}
            name='selectedDate'
            render={({ field }) => (
              <CustomSingleDatePicker
                {...field}
                disabled
                helperText={errors.fixedDate?.message}
                value={getFixedDate()}
                width={230}
              />
            )}
          />
        </FormControl>
      </Stack>
      <Stack direction='row'>
        <button
          disabled={!isValid}
          type='submit'
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </Stack>
    </StyledFilterBox>
  );
};

export default StatisticReportFilter;
