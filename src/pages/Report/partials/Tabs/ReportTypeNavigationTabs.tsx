import { useState } from 'react';

import { Tab, tabsClasses, Typography } from '~/libs/mui';

import { REPORT_TYPE_LIST } from '~/pages/Report/mocks/reportTypeList';

import { a11yProps } from '~/components/CustomTabPanel';
import { Box, Tabs } from '~/components/MuiComponents';

export interface IReportTypeNavigationTabsProps {}

export function ReportTypeNavigationTabs() {
  const [value, setValue] = useState(0);
  // const [currentReportType, setCurrentReportType] = useState(
  //   REPORT_TYPE_LIST[0],
  // );

  const handleChange = (_: React.SyntheticEvent | null, newValue: number) => {
    setValue(newValue);
    // setCurrentReportType(REPORT_TYPE_LIST[newValue]);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        allowScrollButtonsMobile
        scrollButtons
        aria-label='scrollable force tabs example'
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { display: 'none' },
          },
        }}
        value={value}
        variant='scrollable'
        onChange={handleChange}
      >
        {REPORT_TYPE_LIST.map((tab) => (
          <Tab
            key={tab.id}
            label={<Typography variant='body2'>{tab.name}</Typography>}
            sx={{ textTransform: 'none' }}
            {...a11yProps(0)}
          />
        ))}
      </Tabs>
    </Box>
  );
}
