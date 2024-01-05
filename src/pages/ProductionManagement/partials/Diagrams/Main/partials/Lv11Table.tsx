import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';
import { FiguresCoordinateType } from '~/pages/ProductionManagement/MonitoringPage';

enum FigureId {
  Figure17 = 'figure17',
  Figure18 = 'figure18',
  Figure19 = 'figure19',
  Figure20 = 'figure20',
  Figure21 = 'figure21',
  Figure22 = 'figure22',
  Figure23 = 'figure23',
  Figure24 = 'figure24',
  Figure25 = 'figure25',
  Figure26 = 'figure26',
}

export interface Lv11TableProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function Lv11Table({ figuresCoordinate }: Lv11TableProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure17Coordinate = extractFigureCoordinate(FigureId.Figure17);
  const figure18Coordinate = extractFigureCoordinate(FigureId.Figure18);
  const figure19Coordinate = extractFigureCoordinate(FigureId.Figure19);
  const figure20Coordinate = extractFigureCoordinate(FigureId.Figure20);
  const figure21Coordinate = extractFigureCoordinate(FigureId.Figure21);
  const figure22Coordinate = extractFigureCoordinate(FigureId.Figure22);
  const figure23Coordinate = extractFigureCoordinate(FigureId.Figure23);
  const figure24Coordinate = extractFigureCoordinate(FigureId.Figure24);
  const figure25Coordinate = extractFigureCoordinate(FigureId.Figure25);
  const figure26Coordinate = extractFigureCoordinate(FigureId.Figure26);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='745.17'
            y='869.85'
          />
          <text className='main__cls-20' transform='translate(760.37 888.13)'>
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
            x='797.66'
            y='869.85'
          />
          <text className='main__cls-20' transform='translate(812.48 888.14)'>
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
            x='850.15'
            y='869.85'
          />
          <text className='main__cls-28' transform='translate(863.25 888.88)'>
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
            x='902.65'
            y='896.1'
          />
          <text className='main__cls-28' transform='translate(923.95 915.12)'>
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
            x='902.65'
            y='922.35'
          />
          <text className='main__cls-28' transform='translate(923.95 941.37)'>
            <tspan x='0' y='0'>
              A
            </tspan>
          </text>
        </g>
        <rect
          className='main__cls-2'
          height='26.25'
          width='52.49'
          x='902.65'
          y='948.6'
        />
        <text className='main__cls-28' transform='translate(911.15 967.61)'>
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
            x='902.65'
            y='974.84'
          />
          <text className='main__cls-28' transform='translate(916.02 993.86)'>
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
            x='902.65'
            y='1001.09'
          />
          <text className='main__cls-28' transform='translate(914.62 1020.42)'>
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
          x='902.65'
          y='1027.34'
        />
        <text className='main__cls-28' transform='translate(911.33 1046.61)'>
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
            x='745.17'
            y='896.1'
          />
          <text className='main__cls-25' transform={figure17Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure17]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='797.66'
            y='896.1'
          />
          <text className='main__cls-25' transform={figure18Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure18]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='850.15'
            y='896.1'
          />
          <text className='main__cls-25' transform={figure19Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure19]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='745.17'
            y='922.35'
          />
          <text className='main__cls-25' transform={figure20Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure20]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='797.66'
            y='922.35'
          />
          <text className='main__cls-25' transform={figure21Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure21]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='850.15'
            y='922.35'
          />
          <text className='main__cls-25' transform={figure22Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure22]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='745.17'
            y='948.6'
          />
          <text className='main__cls-25' transform={figure23Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure23]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='745.17'
            y='974.84'
          />
          <text className='main__cls-25' transform={figure24Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure24]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='745.17'
            y='1001.09'
          />
          <text className='main__cls-25' transform={figure25Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure25]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='745.17'
            y='1027.34'
          />
          <text className='main__cls-25' transform={figure26Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure26]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='902.65'
            y='869.85'
          />
          <line
            className='main__cls-7'
            x1='902.65'
            x2='955.14'
            y1='896.1'
            y2='870.94'
          />
        </g>
      </g>
      <text className='main__cls-25' transform='translate(835.39 841.43)'>
        <tspan className='main__cls-47'>
          <tspan className='main__cls-54' x='0' y='0'>
            L
          </tspan>
          <tspan x='7.23' y='0'>
            V11
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
