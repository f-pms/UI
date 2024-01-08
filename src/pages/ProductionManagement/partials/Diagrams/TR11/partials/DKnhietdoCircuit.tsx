import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { FiguresCoordinateType } from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';

enum FigureId {
  Figure0 = 'figure0',
  Figure1 = 'figure1',
  Figure2 = 'figure2',
}

export interface DKnhietdoCircuitProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function DKnhietdoCircuit({
  figuresCoordinate,
}: DKnhietdoCircuitProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure0Coordinate = extractFigureCoordinate(FigureId.Figure0);
  const figure1Coordinate = extractFigureCoordinate(FigureId.Figure1);
  const figure2Coordinate = extractFigureCoordinate(FigureId.Figure2);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <g>
        <g>
          <rect
            className='station-11__cls-10'
            height='37.14'
            width='112.8'
            x='982.7'
            y='104.12'
          />
          <text className='station-11__cls-25' transform={figure0Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure0]}
            </tspan>
          </text>
          <text
            className='station-11__cls-25'
            transform='translate(1100.11 131.74)'
          >
            <tspan x='0' y='0'>
              °C
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='station-11__cls-10'
            height='37.14'
            width='112.8'
            x='982.7'
            y='141.26'
          />
          <text className='station-11__cls-25' transform={figure1Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure1]}
            </tspan>
          </text>
          <text
            className='station-11__cls-25'
            transform='translate(1100.11 168.88)'
          >
            <tspan x='0' y='0'>
              °C
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='station-11__cls-10'
            height='37.14'
            width='112.8'
            x='982.7'
            y='178.4'
          />
          <text className='station-11__cls-25' transform={figure2Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure2]}
            </tspan>
          </text>
          <text
            className='station-11__cls-25'
            transform='translate(1100.11 206.01)'
          >
            <tspan x='0' y='0'>
              °C
            </tspan>
          </text>
        </g>
      </g>
      <g>
        <rect
          className='station-11__cls-10'
          height='37.14'
          width='407.95'
          x='1154.45'
          y='104.12'
        />
        <text
          className='station-11__cls-18'
          transform='translate(1165.52 128.4)'
        >
          <tspan className='station-11__cls-16' x='0' y='0'>
            B
          </tspan>
          <tspan x='11.83' y='0'>
            ộ ĐK nhiệt độ
          </tspan>
          <tspan className='station-11__cls-63' x='135.02' y='0'>
            {' '}
          </tspan>
          <tspan x='138.73' y='0'>
            TBA
          </tspan>
          <tspan className='station-11__cls-63' x='174.5' y='0'>
            {' '}
          </tspan>
          <tspan className='station-11__cls-69' x='178.2' y='0'>
            TR11 -{' '}
          </tspan>
          <tspan className='station-11__cls-1' x='238.68' y='0'>
            F
          </tspan>
          <tspan className='station-11__cls-53' x='248.26' y='0'>
            ault
          </tspan>
        </text>
        <rect
          className='station-11__cls-10'
          height='37.14'
          width='407.95'
          x='1154.45'
          y='141.26'
        />
        <text
          className='station-11__cls-18'
          transform='translate(1165.52 165.54)'
        >
          <tspan className='station-11__cls-16' x='0' y='0'>
            B
          </tspan>
          <tspan x='11.83' y='0'>
            ộ ĐK nhiệt độ
          </tspan>
          <tspan className='station-11__cls-63' x='135.02' y='0'>
            {' '}
          </tspan>
          <tspan x='138.73' y='0'>
            TBA
          </tspan>
          <tspan className='station-11__cls-63' x='174.5' y='0'>
            {' '}
          </tspan>
          <tspan className='station-11__cls-69' x='178.2' y='0'>
            TR11 -{' '}
          </tspan>
          <tspan className='station-11__cls-42' x='238.68' y='0'>
            O
          </tspan>
          <tspan className='station-11__cls-57' x='253.91' y='0'>
            v
          </tspan>
          <tspan x='264.11' y='0'>
            er{' '}
          </tspan>
          <tspan className='station-11__cls-39' x='286.64' y='0'>
            t
          </tspan>
          <tspan className='station-11__cls-69' x='293.68' y='0'>
            emp
          </tspan>
        </text>
        <rect
          className='station-11__cls-10'
          height='37.14'
          width='407.95'
          x='1154.45'
          y='178.4'
        />
        <text
          className='station-11__cls-18'
          transform='translate(1165.52 202.67)'
        >
          <tspan className='station-11__cls-16' x='0' y='0'>
            B
          </tspan>
          <tspan x='11.83' y='0'>
            ộ ĐK nhiệt độ
          </tspan>
          <tspan className='station-11__cls-63' x='135.02' y='0'>
            {' '}
          </tspan>
          <tspan x='138.73' y='0'>
            TBA
          </tspan>
          <tspan className='station-11__cls-63' x='174.5' y='0'>
            {' '}
          </tspan>
          <tspan className='station-11__cls-69' x='178.2' y='0'>
            TR11 -{' '}
          </tspan>
          <tspan className='station-11__cls-43' x='238.68' y='0'>
            P
          </tspan>
          <tspan className='station-11__cls-51' x='249.67' y='0'>
            o
          </tspan>
          <tspan className='station-11__cls-57' x='261.41' y='0'>
            w
          </tspan>
          <tspan className='station-11__cls-69' x='277.13' y='0'>
            er cut
          </tspan>
        </text>
      </g>
    </g>
  );
}
