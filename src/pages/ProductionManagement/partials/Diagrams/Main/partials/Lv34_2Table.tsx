import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { FiguresCoordinateType } from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';

enum FigureId {
  Figure107 = 'figure107',
  Figure108 = 'figure108',
  Figure109 = 'figure109',
  Figure110 = 'figure110',
  Figure111 = 'figure111',
  Figure112 = 'figure112',
  Figure113 = 'figure113',
  Figure114 = 'figure114',
  Figure115 = 'figure115',
  Figure116 = 'figure116',
}

export interface Lv34_2TableProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function Lv34_2Table({ figuresCoordinate }: Lv34_2TableProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure107Coordinate = extractFigureCoordinate(FigureId.Figure107);
  const figure108Coordinate = extractFigureCoordinate(FigureId.Figure108);
  const figure109Coordinate = extractFigureCoordinate(FigureId.Figure109);
  const figure110Coordinate = extractFigureCoordinate(FigureId.Figure110);
  const figure111Coordinate = extractFigureCoordinate(FigureId.Figure111);
  const figure112Coordinate = extractFigureCoordinate(FigureId.Figure112);
  const figure113Coordinate = extractFigureCoordinate(FigureId.Figure113);
  const figure114Coordinate = extractFigureCoordinate(FigureId.Figure114);
  const figure115Coordinate = extractFigureCoordinate(FigureId.Figure115);
  const figure116Coordinate = extractFigureCoordinate(FigureId.Figure116);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='2404.49'
            y='1121.48'
          />
          <text className='main__cls-20' transform='translate(2419.7 1139.75)'>
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
            x='2456.98'
            y='1121.48'
          />
          <text className='main__cls-20' transform='translate(2471.81 1139.77)'>
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
            x='2509.48'
            y='1121.48'
          />
          <text className='main__cls-28' transform='translate(2522.58 1140.51)'>
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
            x='2561.97'
            y='1147.73'
          />
          <text className='main__cls-28' transform='translate(2583.27 1166.74)'>
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
            x='2561.97'
            y='1173.97'
          />
          <text className='main__cls-28' transform='translate(2583.27 1192.99)'>
            <tspan x='0' y='0'>
              A
            </tspan>
          </text>
        </g>
        <rect
          className='main__cls-2'
          height='26.25'
          width='52.49'
          x='2561.97'
          y='1200.22'
        />
        <text className='main__cls-28' transform='translate(2570.47 1219.24)'>
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
            x='2561.97'
            y='1226.47'
          />
          <text className='main__cls-28' transform='translate(2575.35 1245.49)'>
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
            x='2561.97'
            y='1252.71'
          />
          <text className='main__cls-28' transform='translate(2573.94 1272.05)'>
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
          x='2561.97'
          y='1278.96'
        />
        <text className='main__cls-28' transform='translate(2570.65 1298.23)'>
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
            x='2404.49'
            y='1147.73'
          />
          <text className='main__cls-25' transform={figure107Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure107]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2456.98'
            y='1147.73'
          />
          <text className='main__cls-25' transform={figure108Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure108]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2509.48'
            y='1147.73'
          />
          <text className='main__cls-25' transform={figure109Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure109]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2404.49'
            y='1173.97'
          />
          <text className='main__cls-25' transform={figure110Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure110]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2456.98'
            y='1173.97'
          />
          <text className='main__cls-25' transform={figure111Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure111]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2509.48'
            y='1173.97'
          />
          <text className='main__cls-25' transform={figure112Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure112]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='2404.49'
            y='1200.22'
          />
          <text className='main__cls-25' transform={figure113Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure113]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='2404.49'
            y='1226.47'
          />
          <text className='main__cls-25' transform={figure114Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure114]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='2404.49'
            y='1252.71'
          />
          <text className='main__cls-25' transform={figure115Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure115]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='2404.49'
            y='1278.96'
          />
          <text className='main__cls-25' transform={figure116Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure116]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='2561.97'
            y='1121.48'
          />
          <line
            className='main__cls-7'
            x1='2561.97'
            x2='2614.47'
            y1='1147.73'
            y2='1122.56'
          />
        </g>
      </g>
      <text className='main__cls-25' transform='translate(2484.83 1095.61)'>
        <tspan className='main__cls-47'>
          <tspan className='main__cls-54' x='0' y='0'>
            L
          </tspan>
          <tspan x='7.23' y='0'>
            V34-2
          </tspan>
        </tspan>
        <tspan className='main__cls-41'>
          <tspan className='main__cls-45' x='-6.75' y='21'>
            P
          </tspan>
          <tspan x='2.35' y='21'>
            M 5310
          </tspan>
        </tspan>
      </text>
    </g>
  );
}
