import { useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { Alarm, AlarmType } from '~/types';

import {
  AlarmFormData,
  alarmSchema,
} from '~/pages/AlarmManagement/helpers/alarmForm';
import { AlarmInfoForm } from '~/pages/AlarmManagement/partials/AlarmInfoForm';
import { AlarmNotiForm } from '~/pages/AlarmManagement/partials/AlarmNotiForm';

import { SoftChip } from '~/components';
import { EditOutlinedIcon } from '~/components/Icons';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  Typography,
} from '~/components/MuiComponents';

export interface IUpdateAlarmDialogProps {
  alarm: Alarm;
}

export type AlarmStep = {
  label: string;
  content: React.ReactNode;
  description: string;
  value: 'info' | 'noti';
};

export default function UpdateAlarmDialog(props: IUpdateAlarmDialogProps) {
  const { alarm } = props;
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const defaultAlarmFormData: AlarmFormData = useMemo(() => {
    return {
      info: {
        sensorConfig: null,
        station: null,
        type: alarm.type,
        severity: alarm.severity,
        checkInterval: alarm.checkInterval,
        timeDelay: alarm.timeDelay,
        isEnabled: alarm.isEnabled,
        min: alarm.min,
        max: alarm.max,
      },
      noti: {
        message: alarm.message,
        actions: alarm.actions,
      },
      isUpdate: true,
    };
  }, [alarm]);

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
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleCloseDialog();
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (step: 'noti' | 'info') => {
    methods.trigger(step).then((isValid) => {
      if (isValid) {
        // console.log('submit', methods.getValues(step));
      }
    });
  };

  const steps: AlarmStep[] = [
    {
      label: 'Cấu hình cảnh báo',
      description: 'Thiết lập các điều kiện cho hiển thị cảnh báo',
      content: <AlarmInfoForm isAdvanced={alarm.type === AlarmType.CUSTOM} />,
      value: 'info',
    },
    {
      label: 'Gửi cảnh báo',
      description: 'Thiết lập các thông tin gửi cảnh báo',
      content: <AlarmNotiForm />,
      value: 'noti',
    },
  ];

  return (
    <FormProvider {...methods}>
      <MenuItem key='edit' onClick={handleOpenDialog}>
        <ListItemIcon>
          <EditOutlinedIcon sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText>Chỉnh sửa cảnh báo</ListItemText>
      </MenuItem>
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
                {`Chỉnh sửa: ${steps[activeStep].label}`}
              </Typography>
              <Typography variant='body2'>
                {steps[activeStep].description}
              </Typography>
            </Box>
            <SoftChip
              label={
                alarm.type == AlarmType.PREDEFINED
                  ? 'Thiết lập cơ bản'
                  : 'Thiết lập nâng cao'
              }
            />
          </Stack>
        </Box>
        <DialogContent>{steps[activeStep].content}</DialogContent>
        <DialogActions sx={{ borderTop: 1, borderColor: 'divider' }}>
          <Stack
            alignItems='center'
            direction='row'
            justifyContent='space-between'
            sx={{ width: '100%', p: 2 }}
          >
            <Button
              color='inherit'
              variant='contained'
              onClick={handleCloseDialog}
            >
              Đóng
            </Button>
            <Stack direction='row' spacing={1}>
              <Button
                color='inherit'
                disabled={activeStep === 0}
                variant='outlined'
                onClick={handleBack}
              >
                Trở lại
              </Button>
              {activeStep < steps.length - 1 && (
                <Button variant='outlined' onClick={handleNext}>
                  Kế tiếp
                </Button>
              )}
            </Stack>
            {activeStep < steps.length - 1 && (
              <Button
                variant='contained'
                onClick={() => handleSubmit(steps[activeStep].value)}
              >
                Cập nhật
              </Button>
            )}
          </Stack>
        </DialogActions>
      </Dialog>
    </FormProvider>
  );
}
