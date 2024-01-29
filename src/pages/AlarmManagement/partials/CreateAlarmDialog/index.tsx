import { useState } from 'react';
import React from 'react';

import { useForm } from '~/libs/react-hook-form';

import {
  AlarmFormData,
  defaultAlarmFormData,
} from '~/pages/AlarmManagement/helpers/alarmForm';
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

export type AlarmStep = {
  label: string;
  content: React.ReactNode;
};

export function CreateAlarmDialog() {
  const [open, setOpen] = useState(false);
  const { control, reset, setValue } = useForm<AlarmFormData>({
    defaultValues: defaultAlarmFormData,
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const steps: AlarmStep[] = [
    {
      label: 'Cấu hình cảnh báo',
      content: <AlarmForm control={control} setValue={setValue} />,
    },
    {
      label: 'Gửi cảnh báo',
      content: <div>Gửi cảnh báo</div>,
    },
    {
      label: 'Hoàn thành',
      content: <div>Hoàn thành</div>,
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
          <Stack
            alignItems='center'
            direction='row'
            justifyContent='space-between'
          >
            <Box>
              <Typography
                color='text.strong'
                sx={{ fontWeight: 'bold' }}
                variant='h6'
              >
                {`Bước ${activeStep + 1}: ${steps[activeStep].label}`}
              </Typography>
              <Typography variant='body2'>
                Thiết lập các điều kiện cho hiển thị cảnh báo.
              </Typography>
            </Box>
            <Typography variant='body2'>{`(${activeStep + 1}/${
              steps.length
            })`}</Typography>
          </Stack>
        </Box>
        <DialogContent>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>{steps[activeStep].content}</React.Fragment>
          )}
          {/* <AlarmForm control={control} setValue={setValue} /> */}
        </DialogContent>
        <DialogActions sx={{ borderTop: 1, borderColor: 'divider' }}>
          <Stack
            alignItems='center'
            direction='row'
            justifyContent='space-between'
            sx={{ width: '100%', p: 2 }}
          >
            <Button
              color='inherit'
              disabled={activeStep === 0}
              variant='outlined'
              onClick={handleBack}
            >
              Trở lại
            </Button>
            <Button type='button' variant='contained' onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Hoàn thành' : 'Kế tiếp'}
            </Button>
          </Stack>
        </DialogActions>
        {/* <DialogActions sx={{ borderTop: 1, borderColor: 'divider' }}>
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
        </DialogActions> */}
      </Dialog>
    </>
  );
}
