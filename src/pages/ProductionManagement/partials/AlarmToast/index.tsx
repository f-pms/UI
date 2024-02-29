import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

import { AlertColor } from '@mui/material';

import { AlarmHistory, AlarmSeverity } from '~/types/alarm';

import { Alert, AlertTitle, Box, Typography } from '~/components/MuiComponents';

export interface IAlarmToastProps {
  alarm: AlarmHistory;
}

export default function AlarmToast({ alarm }: IAlarmToastProps) {
  let severity;
  switch (alarm.alarmCondition.severity) {
    case AlarmSeverity.LOW: {
      severity = 'info';
      break;
    }
    case AlarmSeverity.HIGH: {
      severity = 'warning';
      break;
    }
    case AlarmSeverity.URGENT: {
      severity = 'error';
      break;
    }
    default: {
      severity = 'info';
      break;
    }
  }
  return (
    <Alert severity={severity as AlertColor} sx={{ minWidth: '380px' }}>
      <AlertTitle>
        <Typography sx={{ fontWeight: 'bold' }}>
          {`Main - ${alarm.alarmCondition.sensorConfiguration.address}`}
        </Typography>
      </AlertTitle>
      <Box>
        <Typography variant='body2'>
          {alarm.alarmCondition.actions.length
            ? alarm.alarmCondition.actions[0]?.message
            : ''}
        </Typography>
        <Typography variant='caption'>
          {format(new Date(alarm.triggeredAt), 'EEEE, dd/MM/yyyy HH:mm:ss', {
            locale: vi,
          })}
        </Typography>
      </Box>
    </Alert>
  );
}
