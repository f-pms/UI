import * as React from 'react';

import { useForm } from '~/libs/react-hook-form';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import AlarmForm from '~/pages/AlarmManagement/partials/AlarmForm';

import { SettingsInputComponentOutlinedIcon } from '~/components/Icons';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  Typography,
} from '~/components/MuiComponents';

export interface ICreateAlarmDialogProps {}

export function CreateAlarmDialog() {
  const [open, setOpen] = React.useState(false);
  const { control, handleSubmit, reset } = useForm<AlarmFormData>({
    defaultValues: {
      name: '',
    },
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  return (
    <>
      <Button
        startIcon={<SettingsInputComponentOutlinedIcon />}
        variant='contained'
        onClick={handleClickOpen}
      >
        Thêm cấu hình
      </Button>
      <Dialog
        PaperProps={{
          component: 'form',
          // onSubmit: handleSubmit((data) => {
          //   console.log(data);
          // }),
        }}
        maxWidth='md'
        open={open}
        onClose={handleClose}
      >
        <Box pt={2} px={3}>
          <Typography
            color='text.strong'
            sx={{ fontWeight: 'bold' }}
            variant='h6'
          >
            Thêm cấu hình cảnh báo
          </Typography>
          <Typography variant='body2'>
            Thiết lập các điều kiện cho hiển thị cảnh báo.
          </Typography>
        </Box>
        <DialogContent>
          <AlarmForm control={control} />
        </DialogContent>
        <DialogActions sx={{ borderTop: 1, borderColor: 'divider' }}>
          <Stack
            alignItems='center'
            direction='row'
            justifyContent='space-between'
            sx={{ width: '100%', p: 2 }}
          >
            <Box>
              <Typography
                color='text.strong'
                sx={{ fontWeight: 'bold' }}
                variant='subtitle2'
              >
                Lưu thiết lập
              </Typography>
              <Typography variant='body2'>
                Hệ thống sẽ hiển thị cảnh báo sao 5s (Nếu có)
              </Typography>
            </Box>
            <Stack direction='row' spacing={2}>
              <Button color='inherit' variant='outlined' onClick={handleClose}>
                Đóng
              </Button>
              <Button type='submit' variant='contained'>
                Thiết lập
              </Button>
            </Stack>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
}
