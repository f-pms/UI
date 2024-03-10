import { AlarmSeverity, Color } from '~/types';

import { CircleIcon } from '~/components/Icons';

export interface ISeverityIconProps {
  severity: AlarmSeverity;
}

export function SeverityCell({ severity }: ISeverityIconProps) {
  let color: Color;
  switch (severity) {
    case AlarmSeverity.URGENT:
      color = 'error';
      break;
    case AlarmSeverity.HIGH:
      color = 'warning';
      break;
    case AlarmSeverity.LOW:
      color = 'info';
      break;
    default:
      color = 'error';
      break;
  }
  return <CircleIcon color={color} sx={{ fontSize: '8px' }} />;
}
