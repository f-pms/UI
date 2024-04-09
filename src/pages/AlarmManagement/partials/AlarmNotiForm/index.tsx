import { ActionMessageInput } from '~/pages/AlarmManagement/partials/AlarmNotiForm/ActionMessageInput';
import { NotiMethodSelect } from '~/pages/AlarmManagement/partials/AlarmNotiForm/NotiMethodSelect';

import { Box } from '~/components/MuiComponents';

export interface IAlarmNotiFormProps {}

export function AlarmNotiForm() {
  return (
    <Box sx={{ width: '600px' }}>
      <ActionMessageInput />
      <NotiMethodSelect />
    </Box>
  );
}
