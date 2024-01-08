import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { FiguresCoordinateType } from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';

enum FigureId {
  Figure3 = 'figure3',
  Figure4 = 'figure4',
  Figure5 = 'figure5',
  Figure6 = 'figure6',
  Figure7 = 'figure7',
  Figure8 = 'figure8',
  Figure9 = 'figure9',
  Figure10 = 'figure10',
  Figure11 = 'figure11',
  Figure12 = 'figure12',
  Figure13 = 'figure13',
  Figure14 = 'figure14',
  Figure15 = 'figure15',
  Figure16 = 'figure16',
  Figure17 = 'figure17',
  Figure18 = 'figure18',
}
export interface DigitalMultiMetterPM5310TableProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function DigitalMultiMetterPM5310Table({
  figuresCoordinate,
}: DigitalMultiMetterPM5310TableProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure3Coordinate = extractFigureCoordinate(FigureId.Figure3);
  const figure4Coordinate = extractFigureCoordinate(FigureId.Figure4);
  const figure5Coordinate = extractFigureCoordinate(FigureId.Figure5);
  const figure6Coordinate = extractFigureCoordinate(FigureId.Figure6);
  const figure7Coordinate = extractFigureCoordinate(FigureId.Figure7);
  const figure8Coordinate = extractFigureCoordinate(FigureId.Figure8);
  const figure9Coordinate = extractFigureCoordinate(FigureId.Figure9);
  const figure10Coordinate = extractFigureCoordinate(FigureId.Figure10);
  const figure11Coordinate = extractFigureCoordinate(FigureId.Figure11);
  const figure12Coordinate = extractFigureCoordinate(FigureId.Figure12);
  const figure13Coordinate = extractFigureCoordinate(FigureId.Figure13);
  const figure14Coordinate = extractFigureCoordinate(FigureId.Figure14);
  const figure15Coordinate = extractFigureCoordinate(FigureId.Figure15);
  const figure16Coordinate = extractFigureCoordinate(FigureId.Figure16);
  const figure17Coordinate = extractFigureCoordinate(FigureId.Figure17);
  const figure18Coordinate = extractFigureCoordinate(FigureId.Figure18);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <text className='station-11__cls-23' transform='translate(1719.11 375.8)'>
        <tspan x='0' y='0'>
          Di
        </tspan>
        <tspan className='station-11__cls-5' x='22.28' y='0'>
          g
        </tspan>
        <tspan x='35.97' y='0'>
          ital{' '}
        </tspan>
        <tspan className='station-11__cls-68' x='72.99' y='0'>
          M
        </tspan>
        <tspan x='92.96' y='0'>
          ulti{' '}
        </tspan>
        <tspan className='station-11__cls-79' x='131.68' y='0'>
          M
        </tspan>
        <tspan x='151.74' y='0'>
          et
        </tspan>
        <tspan className='station-11__cls-5' x='172.34' y='0'>
          t
        </tspan>
        <tspan className='station-11__cls-67' x='180.38' y='0'>
          er
        </tspan>
        <tspan className='station-11__cls-78' x='58.65' y='29.71'>
          P
        </tspan>
        <tspan x='71.52' y='29.71'>
          M5310
        </tspan>
      </text>
      <g>
        <rect
          className='station-11__cls-6'
          height='37.14'
          width='74.27'
          x='1671.01'
          y='421.5'
        />
        <text
          className='station-11__cls-21'
          transform='translate(1692.53 447.35)'
        >
          <tspan className='station-11__cls-32' x='0' y='0'>
            A
          </tspan>
          <tspan x='13.19' y='0'>
            -B
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-6'
          height='37.14'
          width='74.27'
          x='1745.28'
          y='421.5'
        />
        <text
          className='station-11__cls-21'
          transform='translate(1766.26 447.38)'
        >
          <tspan className='station-11__cls-65' x='0' y='0'>
            B
          </tspan>
          <tspan className='station-11__cls-62' x='11.85' y='0'>
            -
          </tspan>
          <tspan x='18.8' y='0'>
            C
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-6'
          height='37.14'
          width='74.27'
          x='1819.56'
          y='421.5'
        />
        <text
          className='station-11__cls-22'
          transform='translate(1838.09 448.42)'
        >
          <tspan className='station-11__cls-52' x='0' y='0'>
            A
          </tspan>
          <tspan className='station-11__cls-2' x='15.08' y='0'>
            -
          </tspan>
          <tspan x='23.02' y='0'>
            C
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-6'
          height='37.14'
          width='74.27'
          x='1893.83'
          y='458.63'
        />
        <text
          className='station-11__cls-22'
          transform='translate(1923.97 485.55)'
        >
          <tspan x='0' y='0'>
            V
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-6'
          height='37.14'
          width='74.27'
          x='1893.83'
          y='495.77'
        />
        <text
          className='station-11__cls-22'
          transform='translate(1923.97 522.68)'
        >
          <tspan x='0' y='0'>
            A
          </tspan>
        </text>
      </g>
      <rect
        className='station-11__cls-6'
        height='37.14'
        width='74.27'
        x='1893.83'
        y='532.91'
      />
      <text
        className='station-11__cls-22'
        transform='translate(1905.86 559.82)'
      >
        <tspan className='station-11__cls-5' x='0' y='0'>
          c
        </tspan>
        <tspan x='10.94' y='0'>
          osφ
        </tspan>
      </text>
      <g>
        <rect
          className='station-11__cls-6'
          height='37.14'
          width='74.27'
          x='1893.83'
          y='570.04'
        />
        <text
          className='station-11__cls-22'
          transform='translate(1912.76 596.96)'
        >
          <tspan className='station-11__cls-37' x='0' y='0'>
            K
          </tspan>
          <tspan x='13.79' y='0'>
            W
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-6'
          height='37.14'
          width='74.27'
          x='1893.83'
          y='607.18'
        />
        <text
          className='station-11__cls-22'
          transform='translate(1910.77 634.54)'
        >
          <tspan x='0' y='0'>
            k
          </tspan>
          <tspan className='station-11__cls-34' x='11.61' y='0'>
            V
          </tspan>
          <tspan className='station-11__cls-74' x='24.02' y='0'>
            A
          </tspan>
        </text>
      </g>
      <rect
        className='station-11__cls-6'
        height='37.14'
        width='74.27'
        x='1893.83'
        y='644.32'
      />
      <text
        className='station-11__cls-22'
        transform='translate(1906.11 671.59)'
      >
        <tspan x='0' y='0'>
          G
        </tspan>
        <tspan className='station-11__cls-61' x='15.99' y='0'>
          W
        </tspan>
        <tspan x='36.82' y='0'>
          h
        </tspan>
      </text>
      <g>
        <rect
          className='station-11__cls-7'
          height='37.14'
          width='74.27'
          x='1671.01'
          y='458.63'
        />
        <text className='station-11__cls-25' transform={figure3Coordinate}>
          <tspan x='0' y='0'>
            {figureValues[FigureId.Figure3]}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-7'
          height='37.14'
          width='74.27'
          x='1745.28'
          y='458.63'
        />
        <text className='station-11__cls-25' transform={figure4Coordinate}>
          <tspan x='0' y='0'>
            {figureValues[FigureId.Figure4]}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-7'
          height='37.14'
          width='74.27'
          x='1819.56'
          y='458.63'
        />
        <text className='station-11__cls-25' transform={figure5Coordinate}>
          <tspan x='0' y='0'>
            {figureValues[FigureId.Figure5]}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-7'
          height='37.14'
          width='74.27'
          x='1671.01'
          y='495.77'
        />
        <text className='station-11__cls-25' transform={figure6Coordinate}>
          <tspan x='0' y='0'>
            {figureValues[FigureId.Figure6]}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-7'
          height='37.14'
          width='74.27'
          x='1745.28'
          y='495.77'
        />
        <text className='station-11__cls-25' transform={figure7Coordinate}>
          <tspan x='0' y='0'>
            {figureValues[FigureId.Figure7]}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-7'
          height='37.14'
          width='74.27'
          x='1819.56'
          y='495.77'
        />
        <text className='station-11__cls-25' transform={figure8Coordinate}>
          <tspan x='0' y='0'>
            {figureValues[FigureId.Figure8]}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-6'
          height='37.14'
          width='74.27'
          x='1893.83'
          y='681.46'
        />
        <text
          className='station-11__cls-22'
          transform='translate(1901.57 708.35)'
        >
          <tspan x='0' y='0'>
            THDV
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-6'
          height='37.14'
          width='74.27'
          x='1893.83'
          y='718.59'
        />
        <text
          className='station-11__cls-22'
          transform='translate(1906.49 745.49)'
        >
          <tspan x='0' y='0'>
            THDI
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-7'
          height='37.14'
          width='74.27'
          x='1671.01'
          y='681.46'
        />
        <text className='station-11__cls-25' transform={figure13Coordinate}>
          <tspan x='0' y='0'>
            {figureValues[FigureId.Figure13]}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-7'
          height='37.14'
          width='74.27'
          x='1745.28'
          y='681.46'
        />
        <text className='station-11__cls-25' transform={figure14Coordinate}>
          <tspan x='0' y='0'>
            {figureValues[FigureId.Figure14]}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-7'
          height='37.14'
          width='74.27'
          x='1819.56'
          y='681.46'
        />
        <text className='station-11__cls-25' transform={figure15Coordinate}>
          <tspan x='0' y='0'>
            {figureValues[FigureId.Figure15]}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-7'
          height='37.14'
          width='74.27'
          x='1671.01'
          y='718.59'
        />
        <text className='station-11__cls-25' transform={figure16Coordinate}>
          <tspan x='0' y='0'>
            {figureValues[FigureId.Figure16]}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-7'
          height='37.14'
          width='74.27'
          x='1745.28'
          y='718.59'
        />
        <text className='station-11__cls-25' transform={figure17Coordinate}>
          <tspan x='0' y='0'>
            {figureValues[FigureId.Figure17]}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-7'
          height='37.14'
          width='74.27'
          x='1819.56'
          y='718.59'
        />
        <text className='station-11__cls-25' transform={figure18Coordinate}>
          <tspan x='0' y='0'>
            {figureValues[FigureId.Figure18]}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-7'
          height='37.14'
          width='222.82'
          x='1671.01'
          y='532.91'
        />
        <text className='station-11__cls-25' transform={figure9Coordinate}>
          <tspan x='0' y='0'>
            {figureValues[FigureId.Figure9]}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-7'
          height='37.14'
          width='222.82'
          x='1671.01'
          y='570.04'
        />
        <text className='station-11__cls-25' transform={figure10Coordinate}>
          <tspan x='0' y='0'>
            {figureValues[FigureId.Figure10]}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-7'
          height='37.14'
          width='222.82'
          x='1671.01'
          y='607.18'
        />
        <text className='station-11__cls-25' transform={figure11Coordinate}>
          <tspan x='0' y='0'>
            {figureValues[FigureId.Figure11]}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-7'
          height='37.14'
          width='222.82'
          x='1671.01'
          y='644.32'
        />
        <text className='station-11__cls-25' transform={figure12Coordinate}>
          <tspan x='0' y='0'>
            {figureValues[FigureId.Figure12]}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          className='station-11__cls-6'
          height='37.14'
          width='74.27'
          x='1893.83'
          y='421.5'
        />
        <line
          className='station-11__cls-10'
          x1='1893.83'
          x2='1968.1'
          y1='458.63'
          y2='423.03'
        />
      </g>
    </g>
  );
}
