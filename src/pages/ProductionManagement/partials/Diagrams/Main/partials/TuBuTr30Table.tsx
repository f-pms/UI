import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';
import { FiguresCoordinateType } from '~/pages/ProductionManagement/MonitoringPage';

enum FigureId {
  Figure0 = 'figure0',
  Figure1 = 'figure1',
  Figure2 = 'figure2',
  Figure3 = 'figure3',
  Figure4 = 'figure4',
  Figure5 = 'figure5',
  Figure6 = 'figure6',
}

export interface TuBuTr30TableProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function TuBuTr30Table({
  figuresCoordinate,
}: TuBuTr30TableProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure0Coordinate = extractFigureCoordinate(FigureId.Figure0);
  const figure1Coordinate = extractFigureCoordinate(FigureId.Figure1);
  const figure2Coordinate = extractFigureCoordinate(FigureId.Figure2);
  const figure3Coordinate = extractFigureCoordinate(FigureId.Figure3);
  const figure4Coordinate = extractFigureCoordinate(FigureId.Figure4);
  const figure5Coordinate = extractFigureCoordinate(FigureId.Figure5);
  const figure6Coordinate = extractFigureCoordinate(FigureId.Figure6);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <g>
        <g>
          <g>
            <rect
              className='main__cls-2'
              height='26.25'
              width='52.49'
              x='294.89'
              y='1113.18'
            />
            <text className='main__cls-20' transform='translate(310.1 1131.45)'>
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
              x='347.38'
              y='1113.18'
            />
            <text
              className='main__cls-20'
              transform='translate(362.21 1131.47)'
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
              x='399.88'
              y='1113.18'
            />
            <text className='main__cls-28' transform='translate(412.98 1132.2)'>
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
              x='452.37'
              y='1139.42'
            />
            <text
              className='main__cls-28'
              transform='translate(473.67 1158.44)'
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
              x='452.37'
              y='1165.67'
            />
            <text
              className='main__cls-28'
              transform='translate(473.67 1184.69)'
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
            x='452.37'
            y='1191.92'
          />
          <text className='main__cls-28' transform='translate(460.87 1210.94)'>
            <tspan className='main__cls-37' x='0' y='0'>
              c
            </tspan>
            <tspan x='7.73' y='0'>
              osφ
            </tspan>
          </text>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='294.89'
              y='1139.42'
            />
            <text className='main__cls-25' transform={figure0Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure0]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='347.38'
              y='1139.42'
            />
            <text className='main__cls-25' transform={figure1Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure1]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='399.88'
              y='1139.42'
            />
            <text className='main__cls-25' transform={figure2Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure2]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='294.89'
              y='1165.67'
            />
            <text className='main__cls-25' transform={figure3Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure3]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='347.38'
              y='1165.67'
            />
            <text className='main__cls-25' transform={figure4Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure4]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='52.49'
              x='399.88'
              y='1165.67'
            />
            <text className='main__cls-25' transform={figure5Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure5]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-3'
              height='26.25'
              width='157.48'
              x='294.89'
              y='1191.92'
            />
            <text className='main__cls-25' transform={figure6Coordinate}>
              <tspan x='0' y='0'>
                {figureValues[FigureId.Figure6]}
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-2'
              height='26.25'
              width='52.49'
              x='452.37'
              y='1113.18'
            />
            <line
              className='main__cls-7'
              x1='452.37'
              x2='504.87'
              y1='1139.42'
              y2='1114.26'
            />
          </g>
        </g>
        <text className='main__cls-25' transform='translate(359.92 1078.3)'>
          <tspan className='main__cls-47'>
            <tspan className='main__cls-60' x='0' y='0'>
              T
            </tspan>
            <tspan x='7.91' y='0'>
              ụ bù
            </tspan>
            <tspan className='main__cls-18' x='40.86' y='0'>
              {' '}
            </tspan>
            <tspan x='43.85' y='0'>
              TR30
            </tspan>
          </tspan>
          <tspan className='main__cls-41'>
            <tspan className='main__cls-45' x='8.57' y='21'>
              P
            </tspan>
            <tspan x='17.66' y='21'>
              M 5310
            </tspan>
          </tspan>
        </text>
      </g>
    </g>
  );
}
