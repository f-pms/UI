import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { tabsClasses } from '@mui/material';

import { SHIFT_NAVIGATION_OPTIONS } from '~/pages/Report/helpers/shiftOption';

import { a11yProps } from '~/components/CustomTabPanel';
import { Box, Tab, Tabs, Typography } from '~/components/MuiComponents';

export interface IShiftNavigationTabsProps {}

export function ShiftNavigationTabs() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (_: React.SyntheticEvent | null, newValue: number) => {
    setValue(newValue);
    navigate({
      search: `?shift=${SHIFT_NAVIGATION_OPTIONS[newValue].value}`,
    });
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
        {SHIFT_NAVIGATION_OPTIONS.map((tab) => (
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
