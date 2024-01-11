import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { useFiguresCoordinateContext } from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import { Figures } from '~/pages/ProductionManagement/helpers/diagrams';
import Tr30StaticDiagram from '~/pages/ProductionManagement/partials/Diagrams/TR30/Tr30StaticDiagram';

import './styles.css';

export function TR30Diagram() {
  const figuresCoordinateList = useFiguresCoordinateContext();
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <svg
      data-name='Layer 1'
      id='Layer_1'
      style={{ width: '100%', height: '100%' }}
      viewBox='0 0 2873.84 1312.21'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Tr30StaticDiagram />
      <Figures
        figureValues={figureValues}
        figuresCoordinateList={figuresCoordinateList}
      />
    </svg>
  );
}
