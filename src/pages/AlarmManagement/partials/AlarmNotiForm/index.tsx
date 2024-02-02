import { AlarmActionCheckbox } from '~/pages/AlarmManagement/partials/AlarmNotiForm/AlarmActionCheckbox';
import { UserMultiSelect } from '~/pages/AlarmManagement/partials/AlarmNotiForm/UserMultiSelect';

import { InputWithLabel } from '~/components';
import { Box } from '~/components/MuiComponents';

export interface IAlarmNotiFormProps {}

export function AlarmNotiForm() {
  return (
    <Box sx={{ width: '600px' }}>
      <InputWithLabel
        multiline
        label='Nội dung cảnh báo'
        maxRows={2}
        minRows={2}
        name='message'
      />
      <AlarmActionCheckbox />
      <UserMultiSelect />
    </Box>
  );
}
