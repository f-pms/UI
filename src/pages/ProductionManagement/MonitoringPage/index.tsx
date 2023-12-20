import * as React from 'react';

import { StationNavigationTabs } from '~/pages/ProductionManagement/partials/StationNavigationTabs';
import { StationTabPanel } from '~/pages/ProductionManagement/partials/StationTabPanel';

import { Stack } from '~/components/MuiComponents';

export interface IMonitoringPageProps {}

export default function MonitoringPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ flex: 1 }}>
      <StationNavigationTabs handleChange={handleChange} value={value} />
      <StationTabPanel value={value} />
    </Stack>
  );
}
