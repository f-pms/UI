import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { useCurrentBlueprintContext } from '~/pages/ProductionManagement/context/BlueprintContext';
import Tr72StaticDiagram from '~/pages/ProductionManagement/partials/Diagrams/TR72/Tr72StaticDiagram';
import { Figures } from '~/pages/ProductionManagement/partials/Figures';

import './styles.css';

export function TR72Diagram() {
  const { sensorConfigurations } = useCurrentBlueprintContext();
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <svg
      id='Layer_11'
      style={{ width: '100%', height: '100%' }}
      viewBox='0 0 2873.84 1312.21'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Tr72StaticDiagram />
      <Figures
        figureValues={figureValues}
        figuresCoordinateList={sensorConfigurations}
      />
    </svg>
  );
}
