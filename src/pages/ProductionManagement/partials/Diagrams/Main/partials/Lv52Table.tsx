import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';
import { FiguresCoordinateType } from '~/pages/ProductionManagement/MonitoringPage';

enum FigureId {
  Figure67 = 'figure67',
  Figure68 = 'figure68',
  Figure69 = 'figure69',
  Figure70 = 'figure70',
  Figure71 = 'figure71',
  Figure72 = 'figure72',
  Figure73 = 'figure73',
  Figure74 = 'figure74',
  Figure75 = 'figure75',
  Figure76 = 'figure76',
}

export interface Lv52TableProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function Lv52Table({ figuresCoordinate }: Lv52TableProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure67Coordinate = extractFigureCoordinate(FigureId.Figure67);
  const figure68Coordinate = extractFigureCoordinate(FigureId.Figure68);
  const figure69Coordinate = extractFigureCoordinate(FigureId.Figure69);
  const figure70Coordinate = extractFigureCoordinate(FigureId.Figure70);
  const figure71Coordinate = extractFigureCoordinate(FigureId.Figure71);
  const figure72Coordinate = extractFigureCoordinate(FigureId.Figure72);
  const figure73Coordinate = extractFigureCoordinate(FigureId.Figure73);
  const figure74Coordinate = extractFigureCoordinate(FigureId.Figure74);
  const figure75Coordinate = extractFigureCoordinate(FigureId.Figure75);
  const figure76Coordinate = extractFigureCoordinate(FigureId.Figure76);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <g>
        <g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='1734.82'
              y='834'
            />
            <text
              className='main__cls-25'
              transform='translate(1750.49 852.81)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='1794.62'
              y='834'
            />
            <text
              className='main__cls-25'
              transform='translate(1810.29 852.81)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='1854.41'
              y='834'
            />
            <text
              className='main__cls-25'
              transform='translate(1870.08 852.81)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
          </g>
          <text className='main__cls-25' transform='translate(1916.86 852.27)'>
            <tspan x='0' y='0'>
              °C
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-2'
              height='26.25'
              width='52.49'
              x='1725.45'
              y='869.41'
            />
            <text
              className='main__cls-20'
              transform='translate(1740.66 887.68)'
            >
              <tspan className='main__cls-38' x='0' y='0'>
                A
              </tspan>
              <tspan x='9.32' y='0'>
                -B
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-2'
              height='26.25'
              width='52.49'
              x='1777.95'
              y='869.41'
            />
            <text className='main__cls-20' transform='translate(1792.77 887.7)'>
              <tspan className='main__cls-30' x='0' y='0'>
                B
              </tspan>
              <tspan className='main__cls-51' x='8.38' y='0'>
                -
              </tspan>
              <tspan x='13.29' y='0'>
                C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-2'
              height='26.25'
              width='52.49'
              x='1830.44'
              y='869.41'
            />
            <text
              className='main__cls-28'
              transform='translate(1843.54 888.44)'
            >
              <tspan className='main__cls-57' x='0' y='0'>
                A
              </tspan>
              <tspan className='main__cls-61' x='10.66' y='0'>
                -
              </tspan>
              <tspan x='16.27' y='0'>
                C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-2'
              height='26.25'
              width='52.49'
              x='1882.93'
              y='895.66'
            />
            <text
              className='main__cls-28'
              transform='translate(1904.24 914.68)'
            >
              <tspan x='0' y='0'>
                V
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-2'
              height='26.25'
              width='52.49'
              x='1882.93'
              y='921.91'
            />
            <text
              className='main__cls-28'
              transform='translate(1904.24 940.92)'
            >
              <tspan x='0' y='0'>
                A
              </tspan>
            </text>
          </g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='1882.93'
            y='948.15'
          />
          <text className='main__cls-28' transform='translate(1891.44 967.17)'>
            <tspan className='main__cls-37' x='0' y='0'>
              c
            </tspan>
            <tspan x='7.73' y='0'>
              osφ
            </tspan>
          </text>
          <g>
            <rect
              className='main__cls-2'
              height='26.25'
              width='52.49'
              x='1882.93'
              y='974.4'
            />
            <text
              className='main__cls-28'
              transform='translate(1896.31 993.42)'
            >
              <tspan className='main__cls-62' x='0' y='0'>
                K
              </tspan>
              <tspan className='main__cls-17' x='9.75' y='0'>
                W
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-2'
              height='26.25'
              width='52.49'
              x='1882.93'
              y='1000.65'
            />
            <text
              className='main__cls-28'
              transform='translate(1894.9 1019.98)'
            >
              <tspan x='0' y='0'>
                k
              </tspan>
              <tspan className='main__cls-53' x='8.21' y='0'>
                V
              </tspan>
              <tspan x='16.97' y='0'>
                A
              </tspan>
            </text>
          </g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='1882.93'
            y='1026.89'
          />
          <text className='main__cls-28' transform='translate(1891.61 1046.17)'>
            <tspan x='0' y='0'>
              G
            </tspan>
            <tspan className='main__cls-31' x='11.3' y='0'>
              W
            </tspan>
            <tspan x='26.02' y='0'>
              h
            </tspan>
          </text>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1725.45'
              y='895.66'
            />
            <text className='main__cls-25' transform={figure67Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure67]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1777.95'
              y='895.66'
            />
            <text className='main__cls-25' transform={figure68Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure68]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1830.44'
              y='895.66'
            />
            <text className='main__cls-25' transform={figure69Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure69]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1725.45'
              y='921.91'
            />
            <text className='main__cls-25' transform={figure70Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure70]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1777.95'
              y='921.91'
            />
            <text className='main__cls-25' transform={figure71Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure71]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1830.44'
              y='921.91'
            />
            <text className='main__cls-25' transform={figure72Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure72]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='1725.45'
              y='948.15'
            />
            <text className='main__cls-25' transform={figure73Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure73]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='1725.45'
              y='974.4'
            />
            <text className='main__cls-25' transform={figure74Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure74]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='1725.45'
              y='1000.65'
            />
            <text className='main__cls-25' transform={figure75Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure75]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='1725.45'
              y='1026.89'
            />
            <text className='main__cls-25' transform={figure76Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure76]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-2'
              height='26.25'
              width='52.49'
              x='1882.93'
              y='869.41'
            />
            <line
              className='main__cls-7'
              x1='1882.93'
              x2='1935.43'
              y1='895.66'
              y2='870.49'
            />
          </g>
        </g>
      </g>
      <text className='main__cls-25' transform='translate(1812.48 807.97)'>
        <tspan className='main__cls-47'>
          <tspan className='main__cls-54' x='0' y='0'>
            L
          </tspan>
          <tspan x='7.23' y='0'>
            V52
          </tspan>
        </tspan>
        <tspan className='main__cls-41'>
          <tspan className='main__cls-45' x='-13.92' y='21'>
            P
          </tspan>
          <tspan x='-4.82' y='21'>
            M 5310
          </tspan>
        </tspan>
      </text>
    </g>
  );
}
