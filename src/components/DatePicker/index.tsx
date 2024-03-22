import { forwardRef } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

import { useTheme } from '@mui/material';
import { DesktopDatePicker, DesktopDatePickerProps } from '@mui/x-date-pickers';

type CustomSingleDatePickerProps = DesktopDatePickerProps<Date> &
  ControllerRenderProps & {
    helperText?: string;
    width?: number;
  };

const CustomSingleDatePicker = forwardRef(
  ({ helperText, width, ...props }: CustomSingleDatePickerProps, _) => {
    const theme = useTheme();

    return (
      <DesktopDatePicker
        {...props}
        format='dd/MM/yyyy'
        slotProps={{
          textField: {
            error: !!helperText,
            helperText,
          },
          layout: {
            sx: {
              '.MuiPickersDay-root': {
                borderRadius: 0,
                borderWidth: 0,
              },
            },
          },
        }}
        sx={{
          width,
          '& .MuiOutlinedInput-notchedOutline': {
            border: `0.8px solid ${
              helperText ? theme.palette.error.main : '#c8c8c8'
            } !important`,
          },
        }}
      />
    );
  },
);

export default CustomSingleDatePicker;
