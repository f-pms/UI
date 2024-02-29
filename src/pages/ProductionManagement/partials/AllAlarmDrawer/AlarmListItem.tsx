import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

import { ColorScheme } from '~/constants';
import { AlarmHistory, AlarmSeverity } from '~/types/alarm';

import { SoftChip } from '~/components';
import {
  ErrorOutlineOutlinedIcon,
  NotificationImportantOutlinedIcon,
  ReportProblemOutlinedIcon,
} from '~/components/Icons';
import {
  Box,
  Divider,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '~/components/MuiComponents';

export interface IAlarmListItemProps {
  alarm: AlarmHistory;
}

export default function AlarmListItem({ alarm }: IAlarmListItemProps) {
  let icon;
  let color;
  switch (alarm.alarmCondition.severity) {
    case AlarmSeverity.LOW:
      icon = <NotificationImportantOutlinedIcon sx={{ fontSize: '18px' }} />;
      color = 'info';
      break;
    case AlarmSeverity.HIGH:
      icon = <ReportProblemOutlinedIcon sx={{ fontSize: '18px' }} />;
      color = 'warning';
      break;
    case AlarmSeverity.URGENT:
      icon = <ErrorOutlineOutlinedIcon sx={{ fontSize: '18px' }} />;
      color = 'error';
      break;
    default:
      break;
  }

  return (
    <>
      <ListItemButton>
        <ListItemAvatar>
          <SoftChip color={color as ColorScheme} icon={icon} />
        </ListItemAvatar>
        <ListItemText
          primary={'Main - %DB100:0.0:BOOL'}
          secondary={
            <Box>
              <Typography variant='body2'>
                {alarm.alarmCondition.actions.length
                  ? alarm.alarmCondition.actions[0]?.message
                  : ''}
              </Typography>
              <Typography variant='caption'>
                {format(
                  new Date(alarm.triggeredAt),
                  'EEEE, dd/MM/yyyy HH:mm:ss',
                  {
                    locale: vi,
                  },
                )}
              </Typography>
            </Box>
          }
        />
      </ListItemButton>
      <Divider variant='fullWidth' />
    </>
  );
}
