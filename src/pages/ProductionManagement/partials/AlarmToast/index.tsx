import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

import { AlertColor } from '@mui/material';

import { AlarmSeverity } from '~/types/alarm';

import { Alarm } from '~/pages/ProductionManagement/helpers/alarmMockData';

import { Alert, AlertTitle, Box, Typography } from '~/components/MuiComponents';

export interface IAlarmToastProps {
  alarm: Alarm;
}

export default function AlarmToast({ alarm }: IAlarmToastProps) {
  let severity;
  switch (alarm.severity) {
    case AlarmSeverity.Warning: {
      severity = 'info';
      break;
    }
    case AlarmSeverity.Important: {
      severity = 'warning';
      break;
    }
    case AlarmSeverity.Critical: {
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
        <Typography sx={{ fontWeight: 'bold' }}>{alarm.name}</Typography>
      </AlertTitle>
      <Box>
        <Typography variant='body2'>{alarm.description}</Typography>
        <Typography variant='caption'>
          {format(alarm.time, 'EEEE, dd/MM/yyyy HH:mm:ss', {
            locale: vi,
          })}
        </Typography>
      </Box>
    </Alert>
  );
}
