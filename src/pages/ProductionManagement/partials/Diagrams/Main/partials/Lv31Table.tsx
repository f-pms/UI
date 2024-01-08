import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { FiguresCoordinateType } from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';

enum FigureId {
  Figure77 = 'figure77',
  Figure78 = 'figure78',
  Figure79 = 'figure79',
  Figure80 = 'figure80',
  Figure81 = 'figure81',
  Figure82 = 'figure82',
  Figure83 = 'figure83',
  Figure84 = 'figure84',
  Figure85 = 'figure85',
  Figure86 = 'figure86',
}

export interface Lv31TableProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function Lv31Table({ figuresCoordinate }: Lv31TableProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure77Coordinate = extractFigureCoordinate(FigureId.Figure77);
  const figure78Coordinate = extractFigureCoordinate(FigureId.Figure78);
  const figure79Coordinate = extractFigureCoordinate(FigureId.Figure79);
  const figure80Coordinate = extractFigureCoordinate(FigureId.Figure80);
  const figure81Coordinate = extractFigureCoordinate(FigureId.Figure81);
  const figure82Coordinate = extractFigureCoordinate(FigureId.Figure82);
  const figure83Coordinate = extractFigureCoordinate(FigureId.Figure83);
  const figure84Coordinate = extractFigureCoordinate(FigureId.Figure84);
  const figure85Coordinate = extractFigureCoordinate(FigureId.Figure85);
  const figure86Coordinate = extractFigureCoordinate(FigureId.Figure86);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='1953.1'
            y='869.14'
          />
          <text className='main__cls-20' transform='translate(1968.31 887.42)'>
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
            x='2005.6'
            y='869.14'
          />
          <text className='main__cls-20' transform='translate(2020.42 887.43)'>
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
            x='2058.09'
            y='869.14'
          />
          <text className='main__cls-28' transform='translate(2071.19 888.17)'>
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
            x='2110.58'
            y='895.39'
          />
          <text className='main__cls-28' transform='translate(2131.89 914.41)'>
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
            x='2110.58'
            y='921.64'
          />
          <text className='main__cls-28' transform='translate(2131.89 940.65)'>
            <tspan x='0' y='0'>
              A
            </tspan>
          </text>
        </g>
        <rect
          className='main__cls-2'
          height='26.25'
          width='52.49'
          x='2110.58'
          y='947.88'
        />
        <text className='main__cls-28' transform='translate(2119.09 966.9)'>
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
            x='2110.58'
            y='974.13'
          />
          <text className='main__cls-28' transform='translate(2123.96 993.15)'>
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
            x='2110.58'
            y='1000.38'
          />
          <text className='main__cls-28' transform='translate(2122.55 1019.71)'>
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
          x='2110.58'
          y='1026.62'
        />
        <text className='main__cls-28' transform='translate(2119.26 1045.9)'>
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
            x='1953.1'
            y='895.39'
          />
          <text className='main__cls-25' transform={figure77Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure77]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2005.6'
            y='895.39'
          />
          <text className='main__cls-25' transform={figure78Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure78]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2058.09'
            y='895.39'
          />
          <text className='main__cls-25' transform={figure79Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure79]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='1953.1'
            y='921.64'
          />
          <text className='main__cls-25' transform={figure80Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure80]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2005.6'
            y='921.64'
          />
          <text className='main__cls-25' transform={figure81Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure81]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2058.09'
            y='921.64'
          />
          <text className='main__cls-25' transform={figure82Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure82]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='1953.1'
            y='947.88'
          />
          <text className='main__cls-25' transform={figure83Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure83]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='1953.1'
            y='974.13'
          />
          <text className='main__cls-25' transform={figure84Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure84]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='1953.1'
            y='1000.38'
          />
          <text className='main__cls-25' transform={figure85Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure85]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='1953.1'
            y='1026.62'
          />
          <text className='main__cls-25' transform={figure86Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure86]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='2110.58'
            y='869.14'
          />
          <line
            className='main__cls-7'
            x1='2110.58'
            x2='2163.08'
            y1='895.39'
            y2='870.22'
          />
        </g>
      </g>
      <text className='main__cls-25' transform='translate(2037.05 840.28)'>
        <tspan className='main__cls-47'>
          <tspan className='main__cls-54' x='0' y='0'>
            L
          </tspan>
          <tspan x='7.23' y='0'>
            V31
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
