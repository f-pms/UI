import { Fragment, useEffect } from 'react';

import { useWebsocketStore } from '~/stores/useWebsocketStore';

import BlueprintsProvider from '~/pages/ProductionManagement/context/BlueprintContext';
import { useAlarmWebsocket } from '~/pages/ProductionManagement/hooks/useAlarmWebsocket';
import useBlueprints from '~/pages/ProductionManagement/hooks/useBlueprints';
import { useMonitoringWebsocket } from '~/pages/ProductionManagement/hooks/useMonitoringWebSocket';
import { useScrollToDiagram } from '~/pages/ProductionManagement/hooks/useScrollToDiagram';
import AlarmCarousel from '~/pages/ProductionManagement/partials/AlarmCarousel';
import PageHeading from '~/pages/ProductionManagement/partials/PageHeading';
import { StationNavigationTabs } from '~/pages/ProductionManagement/partials/StationNavigationTabs';
import { StationTabPanel } from '~/pages/ProductionManagement/partials/StationTabPanel';

import { ErrorOutlineOutlinedIcon } from '~/components/Icons';
import {
  Box,
  CircularProgress,
  Stack,
  Typography,
} from '~/components/MuiComponents';

function MonitoringPage() {
  const { tabInfo, tabValue, setTabValue, isBlueprintReady, isBlueprintError } =
    useBlueprints();

  // Use the useWebsocketStore hook to get WebSocket-related state and functions
  const { isConnected, unsubscribeAll } = useWebsocketStore();

  // Use the useMonitoringWebsocket hook to handle monitoring-related WebSocket messages
  useMonitoringWebsocket(tabInfo);

  // Use the useAlarmWebsocket hook to handle alarm-related WebSocket messages
  useAlarmWebsocket();

  // Use the useEffect hook to unsubscribe from all WebSocket topics when the component is unmounted
  useEffect(() => {
    return () => {
      if (isConnected()) {
        unsubscribeAll();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { ref, scrollToDiagram } = useScrollToDiagram();

  const handleChange = (_: React.SyntheticEvent | null, newValue: number) => {
    setTabValue(newValue);
    scrollToDiagram();
  };

  let TabPanelComponent = <StationTabPanel ref={ref} value={tabValue} />;
  if (isBlueprintError) {
    TabPanelComponent = (
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
        <ErrorOutlineOutlinedIcon color='error' fontSize='large' />
        <Typography marginY={2}>
          Có lỗi xảy ra khi tải bản vẽ, vui lòng thử lại sau!
        </Typography>
      </Box>
    );
  } else if (!isBlueprintReady) {
    TabPanelComponent = (
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
        <Typography marginY={2}>Đang tải bản vẽ</Typography>
      </Box>
    );
  }

  return (
    <Fragment>
      <AlarmCarousel />
      <Stack sx={{ width: '100%', height: '100%' }}>
        <PageHeading scrollToDiagram={scrollToDiagram} />
        <Stack sx={{ flex: 1 }}>
          <StationNavigationTabs handleChange={handleChange} value={tabValue} />
          {TabPanelComponent}
        </Stack>
      </Stack>
    </Fragment>
  );
}

export default function MonitorPageWithContext() {
  return (
    <BlueprintsProvider>
      <MonitoringPage />
    </BlueprintsProvider>
  );
}
