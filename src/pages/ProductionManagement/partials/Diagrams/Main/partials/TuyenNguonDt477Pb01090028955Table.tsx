import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { FiguresCoordinateType } from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';

enum FigureId {
  Figure47 = 'figure47',
  Figure48 = 'figure48',
  Figure49 = 'figure49',
  Figure50 = 'figure50',
  Figure51 = 'figure51',
  Figure52 = 'figure52',
  Figure53 = 'figure53',
  Figure54 = 'figure54',
  Figure55 = 'figure55',
  Figure56 = 'figure56',
}

export interface TuyenNguonDt477Pb01090028955TableProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function TuyenNguonDt477Pb01090028955Table({
  figuresCoordinate,
}: TuyenNguonDt477Pb01090028955TableProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure47Coordinate = extractFigureCoordinate(FigureId.Figure47);
  const figure48Coordinate = extractFigureCoordinate(FigureId.Figure48);
  const figure49Coordinate = extractFigureCoordinate(FigureId.Figure49);
  const figure50Coordinate = extractFigureCoordinate(FigureId.Figure50);
  const figure51Coordinate = extractFigureCoordinate(FigureId.Figure51);
  const figure52Coordinate = extractFigureCoordinate(FigureId.Figure52);
  const figure53Coordinate = extractFigureCoordinate(FigureId.Figure53);
  const figure54Coordinate = extractFigureCoordinate(FigureId.Figure54);
  const figure55Coordinate = extractFigureCoordinate(FigureId.Figure55);
  const figure56Coordinate = extractFigureCoordinate(FigureId.Figure56);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <g>
        <g>
          <rect
            className='main__cls-49'
            height='20.42'
            width='2.19'
            x='1249.94'
            y='1304.22'
          />
          <rect
            className='main__cls-49'
            height='2.19'
            width='62.44'
            x='1249.94'
            y='1322.46'
          />
          <polygon
            className='main__cls-5'
            points='1271.28 1323.27 1280.48 1317.96 1280.48 1328.58 1271.28 1323.27'
          />
        </g>
        <g>
          <rect
            className='main__cls-8'
            height='19.69'
            width='83.15'
            x='1313.26'
            y='1313.43'
          />
          <text
            className='main__cls-22'
            transform='translate(1322.95 1328.63) scale(.99 1)'
          >
            <tspan x='0' y='0'>
              13000k
            </tspan>
            <tspan className='main__cls-59' x='46.45' y='0'>
              V
            </tspan>
            <tspan x='54.12' y='0'>
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
              x='1184.71'
              y='1120.1'
            />
            <text
              className='main__cls-20'
              transform='translate(1199.92 1138.37)'
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
              x='1237.21'
              y='1120.1'
            />
            <text
              className='main__cls-20'
              transform='translate(1252.03 1138.39)'
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
              x='1289.7'
              y='1120.1'
            />
            <text
              className='main__cls-28'
              transform='translate(1302.8 1139.13)'
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
              x='1342.19'
              y='1146.34'
            />
            <text
              className='main__cls-28'
              transform='translate(1363.5 1165.36)'
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
              x='1342.19'
              y='1172.59'
            />
            <text
              className='main__cls-28'
              transform='translate(1363.5 1191.61)'
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
            x='1342.19'
            y='1198.84'
          />
          <text className='main__cls-28' transform='translate(1350.7 1217.86)'>
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
              x='1342.19'
              y='1225.09'
            />
            <text
              className='main__cls-28'
              transform='translate(1355.57 1244.1)'
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
              x='1342.19'
              y='1251.33'
            />
            <text
              className='main__cls-28'
              transform='translate(1354.16 1270.67)'
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
            x='1342.19'
            y='1277.58'
          />
          <text className='main__cls-28' transform='translate(1350.87 1296.85)'>
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
              x='1184.71'
              y='1146.34'
            />
            <text className='main__cls-25' transform={figure47Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure47]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1237.21'
              y='1146.34'
            />
            <text className='main__cls-25' transform={figure48Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure48]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1289.7'
              y='1146.34'
            />
            <text className='main__cls-25' transform={figure49Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure49]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1184.71'
              y='1172.59'
            />
            <text className='main__cls-25' transform={figure50Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure50]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1237.21'
              y='1172.59'
            />
            <text className='main__cls-25' transform={figure51Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure51]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='1289.7'
              y='1172.59'
            />
            <text className='main__cls-25' transform={figure52Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure52]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='1184.71'
              y='1198.84'
            />
            <text className='main__cls-25' transform={figure53Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure53]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='1184.71'
              y='1225.09'
            />
            <text className='main__cls-25' transform={figure54Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure54]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='1184.71'
              y='1251.33'
            />
            <text className='main__cls-25' transform={figure55Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure55]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='1184.71'
              y='1277.58'
            />
            <text className='main__cls-25' transform={figure56Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure56]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-2'
              height='26.25'
              width='52.49'
              x='1342.19'
              y='1120.1'
            />
            <line
              className='main__cls-7'
              x1='1342.19'
              x2='1394.69'
              y1='1146.34'
              y2='1121.18'
            />
          </g>
        </g>
      </g>
      <text className='main__cls-25' transform='translate(1240.35 1075)'>
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
            T475: PB01090028955
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
