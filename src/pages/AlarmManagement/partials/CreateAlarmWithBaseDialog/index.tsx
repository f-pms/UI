import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';

import { FormProvider, useForm } from '~/libs/react-hook-form';
import {
  CreateAlarmDTO,
  useCreateAlarmCondition,
} from '~/services/alarm-condition/mutation/useCreateAlarmCondition';
import { useQueryAlarmConditions } from '~/services/alarm-condition/queries/useQueryAlarmConditions';
import { Alarm, AlarmType } from '~/types';

import {
  AlarmFormData,
  alarmSchema,
} from '~/pages/AlarmManagement/helpers/alarmForm';
import { AlarmInfoForm } from '~/pages/AlarmManagement/partials/AlarmInfoForm';
import { AlarmNotiForm } from '~/pages/AlarmManagement/partials/AlarmNotiForm';
import { AlertChangeModeDialog } from '~/pages/AlarmManagement/partials/AlertChangeModeDialog';
import { FinishStep } from '~/pages/AlarmManagement/partials/FinishStep';

import { AddCircleOutlineOutlinedIcon } from '~/components/Icons';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  Switch,
  Typography,
} from '~/components/MuiComponents';

export type AlarmStep = {
  label: string;
  content: React.ReactNode;
  description: string;
  step?: 'info' | 'noti';
};

export interface IAlarmConfigTableProps {
  alarm: Alarm;
  closeMenu: () => void;
}

export function CreateAlarmWithBaseDialog(props: IAlarmConfigTableProps) {
  const { alarm, closeMenu } = props;
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [openAlertChangeMode, setOpenAlertChangeMode] = useState(false);
  const { mutate: createAlarmCondition, isSuccess } = useCreateAlarmCondition();
  const { refetch } = useQueryAlarmConditions();

  const defaultAlarmFormData: AlarmFormData = useMemo(() => {
    return {
      info: {
        id: alarm.id,
        sensorConfig: null,
        station: null,
        type: alarm.type,
        severity: alarm.severity,
        checkInterval: alarm.checkInterval,
        timeDelay: alarm.timeDelay,
        min: alarm.min,
        max: alarm.max,
        enabled: alarm.enabled,
      },
      noti: {
        message: alarm.actions[0]?.message,
        actions: alarm.actions,
      },
      isUpdate: false,
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
    setIsAdvanced(false);
    closeMenu();
  };

  const handleNext = (step: 'info' | 'noti') => {
    methods.trigger(step).then((isValid) => {
      if (isValid) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAgreeChangeMode = () => {
    setOpenAlertChangeMode(false);
    setActiveStep(0);
    methods.reset();
    methods.clearErrors();
    methods.setValue(
      'info.type',
      isAdvanced ? AlarmType.PREDEFINED : AlarmType.CUSTOM,
    );
    setIsAdvanced((prevIsAdvanced) => !prevIsAdvanced);
  };

  useEffect(() => {
    if (alarm.type === AlarmType.CUSTOM) {
      setIsAdvanced(true);
    }
  }, [alarm]);

  const steps: AlarmStep[] = [
    {
      label: 'Cấu hình cảnh báo',
      description: 'Thiết lập các điều kiện cho hiển thị cảnh báo',
      content: <AlarmInfoForm isAdvanced={isAdvanced} />,
      step: 'info',
    },
    {
      label: 'Gửi cảnh báo',
      description: 'Thiết lập các thông tin gửi cảnh báo',
      content: <AlarmNotiForm />,
      step: 'noti',
    },
    {
      label: 'Hoàn thành',
      description: 'Các bước chuẩn bị đã hoàn tất và sẵn sàng để tạo cảnh báo',
      content: <FinishStep />,
    },
  ];

  const handleSubmit = () => {
    const data = methods.getValues();
    const payload: CreateAlarmDTO = {
      sensorConfigurationId: data.info.sensorConfig?.id ?? 0,
      type: data.info.type,
      severity: data.info.severity,
      timeDelay: data.info.timeDelay,
      enabled: true,
      checkInterval: data.info.checkInterval,
      message: data.noti.message,
      actions: data.noti.actions,
      min: data.info.min,
      max: data.info.max,
    };
    createAlarmCondition(payload);
  };

  useEffect(() => {
    if (isSuccess) {
      handleCloseDialog();
      refetch();
      toast.success('Tạo cảnh báo thành công');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <FormProvider {...methods}>
      <MenuItem key='edit' onClick={handleOpenDialog}>
        <ListItemIcon>
          <AddCircleOutlineOutlinedIcon sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText>Tạo mới dựa theo cảnh báo này</ListItemText>
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
              <Button
                variant='contained'
                onClick={
                  activeStep === steps.length - 1
                    ? () => handleSubmit()
                    : () => handleNext(steps[activeStep]?.step ?? 'info')
                }
              >
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
    </FormProvider>
  );
}
