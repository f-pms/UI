import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { FiguresCoordinateType } from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';

enum FigureId {
  Figure137 = 'figure137',
  Figure138 = 'figure138',
  Figure139 = 'figure139',
  Figure140 = 'figure140',
  Figure141 = 'figure141',
  Figure142 = 'figure142',
  Figure143 = 'figure143',
  Figure144 = 'figure144',
  Figure145 = 'figure145',
  Figure146 = 'figure146',
}

export interface TuyenNguonDt475Pb01090028954TableProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function TuyenNguonDt475Pb01090028954Table({
  figuresCoordinate,
}: TuyenNguonDt475Pb01090028954TableProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure137Coordinate = extractFigureCoordinate(FigureId.Figure137);
  const figure138Coordinate = extractFigureCoordinate(FigureId.Figure138);
  const figure139Coordinate = extractFigureCoordinate(FigureId.Figure139);
  const figure140Coordinate = extractFigureCoordinate(FigureId.Figure140);
  const figure141Coordinate = extractFigureCoordinate(FigureId.Figure141);
  const figure142Coordinate = extractFigureCoordinate(FigureId.Figure142);
  const figure143Coordinate = extractFigureCoordinate(FigureId.Figure143);
  const figure144Coordinate = extractFigureCoordinate(FigureId.Figure144);
  const figure145Coordinate = extractFigureCoordinate(FigureId.Figure145);
  const figure146Coordinate = extractFigureCoordinate(FigureId.Figure146);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <g>
        <g>
          <rect
            className='main__cls-49'
            height='2.19'
            width='175.32'
            x='1582.23'
            y='1326.23'
          />
          <rect
            className='main__cls-49'
            height='23.77'
            width='2.19'
            x='1627.91'
            y='1304.65'
          />
          <polygon
            className='main__cls-5'
            points='1612.85 1327.21 1603.65 1332.52 1603.65 1321.9 1612.85 1327.21'
          />
        </g>
        <g>
          <rect
            className='main__cls-8'
            height='19.69'
            width='83.15'
            x='1498.63'
            y='1317.48'
          />
          <text
            className='main__cls-22'
            transform='translate(1508.32 1332.68) scale(.99 1)'
          >
            <tspan x='0' y='0'>
              12700k
            </tspan>
            <tspan className='main__cls-59' x='46.45' y='0'>
              V
            </tspan>
            <tspan className='main__cls-56' x='54.12' y='0'>
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
              x='1497.94'
              y='1120.1'
            />
            <text
              className='main__cls-20'
              transform='translate(1513.15 1138.37)'
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
              x='1550.43'
              y='1120.1'
            />
            <text
              className='main__cls-20'
              transform='translate(1565.26 1138.39)'
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
              x='1602.93'
              y='1120.1'
            />
            <text
              className='main__cls-28'
              transform='translate(1616.02 1139.13)'
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
              x='1655.42'
              y='1146.34'
            />
            <text
              className='main__cls-28'
              transform='translate(1676.73 1165.36)'
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
              x='1655.42'
              y='1172.59'
            />
            <text
              className='main__cls-28'
              transform='translate(1676.73 1191.61)'
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
            x='1655.42'
            y='1198.84'
          />
          <text className='main__cls-28' transform='translate(1663.92 1217.86)'>
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
              x='1655.42'
              y='1225.09'
            />
            <text className='main__cls-28' transform='translate(1668.8 1244.1)'>
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
              x='1655.42'
              y='1251.33'
            />
            <text
              className='main__cls-28'
              transform='translate(1667.39 1270.67)'
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
            x='1655.42'
            y='1277.58'
          />
          <text className='main__cls-28' transform='translate(1664.1 1296.85)'>
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
              x='1497.94'
              y='1146.34'
            />
            <text className='main__cls-25' transform={figure137Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure137]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1550.43'
              y='1146.34'
            />
            <text className='main__cls-25' transform={figure138Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure138]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1602.93'
              y='1146.34'
            />
            <text className='main__cls-25' transform={figure139Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure139]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1497.94'
              y='1172.59'
            />
            <text className='main__cls-25' transform={figure140Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure140]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1550.43'
              y='1172.59'
            />
            <text className='main__cls-25' transform={figure141Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure141]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1602.93'
              y='1172.59'
            />
            <text className='main__cls-25' transform={figure142Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure142]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='1497.94'
              y='1198.84'
            />
            <text className='main__cls-25' transform={figure143Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure143]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='1497.94'
              y='1225.09'
            />
            <text className='main__cls-25' transform={figure144Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure144]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='1497.94'
              y='1251.33'
            />
            <text className='main__cls-25' transform={figure145Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure145]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='1497.94'
              y='1277.58'
            />
            <text className='main__cls-25' transform={figure146Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure146]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-2'
              height='26.25'
              width='52.49'
              x='1655.42'
              y='1120.1'
            />
            <line
              className='main__cls-7'
              x1='1655.42'
              x2='1707.92'
              y1='1146.34'
              y2='1121.18'
            />
          </g>
        </g>
      </g>
      <text className='main__cls-25' transform='translate(1554.21 1075)'>
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
          <tspan className='main__cls-42' x='-35.87' y='21'>
            D
          </tspan>
          <tspan x='-24.65' y='21'>
            T475: PB01090028954
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
