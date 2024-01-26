import { Fragment, useState } from 'react';

import BlueprintsProvider from '~/pages/ProductionManagement/context/BlueprintContext';
import useBlueprints from '~/pages/ProductionManagement/hooks/useBlueprints';
import useMonitoringWebSocket from '~/pages/ProductionManagement/hooks/useMonitoringWebSocket';
import { useScrollToDiagram } from '~/pages/ProductionManagement/hooks/useScrollToDiagram';
import AlarmCarousel from '~/pages/ProductionManagement/partials/AlarmCarousel';
import UpdateFigureInfoForm from '~/pages/ProductionManagement/partials/Diagrams/partials/UpdateFigureInfoForm';
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
  useMonitoringWebSocket(tabValue, tabInfo.channel);
  const { ref, scrollToDiagram } = useScrollToDiagram();

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    scrollToDiagram();
  };

  const [updateFigureInfoFormOpen, setupdateFigureInfoFormOpen] =
    useState<boolean>(true);

  return (
    <Fragment>
      <AlarmCarousel />
      <Stack sx={{ width: '100%', height: '100%' }}>
        <UpdateFigureInfoForm
          handleClose={() => setupdateFigureInfoFormOpen(false)}
          open={updateFigureInfoFormOpen}
        />
        <PageHeading scrollToDiagram={scrollToDiagram} />
        <Stack sx={{ flex: 1 }}>
          <StationNavigationTabs handleChange={handleChange} value={tabValue} />
          {isBlueprintError ? (
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
          ) : !isBlueprintReady ? (
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
          ) : (
            <StationTabPanel ref={ref} value={tabValue} />
          )}
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
