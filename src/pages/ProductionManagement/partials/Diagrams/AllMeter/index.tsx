import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { useCurrentBlueprintContext } from '~/pages/ProductionManagement/context/BlueprintContext';
import AllMeterStaticDiagram from '~/pages/ProductionManagement/partials/Diagrams/AllMeter/AllMeterStaticDiagram';
import { Figures } from '~/pages/ProductionManagement/partials/Figures';

import './styles.css';

export function AllMeterDiagram() {
  const { sensorConfigurations } = useCurrentBlueprintContext();
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <svg
      data-name='Layer 13'
      id='Layer_13'
      style={{ width: '100%', height: '100%' }}
      viewBox='0 0 2871.87 1349'
      xmlns='http://www.w3.org/2000/svg'
    >
      <AllMeterStaticDiagram />
      <Figures
        figureValues={figureValues}
        figuresCoordinateList={sensorConfigurations}
      />
    </svg>
  );
}
