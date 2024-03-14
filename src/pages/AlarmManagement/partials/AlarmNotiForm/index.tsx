import { FieldError, useFormContext } from 'react-hook-form';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import ActionMessage from '~/pages/AlarmManagement/partials/AlarmNotiForm/ActionMessage';
import { AddNotiMethod } from '~/pages/AlarmManagement/partials/AlarmNotiForm/AddNotiMethod';

import { Box } from '~/components/MuiComponents';

export interface IAlarmNotiFormProps {}

export function AlarmNotiForm() {
  return (
    <Box sx={{ width: '600px' }}>
      <ActionMessage />
      <AddNotiMethod />
    </Box>
  );
}
