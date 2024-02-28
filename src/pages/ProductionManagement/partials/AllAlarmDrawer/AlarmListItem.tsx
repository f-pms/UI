import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { useSnackbar } from 'notistack';

import { ColorScheme } from '~/constants';
import { AlarmSeverity } from '~/types/alarm';

import { Alarm } from '~/pages/ProductionManagement/helpers/alarmMockData';
import AlarmToast from '~/pages/ProductionManagement/partials/AlarmToast';

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
  alarm: Alarm;
}

export default function AlarmListItem({ alarm }: IAlarmListItemProps) {
  const { enqueueSnackbar } = useSnackbar();

  let icon;
  let color;
  switch (alarm.severity) {
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

  const handleClick = () => {
    enqueueSnackbar(<AlarmToast alarm={alarm} />, {
      preventDuplicate: false,
    });
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemAvatar>
          <SoftChip color={color as ColorScheme} icon={icon} />
        </ListItemAvatar>
        <ListItemText
          primary={alarm.name}
          secondary={
            <Box>
              <Typography variant='body2'>{alarm.description}</Typography>
              <Typography variant='caption'>
                {format(alarm.time, 'EEEE, dd/MM/yyyy HH:mm:ss', {
                  locale: vi,
                })}
              </Typography>
            </Box>
          }
        />
      </ListItemButton>
      <Divider variant='fullWidth' />
    </>
  );
}
