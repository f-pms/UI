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

import {
  DIAGRAMS,
  getBlueprintByTabValue,
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
  const [figuresCoordinateContext, setFiguresCoordinateContext] =
    useState<FiguresCoordinateContextType>();
  const blueprint = useMemo(() => getBlueprintByTabValue(value), [value]);
  const {
    data,
    isLoading,
    refetch: refetchBlueprint,
  } = useQueryBlueprintById(blueprint);
  const ref = useRef<HTMLDivElement>(null);

  const scrollIntoView = useCallback(() => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }, []);

  useEffect(() => {
    refetchBlueprint();
  }, [refetchBlueprint, value]);

  useEffect(() => {
    if (data != undefined) {
      setFiguresCoordinateContext(getUpdatedFiguresCoordinateContext(data));
    }
  }, [data]);

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
          {!isLoading && figuresCoordinateContext != undefined ? (
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
