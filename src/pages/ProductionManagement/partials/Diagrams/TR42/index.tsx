import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { useCurrentBlueprintContext } from '~/pages/ProductionManagement/context/BlueprintContext';
import { Figures } from '~/pages/ProductionManagement/helpers/diagrams';
import Tr42StaticDiagram from '~/pages/ProductionManagement/partials/Diagrams/TR42/Tr42StaticDiagram';

import './styles.css';

export function TR42Diagram() {
  const { sensorConfigurations } = useCurrentBlueprintContext();
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <svg
      data-name='Layer 9'
      id='Layer_9'
      style={{ width: '100%', height: '100%' }}
      viewBox='0 0 2872.8 1340.18'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Tr42StaticDiagram />
      <Figures
        figureValues={figureValues}
        figuresCoordinateList={sensorConfigurations}
      />
    </svg>
  );
}
