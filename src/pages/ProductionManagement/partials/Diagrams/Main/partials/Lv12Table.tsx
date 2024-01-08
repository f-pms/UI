import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { FiguresCoordinateType } from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';

enum FigureId {
  Figure27 = 'figure27',
  Figure28 = 'figure28',
  Figure29 = 'figure29',
  Figure30 = 'figure30',
  Figure31 = 'figure31',
  Figure32 = 'figure32',
  Figure33 = 'figure33',
  Figure34 = 'figure34',
  Figure35 = 'figure35',
  Figure36 = 'figure36',
}

export interface Lv12TableProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function Lv12Table({ figuresCoordinate }: Lv12TableProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure27Coordinate = extractFigureCoordinate(FigureId.Figure27);
  const figure28Coordinate = extractFigureCoordinate(FigureId.Figure28);
  const figure29Coordinate = extractFigureCoordinate(FigureId.Figure29);
  const figure30Coordinate = extractFigureCoordinate(FigureId.Figure30);
  const figure31Coordinate = extractFigureCoordinate(FigureId.Figure31);
  const figure32Coordinate = extractFigureCoordinate(FigureId.Figure32);
  const figure33Coordinate = extractFigureCoordinate(FigureId.Figure33);
  const figure34Coordinate = extractFigureCoordinate(FigureId.Figure34);
  const figure35Coordinate = extractFigureCoordinate(FigureId.Figure35);
  const figure36Coordinate = extractFigureCoordinate(FigureId.Figure36);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='969.62'
            y='869.85'
          />
          <text className='main__cls-20' transform='translate(984.83 888.13)'>
            <tspan className='main__cls-38' x='0' y='0'>
              A-B
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='1022.12'
            y='869.85'
          />
          <text className='main__cls-20' transform='translate(1036.94 888.14)'>
            <tspan className='main__cls-30' x='0' y='0'>
              B-C
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='1074.61'
            y='869.85'
          />
          <text className='main__cls-28' transform='translate(1087.71 888.88)'>
            <tspan className='main__cls-57' x='0' y='0'>
              A-C
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='1127.11'
            y='896.1'
          />
          <text className='main__cls-28' transform='translate(1148.41 915.12)'>
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
            x='1127.11'
            y='922.35'
          />
          <text className='main__cls-28' transform='translate(1148.41 941.37)'>
            <tspan x='0' y='0'>
              A
            </tspan>
          </text>
        </g>
        <rect
          className='main__cls-2'
          height='26.25'
          width='52.49'
          x='1127.11'
          y='948.6'
        />
        <text className='main__cls-28' transform='translate(1135.61 967.61)'>
          <tspan className='main__cls-37' x='0' y='0'>
            cosφ
          </tspan>
        </text>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='1127.11'
            y='974.84'
          />
          <text className='main__cls-28' transform='translate(1140.48 993.86)'>
            <tspan className='main__cls-62' x='0' y='0'>
              KW
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='1127.11'
            y='1001.09'
          />
          <text className='main__cls-28' transform='translate(1139.07 1020.42)'>
            <tspan x='0' y='0'>
              kVA
            </tspan>
          </text>
        </g>
        <rect
          className='main__cls-2'
          height='26.25'
          width='52.49'
          x='1127.11'
          y='1027.34'
        />
        <text className='main__cls-28' transform='translate(1135.78 1046.61)'>
          <tspan x='0' y='0'>
            GWh
          </tspan>
        </text>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='969.62'
            y='896.1'
          />
          <text className='main__cls-25' transform={figure27Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure27]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='1022.12'
            y='896.1'
          />
          <text className='main__cls-25' transform={figure28Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure28]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='1074.61'
            y='896.1'
          />
          <text className='main__cls-25' transform={figure29Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure29]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='969.62'
            y='922.35'
          />
          <text className='main__cls-25' transform={figure30Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure30]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='1022.12'
            y='922.35'
          />
          <text className='main__cls-25' transform={figure31Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure31]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='1074.61'
            y='922.35'
          />
          <text className='main__cls-25' transform={figure32Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure32]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='969.62'
            y='948.6'
          />
          <text className='main__cls-25' transform={figure33Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure33]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='969.62'
            y='974.84'
          />
          <text className='main__cls-25' transform={figure34Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure34]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='969.62'
            y='1001.09'
          />
          <text className='main__cls-25' transform={figure35Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure35]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='969.62'
            y='1027.34'
          />
          <text className='main__cls-25' transform={figure36Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure36]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='1127.11'
            y='869.85'
          />
          <line
            className='main__cls-7'
            x1='1127.11'
            x2='1179.6'
            y1='896.1'
            y2='870.94'
          />
        </g>
      </g>
      <text className='main__cls-25' transform='translate(1054.65 840.28)'>
        <tspan className='main__cls-47'>
          <tspan className='main__cls-54' x='0' y='0'>
            LV12
          </tspan>
        </tspan>
        <tspan className='main__cls-41'>
          <tspan className='main__cls-45' x='-13.92' y='21'>
            PM 5310
          </tspan>
        </tspan>
      </text>
    </g>
  );
}
