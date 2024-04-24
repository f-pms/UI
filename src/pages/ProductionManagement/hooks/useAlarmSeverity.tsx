import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

import { AlarmSeverity } from '~/types';

export const useAlarmSeverity = (severity: AlarmSeverity) => {
  let icon = <ErrorOutlineOutlinedIcon sx={{ fontSize: '18px' }} />;
  let color = 'error';

  switch (severity) {
    case AlarmSeverity.LOW:
      icon = <NotificationImportantOutlinedIcon sx={{ fontSize: '18px' }} />;
      color = 'info';
      break;
    case AlarmSeverity.HIGH:
      icon = <ReportProblemOutlinedIcon sx={{ fontSize: '18px' }} />;
      color = 'warning';
      break;
    case AlarmSeverity.URGENT:
      break;
    default:
      break;
  }

  return { icon, color };
};
