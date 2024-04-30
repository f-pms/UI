import { useEffect, useMemo } from 'react';
import { FormProvider } from 'react-hook-form';

import { Alarm, AlarmType } from '~/types';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { getTypeCondition } from '~/pages/AlarmManagement/helpers/getTypeCondition';
import { useCreateAlarm } from '~/pages/AlarmManagement/hooks/useCreateAlarm';
import { CreateAlarmStepper } from '~/pages/AlarmManagement/partials/CreateAlarmStepper';
import { AlertChangeModeDialog } from '~/pages/AlarmManagement/partials/Dialogs/AlertChangeModeDialog';

import { AddCircleOutlineOutlinedIcon } from '~/components/Icons';
import {
  Dialog,
  ListItemIcon,
  ListItemText,
  MenuItem,
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
        min: alarm?.min ?? undefined,
        max: alarm?.max ?? undefined,
        enabled: alarm.enabled,
        typeCondition: getTypeCondition(alarm.min, alarm.max),
      },
      noti: {
        message: alarm.actions[0]?.message,
        actions: alarm.actions,
      },
      isUpdate: false,
    };
  }, [alarm]);
  const {
    open,
    activeStep,
    isAdvanced,
    setIsAdvanced,
    openAlertChangeMode,
    methods,
    handleOpenDialog,
    handleCloseDialog: handleClose,
    handleNext,
    handleBack,
    handleAgreeChangeMode,
    handleSubmit: submit,
    setOpenAlertChangeMode,
    isPendingCreate,
  } = useCreateAlarm(defaultAlarmFormData);

  const handleCloseDialog = () => {
    handleClose();
    closeMenu();
  };

  const handleSubmit = () => {
    submit();
    closeMenu();
  };

  useEffect(() => {
    if (alarm.type === AlarmType.CUSTOM) {
      setIsAdvanced(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alarm]);

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
        maxWidth='lg'
        open={open}
        onClose={handleCloseDialog}
      >
        <CreateAlarmStepper
          activeStep={activeStep}
          handleBack={handleBack}
          handleCloseDialog={handleCloseDialog}
          handleNext={handleNext}
          handleSubmit={handleSubmit}
          isAdvanced={isAdvanced}
          isPendingCreate={isPendingCreate}
          setOpenAlertChangeMode={setOpenAlertChangeMode}
        />
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
