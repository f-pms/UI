import { ChangeEvent, useContext, useEffect } from 'react';

import { Input, styled } from '~/libs/mui';

import { DateRangeContext } from '~/components/DateRangePicker/context/DateRangeContext';
import useDateInput from '~/components/DateRangePicker/hooks/useDateInput';
import {
  ArrowForwardIcon,
  CloseOutlinedIcon,
  DateRangeIcon,
} from '~/components/Icons';
import { IconButton, Stack } from '~/components/MuiComponents';

export interface IDateInputProps {
  focused: boolean;
  setFocused: (focused: boolean) => void;
}

const StyledInput = styled(Input)(() => ({
  '&:before': {
    borderBottom: 'none',
  },
  '&:after': {
    transform: 'scaleX(0)',
  },
  fontSize: '14px',
  width: '100px',
}));

export function DateInput({ focused, setFocused }: IDateInputProps) {
  const { focusedFromField, focusedToField, onBlur } =
    useContext(DateRangeContext);

  const {
    fromText,
    toText,
    onFocusField,
    onFieldChange,
    onBlurredFromField,
    onBlurredToField,
    handleKeyDown,
  } = useDateInput();

  const onClose = () => {
    setFocused(false);
    onBlur();
  };

  useEffect(() => {
    if (!focused) return;
    if (focusedFromField || focusedToField) return;
    onFocusField('from');
  }, [focused, onFocusField, focusedFromField, focusedToField]);

  return (
    <Stack alignItems='center' direction='row' spacing={1}>
      <StyledInput
        id='date-from'
        placeholder='Từ ngày'
        size='small'
        sx={{
          '&:after': {
            transform: focusedFromField
              ? 'scaleX(1) translateX(0)'
              : 'scaleX(0)',
          },
        }}
        value={fromText}
        onBlur={onBlurredFromField}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onFieldChange('from', event)
        }
        onFocus={() => onFocusField('from')}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          handleKeyDown('from', event);
        }}
      />

      <ArrowForwardIcon sx={{ fontSize: '16px' }} />
      <StyledInput
        id='date-to'
        placeholder='Đến ngày'
        size='small'
        sx={{
          '&:after': {
            transform: focusedToField ? 'scaleX(1) translateX(0)' : 'scaleX(0)',
          },
        }}
        value={toText}
        onBlur={onBlurredToField}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onFieldChange('to', event);
        }}
        onFocus={() => onFocusField('to')}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          handleKeyDown('to', event);
        }}
      />
      {focused ? (
        <IconButton size='small' onClick={onClose}>
          <CloseOutlinedIcon />
        </IconButton>
      ) : (
        <IconButton
          size='small'
          onClick={() => {
            setFocused(true);
            onFocusField('from');
          }}
        >
          <DateRangeIcon />
        </IconButton>
      )}
    </Stack>
  );
}
