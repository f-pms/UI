import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';

import {
  CreateAlarmDTO,
  useCreateAlarmCondition,
} from '~/services/alarm-condition/mutation/useCreateAlarmCondition';
import { useQueryAlarmConditions } from '~/services/alarm-condition/queries/useQueryAlarmConditions';
import { AlarmType } from '~/types';
import { displayErrorMessage } from '~/utils/errorMessage';

import {
  AlarmFormData,
  alarmSchema,
} from '~/pages/AlarmManagement/helpers/alarmForm';
import { TypeCondition } from '~/pages/AlarmManagement/partials/AlarmInfoForm/TypeConditionSelect';

export const useCreateAlarm = (defaultValue: AlarmFormData) => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [openAlertChangeMode, setOpenAlertChangeMode] = useState(false);
  const {
    mutate: createAlarmCondition,
    isSuccess,
    isError,
    error,
  } = useCreateAlarmCondition();
  const { refetch } = useQueryAlarmConditions({
    enabled: false,
  });

  const methods = useForm<AlarmFormData>({
    defaultValues: defaultValue,
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
      min:
        data.info.typeCondition === TypeCondition.LESS_THAN
          ? undefined
          : parseFloat(data.info.min as string),
      max:
        data.info.typeCondition === TypeCondition.GREATER_THAN
          ? undefined
          : parseFloat(data.info.max as string),
    };
    createAlarmCondition(payload);
  };

  useEffect(() => {
    if (isSuccess) {
      handleCloseDialog();
      refetch();
      toast.success('Tạo cấu hình cảnh báo thành công.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(displayErrorMessage(error));
    }
  }, [isError, error]);

  return {
    open,
    activeStep,
    isAdvanced,
    setIsAdvanced,
    openAlertChangeMode,
    setOpenAlertChangeMode,
    methods,
    handleOpenDialog,
    handleCloseDialog,
    handleNext,
    handleBack,
    handleAgreeChangeMode,
    handleSubmit,
  };
};
