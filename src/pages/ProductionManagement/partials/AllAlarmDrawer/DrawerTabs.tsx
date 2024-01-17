import * as React from 'react';

import { ALARM_TABS } from '~/pages/ProductionManagement/helpers/alarmTabs';

import { a11yProps } from '~/components/CustomTabPanel';
import { Box, Tab, Tabs, Typography } from '~/components/MuiComponents';

export interface IDrawerTabsProps {
  tabValue: number;
  handleChange: (_: React.SyntheticEvent, newValue: number) => void;
}

export default function DrawerTabs(props: IDrawerTabsProps) {
  const { tabValue, handleChange } = props;
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        allowScrollButtonsMobile
        aria-label='scrollable force tabs example'
        value={tabValue}
        onChange={handleChange}
      >
        {ALARM_TABS.map((tab) => (
          <Tab
            key={tab.value}
            label={<Typography variant='body2'>{tab.label}</Typography>}
            sx={{ textTransform: 'none' }}
            {...a11yProps(0)}
          />
        ))}
      </Tabs>
    </Box>
  );
}
