import { useCallback, useContext, useEffect } from 'react';
import { format } from 'date-fns';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';

import { StatisticReportContext } from '~/pages/Report/context/StatisticReportContext';
import {
  DateTypes,
  defaultStatisticReportFormData,
  statisticReportValidationSchema,
  ViewTypes,
} from '~/pages/Report/helpers/statisticReportForm';

import CustomSingleDatePicker from '~/components/DatePicker';
import { SearchOutlinedIcon } from '~/components/Icons';

const StyledFilterBox = styled(Stack)(() => ({
  height: 'min-content',
}));

const StyledSelect = styled(Select)(() => ({
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
  const { setDate } = useContext(StatisticReportContext);

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
        fixedDate.setMonth(
          fixedDate.getMonth() +
            12 *
              stepField *
              (selectedDateType === DateTypes.START_DATE ? 1 : -1),
        );
        break;
      default:
        break;
    }
    if (selectedDateType === DateTypes.START_DATE) {
      fixedDate.setDate(fixedDate.getDate() - 1);
    } else {
      fixedDate.setDate(fixedDate.getDate() + 1);
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

  useEffect(() => {
    const formatedSelectedDate = format(watchSelectedDate, 'dd/MM/yyyy');
    const fixedSelectedDate = format(watchFixedDate ?? 0, 'dd/MM/yyyy');

    if (watchSelectedDateType === DateTypes.START_DATE) {
      setDate({
        startDate: formatedSelectedDate,
        endDate: watchFixedDate ? fixedSelectedDate : '',
      });
    } else {
      setDate({
        startDate: watchFixedDate ? fixedSelectedDate : '',
        endDate: formatedSelectedDate,
      });
    }
  }, [watchSelectedDate, watchFixedDate, watchSelectedDateType, setDate]);

  const getFormatedDate = () => {
    const formatedSelectedDate = format(watchSelectedDate, 'dd/MM/yyyy');
    const fixedSelectedDate = format(watchFixedDate ?? 0, 'dd/MM/yyyy');

    if (watchSelectedDateType === DateTypes.START_DATE) {
      return {
        startDate: formatedSelectedDate,
        endDate: watchFixedDate ? fixedSelectedDate : '',
      };
    } else {
      return {
        startDate: watchFixedDate ? fixedSelectedDate : '',
        endDate: formatedSelectedDate,
      };
    }
  };

  return (
    <Box marginBottom={4} textAlign='center'>
      <StyledFilterBox
        alignItems='center'
        flexDirection='row'
        justifyContent='center'
      >
        <Stack alignItems='center' direction='row'>
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

        <Stack alignItems='center' direction='row'>
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
                  <MenuItem value={ViewTypes.BY_DAY}>
                    {ViewTypes.BY_DAY}
                  </MenuItem>
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
                      <Typography paddingInlineStart={1} variant='body2'>
                        {getStepPostFix()}
                      </Typography>
                    ),
                  }}
                  size='small'
                  sx={{
                    width: 230,
                  }}
                  type='number'
                />
              )}
            />
          </FormControl>
        </Stack>

        <Button
          color='primary'
          size='small'
          startIcon={<SearchOutlinedIcon />}
          sx={{ ml: 2 }}
          variant='contained'
          onClick={handleSubmit(onSubmit)}
        >
          Xem kết quả
        </Button>
      </StyledFilterBox>
      {isValid && (
        <Typography variant='body2'>
          Thống kê chỉ số điện SX cho nhà máy 7 từ{' '}
          <strong>{getFormatedDate().startDate}</strong> đến{' '}
          <strong>{getFormatedDate().endDate}</strong>
        </Typography>
      )}
      {!isValid && (
        <>
          <Typography color='error' variant='body2'>
            {errors.stepField?.message}
          </Typography>
          <Typography color='error' variant='body2'>
            {errors.fixedDate?.message}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default StatisticReportFilter;
