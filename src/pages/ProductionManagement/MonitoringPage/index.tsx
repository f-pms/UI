import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import _ from 'lodash';

import { useQueryBlueprintById } from '~/services/blueprint/queries/useQueryBlueprintById';
import { useMonitoringStore } from '~/stores/useMonitoringStore';
import { useWebSocketStore } from '~/stores/useWebSocketStore';

import FiguresCoordinateProvider, {
  FiguresCoordinateContext,
} from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import {
  DIAGRAMS,
  getTabItemByValue,
} from '~/pages/ProductionManagement/helpers/diagrams';
import PageHeading from '~/pages/ProductionManagement/partials/PageHeading';
import { StationNavigationTabs } from '~/pages/ProductionManagement/partials/StationNavigationTabs';
import { StationTabPanel } from '~/pages/ProductionManagement/partials/StationTabPanel';

import { Box, CircularProgress, Stack } from '~/components/MuiComponents';

export interface IMonitoringPageProps {}

function MonitoringPage() {
  const [value, setValue] = useState(DIAGRAMS[0].value);
  const tabInfo = useMemo(() => getTabItemByValue(value), [value]);
  const { figuresCoordinate, updateContextByBlueprint } = useContext(
    FiguresCoordinateContext,
  );

  const {
    data,
    isLoading: isFetchingBlueprint,
    refetch: refetchBlueprint,
  } = useQueryBlueprintById(tabInfo.blueprint);

  useEffect(() => {
    refetchBlueprint();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    if (data != undefined) {
      updateContextByBlueprint(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const { isConnected: isWebsocketConnected, ...ws } = useWebSocketStore(
    (state) => state,
  );

  useEffect(() => {
    if (isWebsocketConnected) {
      ws.subscribeOnly(tabInfo.channel);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWebsocketConnected, value]);

  useEffect(() => {
    ws.connect();

    return () => {
      ws.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const figureValues = useMonitoringStore((state) => state.figureValues);
  const isReady = useMemo(
    () =>
      !isFetchingBlueprint &&
      !_.isEmpty(figuresCoordinate) &&
      ws.isSubscribed(tabInfo.channel) &&
      figureValues != undefined,
    [isFetchingBlueprint, figuresCoordinate, ws, tabInfo.channel, figureValues],
  );

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
        {isReady ? (
          <StationTabPanel ref={ref} value={value} />
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
