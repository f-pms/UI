import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { useCurrentBlueprintContext } from '~/pages/ProductionManagement/context/BlueprintContext';
import Tr30StaticDiagram from '~/pages/ProductionManagement/partials/Diagrams/TR30/Tr30StaticDiagram';
import { Figures } from '~/pages/ProductionManagement/partials/Figures';

import './styles.css';

export function TR30Diagram() {
  const { sensorConfigurations } = useCurrentBlueprintContext();
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <svg
      id='Layer_4'
      style={{ width: '100%', height: '100%' }}
      viewBox='0 0 2873.84 1312.21'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Tr30StaticDiagram />
      <Figures
        figureValues={figureValues}
        figuresCoordinateList={sensorConfigurations}
      />
    </svg>
  );
}
