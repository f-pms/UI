import * as React from 'react';
import { Control, UseFormSetValue } from 'react-hook-form';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { AlarmStep } from '~/pages/AlarmManagement/partials/CreateAlarmDialog';

import { Box, Button, Typography } from '~/components/MuiComponents';

export interface IAlarmStepperProps {
  control: Control<AlarmFormData>;
  setValue: UseFormSetValue<AlarmFormData>;
  setActiveStep: (activeStep: number) => void;
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  steps: AlarmStep[];
}

export default function AlarmStepper({
  setActiveStep,
  activeStep,
  steps,
}: IAlarmStepperProps) {
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
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
    </Box>
  );
}
