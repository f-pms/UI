import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';
import { FiguresCoordinateType } from '~/pages/ProductionManagement/MonitoringPage';

enum FigureId {
  Figure57 = 'figure57',
  Figure58 = 'figure58',
  Figure59 = 'figure59',
  Figure60 = 'figure60',
  Figure61 = 'figure61',
  Figure62 = 'figure62',
  Figure63 = 'figure63',
  Figure64 = 'figure64',
  Figure65 = 'figure65',
  Figure66 = 'figure66',
}

export interface Lv72TableProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function Lv72Table({ figuresCoordinate }: Lv72TableProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure57Coordinate = extractFigureCoordinate(FigureId.Figure57);
  const figure58Coordinate = extractFigureCoordinate(FigureId.Figure58);
  const figure59Coordinate = extractFigureCoordinate(FigureId.Figure59);
  const figure60Coordinate = extractFigureCoordinate(FigureId.Figure60);
  const figure61Coordinate = extractFigureCoordinate(FigureId.Figure61);
  const figure62Coordinate = extractFigureCoordinate(FigureId.Figure62);
  const figure63Coordinate = extractFigureCoordinate(FigureId.Figure63);
  const figure64Coordinate = extractFigureCoordinate(FigureId.Figure64);
  const figure65Coordinate = extractFigureCoordinate(FigureId.Figure65);
  const figure66Coordinate = extractFigureCoordinate(FigureId.Figure66);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='1498.29'
            y='870.05'
          />
          <text className='main__cls-20' transform='translate(1513.5 888.33)'>
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
            x='1550.79'
            y='870.05'
          />
          <text className='main__cls-20' transform='translate(1565.61 888.34)'>
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
            x='1603.28'
            y='870.05'
          />
          <text className='main__cls-28' transform='translate(1616.38 889.08)'>
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
            x='1655.77'
            y='896.3'
          />
          <text className='main__cls-28' transform='translate(1677.08 915.32)'>
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
            x='1655.77'
            y='922.55'
          />
          <text className='main__cls-28' transform='translate(1677.08 941.56)'>
            <tspan x='0' y='0'>
              A
            </tspan>
          </text>
        </g>
        <rect
          className='main__cls-2'
          height='26.25'
          width='52.49'
          x='1655.77'
          y='948.79'
        />
        <text className='main__cls-28' transform='translate(1664.28 967.81)'>
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
            x='1655.77'
            y='975.04'
          />
          <text className='main__cls-28' transform='translate(1669.15 994.06)'>
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
            x='1655.77'
            y='1001.29'
          />
          <text className='main__cls-28' transform='translate(1667.74 1020.62)'>
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
          x='1655.77'
          y='1027.53'
        />
        <text className='main__cls-28' transform='translate(1664.45 1046.81)'>
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
            x='1498.29'
            y='896.3'
          />
          <text className='main__cls-25' transform={figure57Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure57]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='1550.79'
            y='896.3'
          />
          <text className='main__cls-25' transform={figure58Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure58]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='1603.28'
            y='896.3'
          />
          <text className='main__cls-25' transform={figure59Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure59]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='1498.29'
            y='922.55'
          />
          <text className='main__cls-25' transform={figure60Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure60]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='1550.79'
            y='922.55'
          />
          <text className='main__cls-25' transform={figure61Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure61]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='1603.28'
            y='922.55'
          />
          <text className='main__cls-25' transform={figure62Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure62]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='1498.29'
            y='948.79'
          />
          <text className='main__cls-25' transform={figure63Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure63]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='1498.29'
            y='975.04'
          />
          <text className='main__cls-25' transform={figure64Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure64]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='1498.29'
            y='1001.29'
          />
          <text className='main__cls-25' transform={figure65Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure65]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='1498.29'
            y='1027.53'
          />
          <text className='main__cls-25' transform={figure66Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure66]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='1655.77'
            y='870.05'
          />
          <line
            className='main__cls-7'
            x1='1655.77'
            x2='1708.27'
            y1='896.3'
            y2='871.13'
          />
        </g>
      </g>
      <text className='main__cls-25' transform='translate(1586.54 840.28)'>
        <tspan className='main__cls-47'>
          <tspan className='main__cls-54' x='0' y='0'>
            L
          </tspan>
          <tspan x='7.23' y='0'>
            V72
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
