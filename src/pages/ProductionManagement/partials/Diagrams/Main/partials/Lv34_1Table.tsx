import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { FiguresCoordinateType } from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';

enum FigureId {
  Figure117 = 'figure117',
  Figure118 = 'figure118',
  Figure119 = 'figure119',
  Figure120 = 'figure120',
  Figure121 = 'figure121',
  Figure122 = 'figure122',
  Figure123 = 'figure123',
  Figure124 = 'figure124',
  Figure125 = 'figure125',
  Figure126 = 'figure126',
}

export interface Lv34_1TableProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function Lv34_1Table({ figuresCoordinate }: Lv34_1TableProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure117Coordinate = extractFigureCoordinate(FigureId.Figure117);
  const figure118Coordinate = extractFigureCoordinate(FigureId.Figure118);
  const figure119Coordinate = extractFigureCoordinate(FigureId.Figure119);
  const figure120Coordinate = extractFigureCoordinate(FigureId.Figure120);
  const figure121Coordinate = extractFigureCoordinate(FigureId.Figure121);
  const figure122Coordinate = extractFigureCoordinate(FigureId.Figure122);
  const figure123Coordinate = extractFigureCoordinate(FigureId.Figure123);
  const figure124Coordinate = extractFigureCoordinate(FigureId.Figure124);
  const figure125Coordinate = extractFigureCoordinate(FigureId.Figure125);
  const figure126Coordinate = extractFigureCoordinate(FigureId.Figure126);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='2177.88'
            y='1121.48'
          />
          <text className='main__cls-20' transform='translate(2193.09 1139.75)'>
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
            x='2230.37'
            y='1121.48'
          />
          <text className='main__cls-20' transform='translate(2245.2 1139.77)'>
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
            x='2282.87'
            y='1121.48'
          />
          <text className='main__cls-28' transform='translate(2295.97 1140.51)'>
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
            x='2335.36'
            y='1147.73'
          />
          <text className='main__cls-28' transform='translate(2356.67 1166.74)'>
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
            x='2335.36'
            y='1173.97'
          />
          <text className='main__cls-28' transform='translate(2356.67 1192.99)'>
            <tspan x='0' y='0'>
              A
            </tspan>
          </text>
        </g>
        <rect
          className='main__cls-2'
          height='26.25'
          width='52.49'
          x='2335.36'
          y='1200.22'
        />
        <text className='main__cls-28' transform='translate(2343.87 1219.24)'>
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
            x='2335.36'
            y='1226.47'
          />
          <text className='main__cls-28' transform='translate(2348.74 1245.49)'>
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
            x='2335.36'
            y='1252.71'
          />
          <text className='main__cls-28' transform='translate(2347.33 1272.05)'>
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
          x='2335.36'
          y='1278.96'
        />
        <text className='main__cls-28' transform='translate(2344.04 1298.23)'>
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
            x='2177.88'
            y='1147.73'
          />
          <text className='main__cls-25' transform={figure117Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure117]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2230.37'
            y='1147.73'
          />
          <text className='main__cls-25' transform={figure118Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure118]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2282.87'
            y='1147.73'
          />
          <text className='main__cls-25' transform={figure119Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure119]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2177.88'
            y='1173.97'
          />
          <text className='main__cls-25' transform={figure120Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure120]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2230.37'
            y='1173.97'
          />
          <text className='main__cls-25' transform={figure121Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure121]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='2282.87'
            y='1173.97'
          />
          <text className='main__cls-25' transform={figure122Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure122]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='2177.88'
            y='1200.22'
          />
          <text className='main__cls-25' transform={figure123Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure123]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='2177.88'
            y='1226.47'
          />
          <text className='main__cls-25' transform={figure124Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure124]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='2177.88'
            y='1252.71'
          />
          <text className='main__cls-25' transform={figure125Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure125]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='2177.88'
            y='1278.96'
          />
          <text className='main__cls-25' transform={figure126Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure126]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='2335.36'
            y='1121.48'
          />
          <line
            className='main__cls-7'
            x1='2335.36'
            x2='2387.86'
            y1='1147.73'
            y2='1122.56'
          />
        </g>
      </g>
      <text className='main__cls-25' transform='translate(2257.9 1095.61)'>
        <tspan className='main__cls-47'>
          <tspan className='main__cls-54' x='0' y='0'>
            L
          </tspan>
          <tspan x='7.23' y='0'>
            V34-1
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
