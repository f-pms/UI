import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { useCurrentBlueprintContext } from '~/pages/ProductionManagement/context/BlueprintContext';
import { Figures } from '~/pages/ProductionManagement/helpers/diagrams';
import Tr33StaticDiagram from '~/pages/ProductionManagement/partials/Diagrams/TR33/Tr33StaticDiagram';

import './styles.css';

export function TR33Diagram() {
  const { sensorConfigurations } = useCurrentBlueprintContext();
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <svg
      data-name='Layer 7'
      id='Layer_7'
      style={{ width: '100%', height: '100%' }}
      viewBox='0 0 2872.8 1340.18'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Tr33StaticDiagram />
      <Figures
        figureValues={figureValues}
        figuresCoordinateList={sensorConfigurations}
      />
    </svg>
  );
}
