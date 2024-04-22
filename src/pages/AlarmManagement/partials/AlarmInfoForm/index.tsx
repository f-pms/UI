import { CheckIntervalInput } from '~/pages/AlarmManagement/partials/AlarmInfoForm/CheckIntervalInput';
import { ConditionInput } from '~/pages/AlarmManagement/partials/AlarmInfoForm/ConditionInput';
import { SensorAutoComplete } from '~/pages/AlarmManagement/partials/AlarmInfoForm/SensorAutocomplete';
import { SeverityTabs } from '~/pages/AlarmManagement/partials/AlarmInfoForm/SeverityTabs';
import { StationAutoComplete } from '~/pages/AlarmManagement/partials/AlarmInfoForm/StationAutoComplete';
import { TimeDelayInput } from '~/pages/AlarmManagement/partials/AlarmInfoForm/TimeDelayInput';

import { Box, Stack } from '~/components/MuiComponents';

export interface IAlarmFormProps {
  isAdvanced: boolean;
}

export function AlarmInfoForm(props: IAlarmFormProps) {
  const { isAdvanced } = props;

  return (
    <Box sx={{ width: '600px' }}>
      <SeverityTabs />
      <Stack
        alignItems='flex-start'
        direction='row'
        justifyContent='space-between'
        spacing={4}
        sx={{ mt: 4 }}
      >
        <StationAutoComplete />
        <SensorAutoComplete />
      </Stack>
      {isAdvanced && (
        <Box sx={{ mt: 2 }}>
          <ConditionInput />
        </Box>
      )}
      <Stack
        alignItems='flex-start'
        direction='row'
        justifyContent='space-between'
        spacing={4}
        sx={{ mt: 2 }}
      >
        <CheckIntervalInput />
        <TimeDelayInput />
      </Stack>
    </Box>
  );
}
