import * as React from 'react';
import { useFormContext } from 'react-hook-form';

import { AlarmActionType } from '~/types';

import {
  AlarmFormData,
  NOTI_METHOD_OPTIONS,
} from '~/pages/AlarmManagement/helpers/alarmForm';
import { SendEmailMethod } from '~/pages/AlarmManagement/partials/AlarmNotiForm/SendEmailMethod';
import { ToastMethod } from '~/pages/AlarmManagement/partials/AlarmNotiForm/ToastMethod';

import { SoftButton, SoftChip } from '~/components';
import { AddCircleOutlineOutlinedIcon } from '~/components/Icons';
import {
  Box,
  Divider,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '~/components/MuiComponents';

export interface IAddMethodProps {}

export function AddNotiMethod() {
  const { setValue, getValues } = useFormContext<AlarmFormData>();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const checkIsSelected = (value: AlarmActionType) => {
    const selectedOptions = getValues('noti.actions');
    return selectedOptions.some((item) => item.type === value);
  };

  const handleMenuItemClick = (value: AlarmActionType) => {
    const selectedOptions = getValues('noti.actions');

    setValue('noti.actions', [
      ...selectedOptions,
      { id: 0, type: value, recipients: [] },
    ]);
    setAnchorEl(null);
  };

  const handleRemoveAction = (value: AlarmActionType) => {
    const selectedOptions = getValues('noti.actions');
    setValue(
      'noti.actions',
      selectedOptions.filter((option) => option.type !== value),
    );
  };

  const fields = {
    [AlarmActionType.POPUP]: (
      <ToastMethod onRemoveAction={handleRemoveAction} />
    ),
    [AlarmActionType.EMAIL]: (
      <SendEmailMethod onRemoveAction={handleRemoveAction} />
    ),
  };

  return (
    <div>
      <Box sx={{ mt: 3 }}>
        <Typography
          color='text.strong'
          sx={{ fontWeight: 'bold' }}
          variant='subtitle2'
        >
          Phương thức cảnh báo
        </Typography>
        <Typography mb={1} variant='body2'>
          Cho phép chọn nhiều phương thức cảnh báo khác nhau
        </Typography>
        <Box
          sx={(theme) => ({
            background: theme.palette.grey[100],
            p: getValues('noti.actions').length ? 2 : 0,
            borderRadius: '4px',
          })}
        >
          {getValues('noti.actions').map((item, index) => (
            <Box key={item.type}>
              {fields[item.type]}
              {index !== getValues('noti.actions').length - 1 && (
                <Divider sx={{ my: 2 }} />
              )}
            </Box>
          ))}
        </Box>
        <SoftButton
          aria-controls={open ? 'basic-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          id='basic-button'
          startIcon={<AddCircleOutlineOutlinedIcon />}
          style={{ width: '100%', marginTop: '8px' }}
          onClick={handleClick}
        >
          Thêm phương thức
        </SoftButton>
      </Box>
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
    </div>
  );
}
