import { Control, UseFormSetValue } from '~/libs/react-hook-form';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { CheckIntervalInput } from '~/pages/AlarmManagement/partials/AlarmInfoForm/CheckIntervalInput';
import { ConditionInput } from '~/pages/AlarmManagement/partials/AlarmInfoForm/ConditionInput';
import { SensorAutoComplete } from '~/pages/AlarmManagement/partials/AlarmInfoForm/SensorAutocomplete';
import { SeverityTabs } from '~/pages/AlarmManagement/partials/AlarmInfoForm/SeverityTabs';
import { StationAutoComplete } from '~/pages/AlarmManagement/partials/AlarmInfoForm/StationAutoComplete';
import { TimeDelayInput } from '~/pages/AlarmManagement/partials/AlarmInfoForm/TimeDelayInput';

import { Box, Stack } from '~/components/MuiComponents';

export interface IAlarmFormProps {
  control: Control<AlarmFormData>;
  setValue: UseFormSetValue<AlarmFormData>;
  isAdvanced: boolean;
}

export function AlarmInfoForm(props: IAlarmFormProps) {
  const { control, setValue, isAdvanced } = props;

  return (
    <Box sx={{ width: '600px' }}>
      <SeverityTabs setValue={setValue} />
      <Stack
        alignItems='center'
        direction='row'
        justifyContent='space-between'
        spacing={4}
        sx={{ mt: 4 }}
      >
        <StationAutoComplete control={control} />
        <SensorAutoComplete control={control} />
      </Stack>
      <Stack
        alignItems='center'
        direction='row'
        justifyContent='space-between'
        spacing={4}
        sx={{ mt: 2 }}
      >
        <CheckIntervalInput control={control} />
        <TimeDelayInput control={control} />
      </Stack>
      {isAdvanced && (
        <Box sx={{ mt: 4 }}>
          <ConditionInput control={control} setValue={setValue} />
        </Box>
      )}
    </Box>
  );
}
