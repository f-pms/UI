import { useMonitoringStore } from '~/stores/useMonitoringStore';

import { FiguresCoordinateType } from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import { useExtractFigureCoordinate } from '~/pages/ProductionManagement/helpers/diagrams';

enum FigureId {
  Figure7 = 'figure7',
  Figure8 = 'figure8',
  Figure9 = 'figure9',
  Figure10 = 'figure10',
  Figure11 = 'figure11',
  Figure12 = 'figure12',
  Figure13 = 'figure13',
  Figure14 = 'figure14',
  Figure15 = 'figure15',
  Figure16 = 'figure16',
}

interface Tr30TableProps {
  figuresCoordinate: FiguresCoordinateType;
}

export default function Tr30Table({ figuresCoordinate }: Tr30TableProps) {
  const extractFigureCoordinate = useExtractFigureCoordinate(figuresCoordinate);
  const figure7Coordinate = extractFigureCoordinate(FigureId.Figure7);
  const figure8Coordinate = extractFigureCoordinate(FigureId.Figure8);
  const figure9Coordinate = extractFigureCoordinate(FigureId.Figure9);
  const figure10Coordinate = extractFigureCoordinate(FigureId.Figure10);
  const figure11Coordinate = extractFigureCoordinate(FigureId.Figure11);
  const figure12Coordinate = extractFigureCoordinate(FigureId.Figure12);
  const figure13Coordinate = extractFigureCoordinate(FigureId.Figure13);
  const figure14Coordinate = extractFigureCoordinate(FigureId.Figure14);
  const figure15Coordinate = extractFigureCoordinate(FigureId.Figure15);
  const figure16Coordinate = extractFigureCoordinate(FigureId.Figure16);
  const figureValues = useMonitoringStore((state) => state.figureValues);

  return (
    <g>
      <g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='520.71'
            y='871.23'
          />
          <text className='main__cls-20' transform='translate(535.91 889.51)'>
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
            x='573.2'
            y='871.23'
          />
          <text className='main__cls-20' transform='translate(588.03 889.52)'>
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
            x='625.7'
            y='871.23'
          />
          <text className='main__cls-28' transform='translate(638.79 890.26)'>
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
            x='678.19'
            y='897.48'
          />
          <text className='main__cls-28' transform='translate(699.49 916.5)'>
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
            x='678.19'
            y='923.73'
          />
          <text className='main__cls-28' transform='translate(699.49 942.75)'>
            <tspan x='0' y='0'>
              A
            </tspan>
          </text>
        </g>
        <rect
          className='main__cls-2'
          height='26.25'
          width='52.49'
          x='678.19'
          y='949.97'
        />
        <text className='main__cls-28' transform='translate(686.69 968.99)'>
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
            x='678.19'
            y='976.22'
          />
          <text className='main__cls-28' transform='translate(691.57 995.24)'>
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
            x='678.19'
            y='1002.47'
          />
          <text className='main__cls-28' transform='translate(690.16 1021.8)'>
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
          x='678.19'
          y='1028.71'
        />
        <text className='main__cls-28' transform='translate(686.87 1047.99)'>
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
            x='520.71'
            y='897.48'
          />
          <text className='main__cls-25' transform={figure7Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure7]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='573.2'
            y='897.48'
          />
          <text className='main__cls-25' transform={figure8Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure8]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='625.7'
            y='897.48'
          />
          <text className='main__cls-25' transform={figure9Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure9]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='520.71'
            y='923.73'
          />
          <text className='main__cls-25' transform={figure10Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure10]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='573.2'
            y='923.73'
          />
          <text className='main__cls-25' transform={figure11Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure11]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='52.49'
            x='625.7'
            y='923.73'
          />
          <text className='main__cls-25' transform={figure12Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure12]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='520.71'
            y='949.97'
          />
          <text className='main__cls-25' transform={figure13Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure13]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='520.71'
            y='976.22'
          />
          <text className='main__cls-25' transform={figure14Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure14]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='520.71'
            y='1002.47'
          />
          <text className='main__cls-25' transform={figure15Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure15]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='26.25'
            width='157.48'
            x='520.71'
            y='1028.71'
          />
          <text className='main__cls-25' transform={figure16Coordinate}>
            <tspan x='0' y='0'>
              {figureValues[FigureId.Figure16]}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='26.25'
            width='52.49'
            x='678.19'
            y='871.23'
          />
          <line
            className='main__cls-7'
            x1='678.19'
            x2='730.68'
            y1='897.48'
            y2='872.31'
          />
        </g>
      </g>
      <text className='main__cls-25' transform='translate(590.47 841.24)'>
        <tspan className='main__cls-47'>
          <tspan x='0' y='0'>
            TR30
          </tspan>
        </tspan>
        <tspan className='main__cls-41'>
          <tspan className='main__cls-45' x='-13.36' y='21'>
            P
          </tspan>
          <tspan x='-4.26' y='21'>
            M 5310
          </tspan>
        </tspan>
      </text>
    </g>
  );
}
