import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { FiguresCoordinateType } from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';

enum FigureId {
  Figure127 = 'figure127',
  Figure128 = 'figure128',
  Figure129 = 'figure129',
  Figure130 = 'figure130',
  Figure131 = 'figure131',
  Figure132 = 'figure132',
  Figure133 = 'figure133',
  Figure134 = 'figure134',
  Figure135 = 'figure135',
  Figure136 = 'figure136',
}

export interface TuyenNguonNhaKeoTr82TableProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function TuyenNguonNhaKeoTr82Table({
  figuresCoordinate,
}: TuyenNguonNhaKeoTr82TableProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure127Coordinate = extractFigureCoordinate(FigureId.Figure127);
  const figure128Coordinate = extractFigureCoordinate(FigureId.Figure128);
  const figure129Coordinate = extractFigureCoordinate(FigureId.Figure129);
  const figure130Coordinate = extractFigureCoordinate(FigureId.Figure130);
  const figure131Coordinate = extractFigureCoordinate(FigureId.Figure131);
  const figure132Coordinate = extractFigureCoordinate(FigureId.Figure132);
  const figure133Coordinate = extractFigureCoordinate(FigureId.Figure133);
  const figure134Coordinate = extractFigureCoordinate(FigureId.Figure134);
  const figure135Coordinate = extractFigureCoordinate(FigureId.Figure135);
  const figure136Coordinate = extractFigureCoordinate(FigureId.Figure136);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <g>
        <g>
          <rect
            className='main__cls-49'
            height='23.77'
            width='2.19'
            x='2067.29'
            y='1305.89'
          />
          <rect
            className='main__cls-49'
            height='2.19'
            width='68.9'
            x='2000.4'
            y='1327.42'
          />
          <polygon
            className='main__cls-5'
            points='2036.15 1328.51 2026.95 1333.82 2026.95 1323.2 2036.15 1328.51'
          />
        </g>
        <g>
          <rect
            className='main__cls-8'
            height='19.69'
            width='83.15'
            x='1917.29'
            y='1318.67'
          />
          <text
            className='main__cls-22'
            transform='translate(1935.08 1333.86) scale(.99 1)'
          >
            <tspan x='0' y='0'>
              750k
            </tspan>
            <tspan className='main__cls-59' x='30.74' y='0'>
              V
            </tspan>
            <tspan x='38.41' y='0'>
              A
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-2'
              height='26.25'
              width='52.49'
              x='1953.42'
              y='1121.48'
            />
            <text
              className='main__cls-20'
              transform='translate(1968.63 1139.75)'
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
              x='2005.92'
              y='1121.48'
            />
            <text
              className='main__cls-20'
              transform='translate(2020.74 1139.77)'
            >
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
              x='2058.41'
              y='1121.48'
            />
            <text
              className='main__cls-28'
              transform='translate(2071.51 1140.51)'
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
              x='2110.9'
              y='1147.73'
            />
            <text
              className='main__cls-28'
              transform='translate(2132.21 1166.74)'
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
              x='2110.9'
              y='1173.97'
            />
            <text
              className='main__cls-28'
              transform='translate(2132.21 1192.99)'
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
            x='2110.9'
            y='1200.22'
          />
          <text className='main__cls-28' transform='translate(2119.41 1219.24)'>
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
              x='2110.9'
              y='1226.47'
            />
            <text
              className='main__cls-28'
              transform='translate(2124.28 1245.49)'
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
              x='2110.9'
              y='1252.71'
            />
            <text
              className='main__cls-28'
              transform='translate(2122.87 1272.05)'
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
            x='2110.9'
            y='1278.96'
          />
          <text className='main__cls-28' transform='translate(2119.58 1298.23)'>
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
              x='1953.42'
              y='1147.73'
            />
            <text className='main__cls-25' transform={figure127Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure127]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='2005.92'
              y='1147.73'
            />
            <text className='main__cls-25' transform={figure128Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure128]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='2058.41'
              y='1147.73'
            />
            <text className='main__cls-25' transform={figure129Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure129]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1953.42'
              y='1173.97'
            />
            <text className='main__cls-25' transform={figure130Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure130]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='2005.92'
              y='1173.97'
            />
            <text className='main__cls-25' transform={figure131Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure131]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='2058.41'
              y='1173.97'
            />
            <text className='main__cls-25' transform={figure132Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure132]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='1953.42'
              y='1200.22'
            />
            <text className='main__cls-25' transform={figure133Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure133]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='1953.42'
              y='1226.47'
            />
            <text className='main__cls-25' transform={figure134Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure134]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='1953.42'
              y='1252.71'
            />
            <text className='main__cls-25' transform={figure135Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure135]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='1953.42'
              y='1278.96'
            />
            <text className='main__cls-25' transform={figure136Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure136]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-2'
              height='26.25'
              width='52.49'
              x='2110.9'
              y='1121.48'
            />
            <line
              className='main__cls-7'
              x1='2110.9'
              x2='2163.4'
              y1='1147.73'
              y2='1122.56'
            />
          </g>
        </g>
      </g>
      <text className='main__cls-25' transform='translate(2008.92 1076.09)'>
        <tspan className='main__cls-47'>
          <tspan className='main__cls-60' x='0' y='0'>
            T
          </tspan>
          <tspan x='7.91' y='0'>
            u
          </tspan>
          <tspan className='main__cls-33' x='17.55' y='0'>
            y
          </tspan>
          <tspan className='main__cls-44' x='25.62' y='0'>
            ến nguồn{' '}
          </tspan>
        </tspan>
        <tspan className='main__cls-47'>
          <tspan x='1.38' y='21'>
            nhà keo
          </tspan>
          <tspan className='main__cls-18' x='59.53' y='21'>
            {' '}
          </tspan>
          <tspan className='main__cls-17' x='62.52' y='21'>
            TR82
          </tspan>
        </tspan>
        <tspan className='main__cls-41'>
          <tspan className='main__cls-45' x='18.59' y='42'>
            P
          </tspan>
          <tspan x='27.69' y='42'>
            M 5310
          </tspan>
        </tspan>
      </text>
    </g>
  );
}
