import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { FiguresCoordinateType } from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';

enum FigureId {
  Figure97 = 'figure97',
  Figure98 = 'figure98',
  Figure99 = 'figure99',
  Figure100 = 'figure100',
  Figure101 = 'figure101',
  Figure102 = 'figure102',
  Figure103 = 'figure103',
  Figure104 = 'figure104',
  Figure105 = 'figure105',
  Figure106 = 'figure106',
}

export interface Lv33TableProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function Lv33Table({ figuresCoordinate }: Lv33TableProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure97Coordinate = extractFigureCoordinate(FigureId.Figure97);
  const figure98Coordinate = extractFigureCoordinate(FigureId.Figure98);
  const figure99Coordinate = extractFigureCoordinate(FigureId.Figure99);
  const figure100Coordinate = extractFigureCoordinate(FigureId.Figure100);
  const figure101Coordinate = extractFigureCoordinate(FigureId.Figure101);
  const figure102Coordinate = extractFigureCoordinate(FigureId.Figure102);
  const figure103Coordinate = extractFigureCoordinate(FigureId.Figure103);
  const figure104Coordinate = extractFigureCoordinate(FigureId.Figure104);
  const figure105Coordinate = extractFigureCoordinate(FigureId.Figure105);
  const figure106Coordinate = extractFigureCoordinate(FigureId.Figure106);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='2404.17'
            y='869.14'
          />
          <text className='main__cls-20' transform='translate(2419.38 887.42)'>
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
            x='2456.66'
            y='869.14'
          />
          <text className='main__cls-20' transform='translate(2471.49 887.43)'>
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
            x='2509.16'
            y='869.14'
          />
          <text className='main__cls-28' transform='translate(2522.25 888.17)'>
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
            x='2561.65'
            y='895.39'
          />
          <text className='main__cls-28' transform='translate(2582.95 914.41)'>
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
            x='2561.65'
            y='921.64'
          />
          <text className='main__cls-28' transform='translate(2582.95 940.65)'>
            <tspan x='0' y='0'>
              A
            </tspan>
          </text>
        </g>
        <rect
          className='main__cls-2'
          height='26.25'
          width='52.49'
          x='2561.65'
          y='947.88'
        />
        <text className='main__cls-28' transform='translate(2570.15 966.9)'>
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
            x='2561.65'
            y='974.13'
          />
          <text className='main__cls-28' transform='translate(2575.03 993.15)'>
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
            x='2561.65'
            y='1000.38'
          />
          <text className='main__cls-28' transform='translate(2573.62 1019.71)'>
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
          x='2561.65'
          y='1026.62'
        />
        <text className='main__cls-28' transform='translate(2570.33 1045.9)'>
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
            x='2404.17'
            y='895.39'
          />
          <text className='main__cls-25' transform={figure97Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure97]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2456.66'
            y='895.39'
          />
          <text className='main__cls-25' transform={figure98Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure98]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2509.16'
            y='895.39'
          />
          <text className='main__cls-25' transform={figure99Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure99]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2404.17'
            y='921.64'
          />
          <text className='main__cls-25' transform={figure100Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure100]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2456.66'
            y='921.64'
          />
          <text className='main__cls-25' transform={figure101Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure101]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2509.16'
            y='921.64'
          />
          <text className='main__cls-25' transform={figure102Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure102]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='2404.17'
            y='947.88'
          />
          <text className='main__cls-25' transform={figure103Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure103]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='2404.17'
            y='974.13'
          />
          <text className='main__cls-25' transform={figure104Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure104]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='2404.17'
            y='1000.38'
          />
          <text className='main__cls-25' transform={figure105Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure105]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='2404.17'
            y='1026.62'
          />
          <text className='main__cls-25' transform={figure106Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure106]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='2561.65'
            y='869.14'
          />
          <line
            className='main__cls-7'
            x1='2561.65'
            x2='2614.14'
            y1='895.39'
            y2='870.22'
          />
        </g>
      </g>
      <text className='main__cls-25' transform='translate(2489.07 840.28)'>
        <tspan className='main__cls-47'>
          <tspan className='main__cls-54' x='0' y='0'>
            L
          </tspan>
          <tspan x='7.23' y='0'>
            V33
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
