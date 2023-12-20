import * as React from 'react';

import { tabsClasses } from '~/libs/mui';

import { DIAGRAMS } from '~/pages/ProductionManagement/helpers/diagrams';

import { a11yProps } from '~/components/CustomTabPanel';
import { Tab, Tabs } from '~/components/MuiComponents';

export interface IStationNavigationTabsProps {
  value: number;
  handleChange: (_: React.SyntheticEvent, newValue: number) => void;
}

export function StationNavigationTabs(props: IStationNavigationTabsProps) {
  const { value, handleChange } = props;
  return (
    <Tabs
      allowScrollButtonsMobile
      scrollButtons
      aria-label='scrollable force tabs example'
      sx={{
        [`& .${tabsClasses.scrollButtons}`]: {
          '&.Mui-disabled': { opacity: 0.3 },
        },
      }}
      value={value}
      variant='scrollable'
      onChange={handleChange}
    >
      {DIAGRAMS.map((tab) => (
        <Tab
          key={tab.value}
          label={tab.label}
          sx={{ textTransform: 'none' }}
          {...a11yProps(0)}
        />
      ))}
    </Tabs>
  );
}
