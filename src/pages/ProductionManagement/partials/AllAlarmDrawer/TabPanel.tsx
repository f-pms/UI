import { AlarmSeverity } from '~/types/alarmConfig';

import { MOCK_DATA_ALARMS } from '~/pages/ProductionManagement/helpers/alarmMockData';
import { ALARM_TABS } from '~/pages/ProductionManagement/helpers/alarmTabs';
import AlarmListItem from '~/pages/ProductionManagement/partials/AllAlarmDrawer/AlarmListItem';

import { CustomTabPanel } from '~/components/CustomTabPanel';
import { List, Stack, Typography } from '~/components/MuiComponents';

export interface ITabPanelsProps {
  tabValue: number;
}

export default function TabPanel({ tabValue }: ITabPanelsProps) {
  let alarms = MOCK_DATA_ALARMS;
  if (tabValue !== 0) {
    alarms = MOCK_DATA_ALARMS.filter(
      (alarm) =>
        alarm.severity === (ALARM_TABS[tabValue].value as AlarmSeverity),
    );
  }

  return alarms.length ? (
    <CustomTabPanel
      index={tabValue}
      style={{
        paddingBottom: '16px',
      }}
      value={tabValue}
    >
      <List dense={true}>
        {alarms.map((alarm) => (
          <AlarmListItem key={alarm.id} alarm={alarm} />
        ))}
      </List>
    </CustomTabPanel>
  ) : (
    <Stack alignItems='center' justifyContent='center' sx={{ py: 2 }}>
      <Typography variant='body2'> Hiện tại không có cảnh báo nào.</Typography>
    </Stack>
  );
}
