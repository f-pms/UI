import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';
import { FiguresCoordinateType } from '~/pages/ProductionManagement/MonitoringPage';

enum FigureId {
  Figure87 = 'figure87',
  Figure88 = 'figure88',
  Figure89 = 'figure89',
  Figure90 = 'figure90',
  Figure91 = 'figure91',
  Figure92 = 'figure92',
  Figure93 = 'figure93',
  Figure94 = 'figure94',
  Figure95 = 'figure95',
  Figure96 = 'figure96',
}

export interface Lv32TableProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function Lv32Table({ figuresCoordinate }: Lv32TableProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure87Coordinate = extractFigureCoordinate(FigureId.Figure87);
  const figure88Coordinate = extractFigureCoordinate(FigureId.Figure88);
  const figure89Coordinate = extractFigureCoordinate(FigureId.Figure89);
  const figure90Coordinate = extractFigureCoordinate(FigureId.Figure90);
  const figure91Coordinate = extractFigureCoordinate(FigureId.Figure91);
  const figure92Coordinate = extractFigureCoordinate(FigureId.Figure92);
  const figure93Coordinate = extractFigureCoordinate(FigureId.Figure93);
  const figure94Coordinate = extractFigureCoordinate(FigureId.Figure94);
  const figure95Coordinate = extractFigureCoordinate(FigureId.Figure95);
  const figure96Coordinate = extractFigureCoordinate(FigureId.Figure96);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='2177.56'
            y='869.14'
          />
          <text className='main__cls-20' transform='translate(2192.77 887.42)'>
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
            x='2230.05'
            y='869.14'
          />
          <text className='main__cls-20' transform='translate(2244.88 887.43)'>
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
            x='2282.55'
            y='869.14'
          />
          <text className='main__cls-28' transform='translate(2295.65 888.17)'>
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
            x='2335.04'
            y='895.39'
          />
          <text className='main__cls-28' transform='translate(2356.35 914.41)'>
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
            x='2335.04'
            y='921.64'
          />
          <text className='main__cls-28' transform='translate(2356.35 940.65)'>
            <tspan x='0' y='0'>
              A
            </tspan>
          </text>
        </g>
        <rect
          className='main__cls-2'
          height='26.25'
          width='52.49'
          x='2335.04'
          y='947.88'
        />
        <text className='main__cls-28' transform='translate(2343.55 966.9)'>
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
            x='2335.04'
            y='974.13'
          />
          <text className='main__cls-28' transform='translate(2348.42 993.15)'>
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
            x='2335.04'
            y='1000.38'
          />
          <text className='main__cls-28' transform='translate(2347.01 1019.71)'>
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
          x='2335.04'
          y='1026.62'
        />
        <text className='main__cls-28' transform='translate(2343.72 1045.9)'>
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
            x='2177.56'
            y='895.39'
          />
          <text className='main__cls-25' transform={figure87Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure87]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2230.05'
            y='895.39'
          />
          <text className='main__cls-25' transform={figure88Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure88]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2282.55'
            y='895.39'
          />
          <text className='main__cls-25' transform={figure89Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure89]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2177.56'
            y='921.64'
          />
          <text className='main__cls-25' transform={figure90Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure90]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2230.05'
            y='921.64'
          />
          <text className='main__cls-25' transform={figure91Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure91]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2282.55'
            y='921.64'
          />
          <text className='main__cls-25' transform={figure92Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure92]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='2177.56'
            y='947.88'
          />
          <text className='main__cls-25' transform={figure93Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure93]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='2177.56'
            y='974.13'
          />
          <text className='main__cls-25' transform={figure94Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure94]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='2177.56'
            y='1000.38'
          />
          <text className='main__cls-25' transform={figure95Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure95]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='2177.56'
            y='1026.62'
          />
          <text className='main__cls-25' transform={figure96Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure96]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='2335.04'
            y='869.14'
          />
          <line
            className='main__cls-7'
            x1='2335.04'
            x2='2387.54'
            y1='895.39'
            y2='870.22'
          />
        </g>
      </g>
      <text className='main__cls-25' transform='translate(2265.44 840.28)'>
        <tspan className='main__cls-47'>
          <tspan className='main__cls-54' x='0' y='0'>
            L
          </tspan>
          <tspan x='7.23' y='0'>
            V32
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
