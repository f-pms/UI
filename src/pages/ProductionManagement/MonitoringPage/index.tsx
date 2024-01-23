import { useMemo } from 'react';

import { useMonitoringStore } from '~/stores/useMonitoringStore';

import BlueprintsProvider from '~/pages/ProductionManagement/context/BlueprintContext';
import useBlueprints from '~/pages/ProductionManagement/hooks/useBlueprints';
import useMonitoringWebSocket from '~/pages/ProductionManagement/hooks/useMonitoringWebSocket';
import { useScrollToDiagram } from '~/pages/ProductionManagement/hooks/useScrollToDiagram';
import AlarmCarousel from '~/pages/ProductionManagement/partials/AlarmCarousel';
import PageHeading from '~/pages/ProductionManagement/partials/PageHeading';
import { StationNavigationTabs } from '~/pages/ProductionManagement/partials/StationNavigationTabs';
import { StationTabPanel } from '~/pages/ProductionManagement/partials/StationTabPanel';

import {
  Box,
  CircularProgress,
  Stack,
  Typography,
} from '~/components/MuiComponents';

function MonitoringPage() {
  const { tabValue, setTabValue, tabInfo, isBlueprintReady } = useBlueprints();
  const { isWebsocketReady } = useMonitoringWebSocket(
    tabValue,
    tabInfo.channel,
  );
  const { ref, scrollToDiagram } = useScrollToDiagram();

  const figureValues = useMonitoringStore((state) => state.figureValues);
  const loadingMessage = useMemo(() => {
    if (!isBlueprintReady) return 'Đang tải bản vẽ ...';
    if (!isWebsocketReady) return 'Đang kết nối tới PLC ...';
    return 'Getting things ready...';
  }, [isBlueprintReady, isWebsocketReady]);
  const isReady = useMemo(
    () => isBlueprintReady && isWebsocketReady && figureValues,
    [isBlueprintReady, isWebsocketReady, figureValues],
  );

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    scrollToDiagram();
  };

  return (
    <>
      <AlarmCarousel />
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
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <CircularProgress />
              <Typography marginY={2}>{loadingMessage}</Typography>
            </Box>
          )}
        </Stack>
      </Stack>
    </>
  );
}

export default function MonitorPageWithContext() {
  return (
    <BlueprintsProvider>
      <MonitoringPage />
    </BlueprintsProvider>
  );
}
