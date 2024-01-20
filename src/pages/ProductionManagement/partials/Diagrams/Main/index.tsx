import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { useCurrentBlueprintContext } from '~/pages/ProductionManagement/context/BlueprintContext';
import { Figures } from '~/pages/ProductionManagement/helpers/diagrams';
import MainStaticDiagram from '~/pages/ProductionManagement/partials/Diagrams/Main/MainStaticDiagram';

import './styles.css';

export type Configuration = {
  groupId: string;
  figures: Figure[];
};

export type Figure = {
  id: string;
  address: string;
  displayCoordinate: DisplayCoordinate;
};

export type DisplayCoordinate = {
  x: number;
  y: number;
};

export function MainDiagram() {
  const { sensorConfigurations } = useCurrentBlueprintContext();
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <svg
      id='Layer_1'
      style={{ width: '100%', height: '100%' }}
      viewBox='0 0 2871.34 1349'
      xmlns='http://www.w3.org/2000/svg'
    >
      <MainStaticDiagram />
      <Figures
        figureValues={figureValues}
        figuresCoordinateList={sensorConfigurations}
      />
    </svg>
  );
}
