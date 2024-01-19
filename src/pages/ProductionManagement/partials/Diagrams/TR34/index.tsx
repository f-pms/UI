import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { useCurrentBlueprintContext } from '~/pages/ProductionManagement/context/BlueprintContext';
import { Figures } from '~/pages/ProductionManagement/helpers/diagrams';
import Tr34StaticDiagram from '~/pages/ProductionManagement/partials/Diagrams/TR34/Tr34StaticDiagram';

import './styles.css';

export function TR34Diagram() {
  const { sensorConfigurations } = useCurrentBlueprintContext();
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <svg
      data-name='Layer 8'
      id='Layer_8'
      style={{ width: '100%', height: '100%' }}
      viewBox='0 0 2872.8 1340.18'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Tr34StaticDiagram />
      <Figures
        figureValues={figureValues}
        figuresCoordinateList={sensorConfigurations}
      />
    </svg>
  );
}
