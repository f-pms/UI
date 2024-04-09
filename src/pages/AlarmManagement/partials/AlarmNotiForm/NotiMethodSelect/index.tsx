import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { FormHelperText } from '@mui/material';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { NotiMethodMenu } from '~/pages/AlarmManagement/partials/AlarmNotiForm/NotiMethodSelect/NotiMethodMenu';
import { SelectedMethodList } from '~/pages/AlarmManagement/partials/AlarmNotiForm/NotiMethodSelect/SelectedMethodList';

import { SoftButton } from '~/components';
import { AddCircleOutlineOutlinedIcon } from '~/components/Icons';
import { Box, Typography } from '~/components/MuiComponents';

export interface IAddMethodProps {}

export function NotiMethodSelect() {
  const {
    formState: { errors },
  } = useFormContext<AlarmFormData>();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickAddAction = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
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

        <SelectedMethodList />

        <SoftButton
          aria-controls={open ? 'basic-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          startIcon={<AddCircleOutlineOutlinedIcon />}
          style={{ width: '100%', marginTop: '8px' }}
          onClick={handleClickAddAction}
        >
          Thêm phương thức
        </SoftButton>
      </Box>

      <FormHelperText error={!!errors.noti?.actions} sx={{ ml: 0 }}>
        {errors.noti?.actions?.message}
      </FormHelperText>

      <NotiMethodMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  );
}
