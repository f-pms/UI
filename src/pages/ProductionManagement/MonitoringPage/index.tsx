import { useMemo } from 'react';
import _ from 'lodash';

import { useMonitoringStore } from '~/stores/useMonitoringStore';

import FiguresCoordinateProvider from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import useBlueprint from '~/pages/ProductionManagement/hooks/useBlueprint';
import { useScrollToDiagram } from '~/pages/ProductionManagement/hooks/useScrollToDiagram';
import useWebSocket from '~/pages/ProductionManagement/hooks/useWebSocket';
import PageHeading from '~/pages/ProductionManagement/partials/PageHeading';
import { StationNavigationTabs } from '~/pages/ProductionManagement/partials/StationNavigationTabs';
import { StationTabPanel } from '~/pages/ProductionManagement/partials/StationTabPanel';

import { Box, CircularProgress, Stack } from '~/components/MuiComponents';

export interface IMonitoringPageProps {}

function MonitoringPage() {
  const {
    tabValue,
    setTabValue,
    tabInfo,
    figuresCoordinateList,
    isBlueprintReady,
  } = useBlueprint();

  const ws = useWebSocket(tabValue, tabInfo.channel);

  const { ref, scrollToDiagram } = useScrollToDiagram();

  const figureValues = useMonitoringStore((state) => state.figureValues);
  const isReady = useMemo(
    () =>
      isBlueprintReady &&
      !_.isEmpty(figuresCoordinateList) &&
      ws.isSubscribed(tabInfo.channel) &&
      figureValues != undefined,
    [
      isBlueprintReady,
      figuresCoordinateList,
      ws,
      tabInfo.channel,
      figureValues,
    ],
  );

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    scrollToDiagram();
  };

  return (
    <Stack sx={{ width: '100%', height: '100%' }}>
      <PageHeading scrollToDiagram={scrollToDiagram} />
      <Stack sx={{ flex: 1 }}>
        <StationNavigationTabs handleChange={handleChange} value={tabValue} />
        {isReady ? (
          <StationTabPanel ref={ref} value={tabValue} />
        ) : (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

export default function MonitorPageWithContext() {
  return (
    <FiguresCoordinateProvider>
      <MonitoringPage />
    </FiguresCoordinateProvider>
  );
}
