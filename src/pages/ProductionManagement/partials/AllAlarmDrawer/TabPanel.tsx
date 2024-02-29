import { useMemo } from 'react';

import { useQueryAlarmHistories } from '~/services/alarm-history/queries/useQueryAlarmHistories';
import { AlarmHistoryStatus, AlarmSeverity } from '~/types/alarm';

import { ALARM_TABS } from '~/pages/ProductionManagement/helpers/alarmTabs';
import AlarmListItem from '~/pages/ProductionManagement/partials/AllAlarmDrawer/AlarmListItem';

import { CustomTabPanel } from '~/components/CustomTabPanel';
import { List, Stack, Typography } from '~/components/MuiComponents';

export interface ITabPanelsProps {
  tabValue: number;
}

export default function TabPanel({ tabValue }: ITabPanelsProps) {
  const { data: sentAlarms } = useQueryAlarmHistories({
    status: AlarmHistoryStatus.SENT,
  });

  const alarms = useMemo(() => {
    if (tabValue === 0) return sentAlarms;
    return sentAlarms?.filter(
      (alarm) =>
        alarm.condition.severity ===
        (ALARM_TABS[tabValue].value as AlarmSeverity),
    );
  }, [sentAlarms, tabValue]);

  return alarms?.length ? (
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
