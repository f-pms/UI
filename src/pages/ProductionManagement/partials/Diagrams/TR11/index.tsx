import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { useFiguresCoordinateContext } from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import { Figures } from '~/pages/ProductionManagement/helpers/diagrams';
import Tr11StaticDiagram from '~/pages/ProductionManagement/partials/Diagrams/TR11/partials/Tr11StaticDiagram';

import './styles.css';

export function TR11Diagram() {
  const figuresCoordinateList = useFiguresCoordinateContext();
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <svg
      data-name='Layer 1'
      id='Layer_1'
      style={{ width: '100%', height: '100%' }}
      viewBox='0 0 2871.87 1345.36'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Tr11StaticDiagram />
      <Figures
        figureValues={figureValues}
        figuresCoordinateList={figuresCoordinateList}
      />
    </svg>
  );
}
