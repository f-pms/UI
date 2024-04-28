import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { useCurrentBlueprintContext } from '~/pages/ProductionManagement/context/BlueprintContext';
import Tr11StaticDiagram from '~/pages/ProductionManagement/partials/Diagrams/TR11/Tr11StaticDiagram';
import { Figures } from '~/pages/ProductionManagement/partials/Figures';

import './styles.css';

export function TR11Diagram() {
  const { sensorConfigurations } = useCurrentBlueprintContext();
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <svg
      id='Layer_2'
      style={{ width: '100%', height: '100%' }}
      viewBox='0 0 2871.87 1345.36'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Tr11StaticDiagram />
      <Figures
        figureValues={figureValues}
        figuresCoordinateList={sensorConfigurations}
      />
    </svg>
  );
}
