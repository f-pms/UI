import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { FiguresCoordinateType } from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';

enum FigureId {
  Figure37 = 'figure37',
  Figure38 = 'figure38',
  Figure39 = 'figure39',
  Figure40 = 'figure40',
  Figure41 = 'figure41',
  Figure42 = 'figure42',
  Figure43 = 'figure43',
  Figure44 = 'figure44',
  Figure45 = 'figure45',
  Figure46 = 'figure46',
}

export interface Lv42TableProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function Lv42Table({ figuresCoordinate }: Lv42TableProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure37Coordinate = extractFigureCoordinate(FigureId.Figure37);
  const figure38Coordinate = extractFigureCoordinate(FigureId.Figure38);
  const figure39Coordinate = extractFigureCoordinate(FigureId.Figure39);
  const figure40Coordinate = extractFigureCoordinate(FigureId.Figure40);
  const figure41Coordinate = extractFigureCoordinate(FigureId.Figure41);
  const figure42Coordinate = extractFigureCoordinate(FigureId.Figure42);
  const figure43Coordinate = extractFigureCoordinate(FigureId.Figure43);
  const figure44Coordinate = extractFigureCoordinate(FigureId.Figure44);
  const figure45Coordinate = extractFigureCoordinate(FigureId.Figure45);
  const figure46Coordinate = extractFigureCoordinate(FigureId.Figure46);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='1196.23'
            y='869.85'
          />
          <text className='main__cls-20' transform='translate(1211.44 888.13)'>
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
            x='1248.73'
            y='869.85'
          />
          <text className='main__cls-20' transform='translate(1263.55 888.14)'>
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
            x='1301.22'
            y='869.85'
          />
          <text className='main__cls-28' transform='translate(1314.32 888.88)'>
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
            x='1353.71'
            y='896.1'
          />
          <text className='main__cls-28' transform='translate(1375.02 915.12)'>
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
            x='1353.71'
            y='922.35'
          />
          <text className='main__cls-28' transform='translate(1375.02 941.37)'>
            <tspan x='0' y='0'>
              A
            </tspan>
          </text>
        </g>
        <rect
          className='main__cls-2'
          height='26.25'
          width='52.49'
          x='1353.71'
          y='948.6'
        />
        <text className='main__cls-28' transform='translate(1362.22 967.61)'>
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
            x='1353.71'
            y='974.84'
          />
          <text className='main__cls-28' transform='translate(1367.09 993.86)'>
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
            x='1353.71'
            y='1001.09'
          />
          <text className='main__cls-28' transform='translate(1365.68 1020.42)'>
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
          x='1353.71'
          y='1027.34'
        />
        <text className='main__cls-28' transform='translate(1362.39 1046.61)'>
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
            x='1196.23'
            y='896.1'
          />
          <text className='main__cls-25' transform={figure37Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure37]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='1248.73'
            y='896.1'
          />
          <text className='main__cls-25' transform={figure38Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure38]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='1301.22'
            y='896.1'
          />
          <text className='main__cls-25' transform={figure39Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure39]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='1196.23'
            y='922.35'
          />
          <text className='main__cls-25' transform={figure40Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure40]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='1248.73'
            y='922.35'
          />
          <text className='main__cls-25' transform={figure41Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure41]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='1301.22'
            y='922.35'
          />
          <text className='main__cls-25' transform={figure42Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure42]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='1196.23'
            y='948.6'
          />
          <text className='main__cls-25' transform={figure43Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure43]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='1196.23'
            y='974.84'
          />
          <text className='main__cls-25' transform={figure44Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure44]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='1196.23'
            y='1001.09'
          />
          <text className='main__cls-25' transform={figure45Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure45]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='1196.23'
            y='1027.34'
          />
          <text className='main__cls-25' transform={figure46Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure46]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='1353.71'
            y='869.85'
          />
          <line
            className='main__cls-7'
            x1='1353.71'
            x2='1406.21'
            y1='896.1'
            y2='870.94'
          />
        </g>
      </g>
      <text className='main__cls-25' transform='translate(1285.76 840.28)'>
        <tspan className='main__cls-47'>
          <tspan className='main__cls-54' x='0' y='0'>
            L
          </tspan>
          <tspan x='7.23' y='0'>
            V42
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
