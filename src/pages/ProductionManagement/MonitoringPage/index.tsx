import { Fragment, useEffect, useRef } from 'react';

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
  const { tabValue, setTabValue, tabInfo, isBlueprintReady, isBlueprintError } =
    useBlueprints();
  const channelRef = useRef<string>('');

  const { changeChannel, isConnected } = useMonitoringWebsocket();
  useAlarmWebsocket();

  const { ref, scrollToDiagram } = useScrollToDiagram();

  const handleChange = (_: React.SyntheticEvent | null, newValue: number) => {
    setTabValue(newValue);
    scrollToDiagram();
  };

  useEffect(() => {
    if (!tabInfo.channel || !isConnected()) return;
    changeChannel(channelRef.current, tabInfo.channel);
    channelRef.current = tabInfo.channel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected(), tabInfo.channel]);

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
