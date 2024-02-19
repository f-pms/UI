import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';

import { FormProvider, useForm } from '~/libs/react-hook-form';

import {
  AlarmFormData,
  alarmSchema,
  defaultAlarmFormData,
} from '~/pages/AlarmManagement/helpers/alarmForm';
import { AlarmInfoForm } from '~/pages/AlarmManagement/partials/AlarmInfoForm';
import { AlarmNotiForm } from '~/pages/AlarmManagement/partials/AlarmNotiForm';
import { AlertChangeModeDialog } from '~/pages/AlarmManagement/partials/AlertChangeModeDialog';
import { FinishStep } from '~/pages/AlarmManagement/partials/FinishStep';

import { SettingsInputComponentOutlinedIcon } from '~/components/Icons';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  Stack,
  Switch,
  Typography,
} from '~/components/MuiComponents';

export interface ICreateAlarmDialogProps {}

export type AlarmStep = {
  label: string;
  content: React.ReactNode;
  description: string;
};

export function CreateAlarmDialog() {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [openAlertChangeMode, setOpenAlertChangeMode] = useState(false);

  const methods = useForm<AlarmFormData>({
    defaultValues: defaultAlarmFormData,
    resolver: yupResolver(alarmSchema),
  });

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    methods.reset();
    setActiveStep(0);
    setIsAdvanced(false);
  };

  const handleNext = () => {
    // if (activeStep === steps.length - 1) {
    //   handleCloseDialog();
    //   return;
    // }
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    methods.trigger('info').then((isValid) => {
      if (isValid) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleAgreeChangeMode = () => {
    setOpenAlertChangeMode(false);
    setIsAdvanced((prevIsAdvanced) => !prevIsAdvanced);
    setActiveStep(0);
    methods.reset();
  };

  const steps: AlarmStep[] = [
    {
      label: 'Cấu hình cảnh báo',
      description: 'Thiết lập các điều kiện cho hiển thị cảnh báo',
      content: <AlarmInfoForm isAdvanced={isAdvanced} />,
    },
    {
      label: 'Gửi cảnh báo',
      description: 'Thiết lập các thông tin gửi cảnh báo',
      content: <AlarmNotiForm />,
    },
    {
      label: 'Hoàn thành',
      description: 'Các bước chuẩn bị đã hoàn tất và sẵn sàng để tạo cảnh báo',
      content: <FinishStep />,
    },
  ];

  return (
    <>
      <Button
        startIcon={<SettingsInputComponentOutlinedIcon />}
        variant='contained'
        onClick={handleOpenDialog}
      >
        Thêm cấu hình
      </Button>
      <Dialog
        PaperProps={{
          component: 'form',
        }}
        maxWidth='md'
        open={open}
        onClose={handleCloseDialog}
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
                {`Bước ${activeStep + 1}/${steps.length}: ${
                  steps[activeStep].label
                }`}
              </Typography>
              <Typography variant='body2'>
                {steps[activeStep].description}
              </Typography>
            </Box>
            <FormControlLabel
              control={
                <Switch
                  checked={isAdvanced}
                  color='primary'
                  inputProps={{ 'aria-label': 'controlled' }}
                  onChange={() => setOpenAlertChangeMode(true)}
                />
              }
              label={
                <Typography variant='body2'>Thiết lập nâng cao</Typography>
              }
              labelPlacement='bottom'
              sx={{ mr: 0 }}
            />
          </Stack>
        </Box>
        <DialogContent>
          <FormProvider {...methods}>
            {activeStep === steps.length ? (
              <>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </>
            ) : (
              steps[activeStep].content
            )}
          </FormProvider>
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
              variant='outlined'
              onClick={handleCloseDialog}
            >
              Đóng
            </Button>
            <Stack direction='row' spacing={1}>
              <Button
                color='inherit'
                disabled={activeStep === 0}
                variant='contained'
                onClick={handleBack}
              >
                Trở lại
              </Button>
              <Button variant='contained' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Tạo cảnh báo' : 'Kế tiếp'}
              </Button>
            </Stack>
          </Stack>
        </DialogActions>
      </Dialog>
      <AlertChangeModeDialog
        handleAgree={handleAgreeChangeMode}
        handleClose={() => setOpenAlertChangeMode(false)}
        isAdvanced={isAdvanced}
        open={openAlertChangeMode}
      />
    </>
  );
}
