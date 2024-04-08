import { useFormContext } from 'react-hook-form';

import { Menu, MenuItem, Stack, Typography } from '@mui/material';

import { AlarmActionType } from '~/types';

import {
  AlarmFormData,
  NOTI_METHOD_OPTIONS,
} from '~/pages/AlarmManagement/helpers/alarmForm';

import { SoftChip } from '~/components';

export interface INotiMethodMenuProps {
  anchorEl: null | HTMLElement;
  setAnchorEl: (value: null | HTMLElement) => void;
}

export function NotiMethodMenu(props: INotiMethodMenuProps) {
  const { anchorEl, setAnchorEl } = props;
  const open = Boolean(anchorEl);

  const { setValue, watch, clearErrors } = useFormContext<AlarmFormData>();
  const selectedOptions = watch('noti.actions');

  const checkIsSelected = (value: AlarmActionType) => {
    return selectedOptions.some((item) => item.type === value);
  };

  const handleMenuItemClick = (value: AlarmActionType) => {
    setValue('noti.actions', [
      ...selectedOptions,
      { id: 0, type: value, recipients: [] },
    ]);
    setAnchorEl(null);
    clearErrors('noti.actions');
  };
  return (
    <Menu
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      anchorEl={anchorEl}
      id='basic-menu'
      open={open}
      onClose={() => setAnchorEl(null)}
    >
      {NOTI_METHOD_OPTIONS.map((option) => (
        <MenuItem
          key={option.value}
          disabled={checkIsSelected(option.value)}
          sx={{ width: '600px' }}
          onClick={() => handleMenuItemClick(option.value)}
        >
          <Stack
            alignItems='center'
            direction='row'
            justifyContent='space-between'
            sx={{ width: '100%' }}
          >
            <Typography variant='body2'>{option.label}</Typography>
            {checkIsSelected(option.value) && <SoftChip label='Đã chọn' />}
          </Stack>
        </MenuItem>
      ))}
    </Menu>
  );
}
