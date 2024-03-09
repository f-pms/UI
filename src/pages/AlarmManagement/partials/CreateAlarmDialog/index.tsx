import { FormProvider } from 'react-hook-form';

import { defaultAlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { useCreateAlarm } from '~/pages/AlarmManagement/hooks/useCreateAlarm';
import { AlertChangeModeDialog } from '~/pages/AlarmManagement/partials/AlertChangeModeDialog';
import { CreateAlarmStepper } from '~/pages/AlarmManagement/partials/CreateAlarmStepper';

import { SettingsInputComponentOutlinedIcon } from '~/components/Icons';
import { Button, Dialog } from '~/components/MuiComponents';

export type AlarmStep = {
  label: string;
  content: React.ReactNode;
  description: string;
  step?: 'info' | 'noti';
};

export function CreateAlarmDialog() {
  const {
    open,
    activeStep,
    isAdvanced,
    openAlertChangeMode,
    methods,
    handleOpenDialog,
    handleCloseDialog,
    handleNext,
    handleBack,
    handleAgreeChangeMode,
    handleSubmit,
    setOpenAlertChangeMode,
  } = useCreateAlarm(defaultAlarmFormData);

  return (
    <FormProvider {...methods}>
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
