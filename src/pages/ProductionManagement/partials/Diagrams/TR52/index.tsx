import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { useCurrentBlueprintContext } from '~/pages/ProductionManagement/context/BlueprintContext';
import { Figures } from '~/pages/ProductionManagement/helpers/diagrams';
import Tr52StaticDiagram from '~/pages/ProductionManagement/partials/Diagrams/TR52/Tr52StaticDiagram';

import './styles.css';

export function TR52Diagram() {
  const { sensorConfigurations } = useCurrentBlueprintContext();
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <svg
      data-name='Layer 1'
      id='Layer_1'
      style={{ width: '100%', height: '100%' }}
      viewBox='0 0 2873.84 1312.21'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Tr52StaticDiagram />
      <Figures
        figureValues={figureValues}
        figuresCoordinateList={sensorConfigurations}
      />
    </svg>
  );
}
