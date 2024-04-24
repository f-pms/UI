import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';

import {
  UpdateAlarmDTO,
  useUpdateAlarmCondition,
} from '~/services/alarm-condition/mutation/useUpdateAlarmCondition';
import { useQueryAlarmConditions } from '~/services/alarm-condition/queries/useQueryAlarmConditions';
import { Alarm, AlarmType } from '~/types';
import { displayErrorMessage } from '~/utils/errorMessage';

import {
  AlarmFormData,
  alarmSchema,
} from '~/pages/AlarmManagement/helpers/alarmForm';
import { getTypeCondition } from '~/pages/AlarmManagement/helpers/getTypeCondition';
import { AlarmInfoForm } from '~/pages/AlarmManagement/partials/AlarmInfoForm';
import { TypeCondition } from '~/pages/AlarmManagement/partials/AlarmInfoForm/TypeConditionSelect';
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
  closeMenu: () => void;
}

export type AlarmStep = {
  label: string;
  content: React.ReactNode;
  description: string;
  value: 'info' | 'noti';
};

export default function UpdateAlarmDialog(props: IUpdateAlarmDialogProps) {
  const { alarm, closeMenu } = props;
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const {
    mutate: updateAlarmCondition,
    isSuccess: isUpdateInfoAlarmSuccess,
    isError: isUpdateInfoAlarmError,
    error,
  } = useUpdateAlarmCondition();
  const { refetch } = useQueryAlarmConditions({
    enabled: false,
  });

  const defaultAlarmFormData: AlarmFormData = useMemo(() => {
    return {
      info: {
        id: alarm.id,
        sensorConfig: { ...alarm.sensorConfiguration, attachedToAlarm: true },
        station: {
          id: alarm.blueprint.id,
          name: alarm.blueprint.name,
          value: alarm.blueprint.name,
          type: 'MONITORING',
          typeLabel: 'Giám sát',
        },
        type: alarm.type,
        severity: alarm.severity,
        checkInterval: alarm.checkInterval,
        timeDelay: alarm.timeDelay,
        min: alarm.min ?? undefined,
        max: alarm.max ?? undefined,
        enabled: alarm.enabled,
        typeCondition: getTypeCondition(alarm.min, alarm.max),
      },
      noti: {
        message: alarm.actions[0]?.message,
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
    closeMenu();
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

  const handleSubmit = () => {
    methods.trigger('info').then((isValid) => {
      if (isValid) {
        const data = methods.getValues();
        const payload: UpdateAlarmDTO = {
          enabled: data.info.enabled,
          sensorConfigurationId: data.info.sensorConfig?.id ?? 0,
          type: data.info.type,
          severity: data.info.severity,
          timeDelay: data.info.timeDelay,
          checkInterval: data.info.checkInterval,
          min:
            data.info.typeCondition === TypeCondition.LESS_THAN
              ? undefined
              : parseFloat(data.info.min as string),
          max:
            data.info.typeCondition === TypeCondition.GREATER_THAN
              ? undefined
              : parseFloat(data.info.max as string),
        };
        updateAlarmCondition({ id: alarm.id, payload });
      }
    });
  };

  useEffect(() => {
    if (isUpdateInfoAlarmSuccess) {
      toast.success('Cập nhật thông tin cảnh báo thành công');
      refetch();
    }
  }, [isUpdateInfoAlarmSuccess, refetch]);

  useEffect(() => {
    if (isUpdateInfoAlarmError) {
      toast.error(displayErrorMessage(error));
    }
  }, [isUpdateInfoAlarmError, error]);

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
        maxWidth='lg'
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
              <Button variant='contained' onClick={handleSubmit}>
                Cập nhật
              </Button>
            )}
          </Stack>
        </DialogActions>
      </Dialog>
    </FormProvider>
  );
}
