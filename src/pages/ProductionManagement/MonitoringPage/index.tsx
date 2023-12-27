import { useCallback, useEffect, useRef, useState } from 'react';

import PageHeading from '~/pages/ProductionManagement/partials/PageHeading';
import { StationNavigationTabs } from '~/pages/ProductionManagement/partials/StationNavigationTabs';
import { StationTabPanel } from '~/pages/ProductionManagement/partials/StationTabPanel';

import { Divider, Stack } from '~/components/MuiComponents';

export interface IMonitoringPageProps {}

export default function MonitoringPage() {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const scrollIntoView = useCallback(() => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }, []);

  useEffect(() => {
    scrollIntoView();
  }, [scrollIntoView]);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    scrollIntoView();
  };

  return (
    <Stack sx={{ width: '100%', height: '100%' }}>
      <PageHeading scrollIntoView={scrollIntoView} />
      <Stack sx={{ flex: 1 }}>
        <StationNavigationTabs handleChange={handleChange} value={value} />
        <StationTabPanel ref={ref} value={value} />
      </Stack>
    </Stack>
  );
}
