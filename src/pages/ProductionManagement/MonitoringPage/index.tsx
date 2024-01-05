import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  DisplayCoordinate,
  IBlueprint,
  useQueryBlueprintById,
} from '~/services/blueprint/queries/useQueryBlueprintById';
import { useMonitoringStore } from '~/stores/useMonitoringStore';
import { useWebSocketStore } from '~/stores/useWebSocketStore';

import {
  DIAGRAMS,
  getTabItemByValue,
} from '~/pages/ProductionManagement/helpers/diagrams';
import PageHeading from '~/pages/ProductionManagement/partials/PageHeading';
import { StationNavigationTabs } from '~/pages/ProductionManagement/partials/StationNavigationTabs';
import { StationTabPanel } from '~/pages/ProductionManagement/partials/StationTabPanel';

import { Box, CircularProgress, Stack } from '~/components/MuiComponents';

export type FiguresCoordinateContextType = {
  [key: string]: FiguresCoordinateType;
};

export type FiguresCoordinateType = {
  [key: string]: DisplayCoordinate;
};

export const FiguresCoordinateContext = createContext<
  FiguresCoordinateContextType | undefined
>(undefined);

export const getUpdatedFiguresCoordinateContext = (
  blueprint: IBlueprint,
): FiguresCoordinateContextType => {
  const newContext: FiguresCoordinateContextType = {};
  const groups = blueprint.sensorConfigurations;

  for (const group of groups) {
    const figuresCoordinate: { [key: string]: DisplayCoordinate } = {};
    for (const figure of group.figures) {
      figuresCoordinate[figure.id] = figure.displayCoordinate;
    }
    newContext[group.groupId] = figuresCoordinate;
  }

  return newContext;
};

export interface IMonitoringPageProps {}

export default function MonitoringPage() {
  const [value, setValue] = useState(DIAGRAMS[0].value);
  const tabInfo = useMemo(() => getTabItemByValue(value), [value]);

  const [figuresCoordinateContext, setFiguresCoordinateContext] =
    useState<FiguresCoordinateContextType>();
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
      setFiguresCoordinateContext(getUpdatedFiguresCoordinateContext(data));
    }
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
  const isReady = useMemo(() => {
    return (
      !isFetchingBlueprint &&
      figuresCoordinateContext != undefined &&
      ws.isSubscribed(tabInfo.channel) &&
      figureValues != undefined
    );
  }, [
    figuresCoordinateContext,
    isFetchingBlueprint,
    tabInfo.channel,
    ws,
    figureValues,
  ]);

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
    <FiguresCoordinateContext.Provider value={figuresCoordinateContext}>
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
    </FiguresCoordinateContext.Provider>
  );
}
