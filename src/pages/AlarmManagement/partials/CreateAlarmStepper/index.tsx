import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  FormControlLabel,
  Stack,
  Switch,
  Typography,
} from '@mui/material';

import { AlarmInfoForm } from '~/pages/AlarmManagement/partials/AlarmInfoForm';
import { AlarmNotiForm } from '~/pages/AlarmManagement/partials/AlarmNotiForm';
import { FinishStep } from '~/pages/AlarmManagement/partials/CreateAlarmStepper/FinishStep';
import { AlarmStep } from '~/pages/AlarmManagement/partials/Dialogs/CreateAlarmWithBaseDialog';

export interface ICreateAlarmStepperProps {
  activeStep: number;
  isAdvanced: boolean;
  handleCloseDialog: () => void;
  handleNext: (step: 'info' | 'noti') => void;
  handleBack: () => void;
  handleSubmit: () => void;
  setOpenAlertChangeMode: (value: boolean) => void;
}

export function CreateAlarmStepper(props: ICreateAlarmStepperProps) {
  const {
    activeStep,
    isAdvanced,
    handleCloseDialog,
    handleNext,
    handleBack,
    handleSubmit,
    setOpenAlertChangeMode,
  } = props;
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
  return (
    <>
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
            label={<Typography variant='body2'>Thiết lập nâng cao</Typography>}
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
    </>
  );
}
