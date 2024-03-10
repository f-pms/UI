import { AlarmType } from '~/types';

import { Typography } from '~/components/MuiComponents';

export interface IAlarmTypeCellProps {
  type: AlarmType;
}

export default function TypeCell({ type }: IAlarmTypeCellProps) {
  let text: string;
  switch (type) {
    case AlarmType.CUSTOM:
      text = 'Nâng cao';
      break;
    case AlarmType.PREDEFINED:
      text = 'Cơ bản';
      break;
    default:
      text = '';
      break;
  }
  return <Typography variant='body2'>{text}</Typography>;
}
