import { useContext } from 'react';

import { Figure, GroupId, MainDiagramContext } from './';

export enum FigureId {
  Figure1 = 'figure1',
  Figure2 = 'figure2',
  Figure3 = 'figure3',
  Figure4 = 'figure4',
  Figure5 = 'figure5',
  Figure6 = 'figure6',
  Figure7 = 'figure7',
  Figure8 = 'figure8',
  Figure9 = 'figure9',
  Figure10 = 'figure10',
}

interface Lv30TableProps {
  initialCoordinates: Figure[];
}

const extractDisplayCoordinate = (
  figures: Figure[],
  figureId: FigureId,
): string => {
  const coordinate = figures.find((figure) => {
    return figure.id === figureId.toString();
  })!.displayCoordinate;
  return `translate (${coordinate.x} ${coordinate.y})`;
};

export default function Lv30Table({ initialCoordinates }: Lv30TableProps) {
  const figureValues = useContext(MainDiagramContext)?.[GroupId.Lv30Table];

  return (
    <g>
      <g>
        <path
          className='main__cls-38'
          d='M619.88,831.58h1.5v10.38h4.97v1.26h-6.48v-11.64Z'
        />
        <path
          className='main__cls-38'
          d='M629.58,843.22l-3.8-11.64h1.62l1.81,5.73c.5,1.57,.93,2.99,1.24,4.35h.03c.33-1.35,.81-2.82,1.33-4.33l1.97-5.75h1.61l-4.16,11.64h-1.66Z'
        />
        <path
          className='main__cls-38'
          d='M636.49,841.48c.43,.28,1.43,.71,2.49,.71,1.95,0,2.56-1.24,2.54-2.18-.02-1.57-1.43-2.25-2.9-2.25h-.85v-1.14h.85c1.11,0,2.5-.57,2.5-1.9,0-.9-.57-1.69-1.97-1.69-.9,0-1.76,.4-2.25,.74l-.4-1.11c.59-.43,1.73-.86,2.94-.86,2.21,0,3.21,1.31,3.21,2.68,0,1.16-.69,2.14-2.07,2.64v.04c1.38,.28,2.5,1.31,2.5,2.88,0,1.8-1.4,3.37-4.09,3.37-1.26,0-2.37-.4-2.92-.76l.41-1.17Z'
        />
        <path
          className='main__cls-38'
          d='M652.45,837.49c0,3.82-1.42,5.92-3.9,5.92-2.19,0-3.68-2.06-3.71-5.77,0-3.77,1.62-5.84,3.9-5.84s3.71,2.11,3.71,5.68Zm-6.1,.17c0,2.92,.9,4.58,2.28,4.58,1.55,0,2.3-1.81,2.3-4.68s-.71-4.58-2.28-4.58c-1.33,0-2.3,1.62-2.3,4.68Z'
        />
        <path
          className='main__cls-28'
          d='M606.14,852.45c.73-.12,1.68-.22,2.88-.22,1.49,0,2.57,.35,3.26,.97,.64,.55,1.02,1.4,1.02,2.44s-.31,1.88-.9,2.49c-.79,.85-2.09,1.28-3.56,1.28-.45,0-.86-.02-1.21-.1v4.66h-1.5v-11.5Zm1.5,5.61c.33,.09,.74,.12,1.24,.12,1.81,0,2.92-.88,2.92-2.49s-1.09-2.28-2.75-2.28c-.66,0-1.16,.05-1.42,.12v4.53Z'
        />
        <path
          className='main__cls-28'
          d='M624.94,858.84c-.09-1.62-.19-3.58-.17-5.03h-.05c-.4,1.37-.88,2.82-1.47,4.42l-2.05,5.65h-1.14l-1.88-5.54c-.55-1.64-1.02-3.14-1.35-4.53h-.04c-.03,1.45-.12,3.4-.22,5.15l-.31,4.99h-1.43l.81-11.64h1.92l1.99,5.63c.48,1.43,.88,2.71,1.17,3.92h.05c.29-1.17,.71-2.45,1.23-3.92l2.07-5.63h1.92l.73,11.64h-1.47l-.29-5.11Z'
        />
        <path
          className='main__cls-28'
          d='M638.85,854.01h-4.28l-.43,2.88c.26-.04,.5-.07,.92-.07,.86,0,1.73,.19,2.42,.6,.88,.5,1.61,1.47,1.61,2.88,0,2.19-1.75,3.83-4.18,3.83-1.23,0-2.26-.35-2.8-.69l.38-1.16c.47,.28,1.38,.62,2.4,.62,1.43,0,2.66-.93,2.66-2.44-.02-1.45-.98-2.49-3.23-2.49-.64,0-1.14,.07-1.55,.12l.73-5.39h5.37v1.28Z'
        />
        <path
          className='main__cls-28'
          d='M641.37,862.21c.43,.28,1.43,.71,2.49,.71,1.95,0,2.56-1.24,2.54-2.18-.02-1.57-1.43-2.25-2.9-2.25h-.85v-1.14h.85c1.11,0,2.5-.57,2.5-1.9,0-.9-.57-1.69-1.97-1.69-.9,0-1.76,.4-2.25,.74l-.4-1.11c.59-.43,1.73-.86,2.94-.86,2.21,0,3.21,1.31,3.21,2.68,0,1.16-.69,2.14-2.07,2.64v.04c1.38,.28,2.5,1.31,2.5,2.88,0,1.8-1.4,3.37-4.09,3.37-1.26,0-2.37-.4-2.92-.76l.41-1.17Z'
        />
        <path
          className='main__cls-28'
          d='M653.17,854.15h-.03l-1.95,1.05-.29-1.16,2.45-1.31h1.3v11.23h-1.47v-9.81Z'
        />
        <path
          className='main__cls-28'
          d='M666.2,858.22c0,3.82-1.42,5.92-3.9,5.92-2.19,0-3.68-2.06-3.71-5.77,0-3.77,1.62-5.84,3.9-5.84s3.71,2.11,3.71,5.68Zm-6.1,.17c0,2.92,.9,4.58,2.28,4.58,1.55,0,2.3-1.81,2.3-4.68s-.71-4.58-2.28-4.58c-1.33,0-2.3,1.62-2.3,4.68Z'
        />
      </g>
      <g>
        <g>
          <rect
            className='main__cls-2'
            height='25.92'
            width='51.84'
            x='532.15'
            y='871.47'
          />
          <text className='main__cls-27' transform='translate(547.17 889.52)'>
            <tspan className='main__cls-34' x='0' y='0'>
              A
            </tspan>
            <tspan x='9.21' y='0'>
              -B
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='25.92'
            width='51.84'
            x='583.99'
            y='871.47'
          />
          <text className='main__cls-27' transform='translate(598.63 889.53)'>
            <tspan className='main__cls-12' x='0' y='0'>
              B
            </tspan>
            <tspan className='main__cls-53' x='8.27' y='0'>
              -
            </tspan>
            <tspan x='13.12' y='0'>
              C
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='25.92'
            width='51.84'
            x='635.82'
            y='871.47'
          />
          <text className='main__cls-26' transform='translate(648.76 890.26)'>
            <tspan className='main__cls-56' x='0' y='0'>
              A
            </tspan>
            <tspan className='main__cls-17' x='10.52' y='0'>
              -
            </tspan>
            <tspan x='16.07' y='0'>
              C
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='25.92'
            width='51.84'
            x='687.66'
            y='897.39'
          />
          <text className='main__cls-26' transform='translate(708.7 916.17)'>
            <tspan x='0' y='0'>
              V
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='25.92'
            width='51.84'
            x='687.66'
            y='923.31'
          />
          <text className='main__cls-26' transform='translate(708.7 942.09)'>
            <tspan x='0' y='0'>
              A
            </tspan>
          </text>
        </g>
        <rect
          className='main__cls-2'
          height='25.92'
          width='51.84'
          x='687.66'
          y='949.23'
        />
        <text className='main__cls-26' transform='translate(696.06 968.01)'>
          <tspan className='main__cls-51' x='0' y='0'>
            c
          </tspan>
          <tspan x='7.64' y='0'>
            osφ
          </tspan>
        </text>
        <g>
          <rect
            className='main__cls-2'
            height='25.92'
            width='51.84'
            x='687.66'
            y='975.15'
          />
          <text className='main__cls-26' transform='translate(700.87 993.93)'>
            <tspan className='main__cls-40' x='0' y='0'>
              K
            </tspan>
            <tspan x='9.62' y='0'>
              W
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='25.92'
            width='51.84'
            x='687.66'
            y='1001.07'
          />
          <text className='main__cls-26' transform='translate(699.48 1020.16)'>
            <tspan x='0' y='0'>
              k
            </tspan>
            <tspan className='main__cls-54' x='8.1' y='0'>
              V
            </tspan>
            <tspan x='16.76' y='0'>
              A
            </tspan>
          </text>
        </g>
        <rect
          className='main__cls-2'
          height='25.92'
          width='51.84'
          x='687.66'
          y='1026.98'
        />
        <text className='main__cls-26' transform='translate(696.23 1046.02)'>
          <tspan x='0' y='0'>
            G
          </tspan>
          <tspan className='main__cls-45' x='11.16' y='0'>
            W
          </tspan>
          <tspan x='25.69' y='0'>
            h
          </tspan>
        </text>
        <g>
          <rect
            className='main__cls-3'
            height='25.92'
            width='51.84'
            x='532.15'
            y='897.39'
          />
          <text
            className='main__cls-23'
            transform={extractDisplayCoordinate(
              initialCoordinates,
              FigureId.Figure1,
            )}
          >
            <tspan x='0' y='0'>
              {figureValues?.figure1}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='25.92'
            width='51.84'
            x='583.99'
            y='897.39'
          />
          <text
            className='main__cls-23'
            transform={extractDisplayCoordinate(
              initialCoordinates,
              FigureId.Figure2,
            )}
          >
            <tspan x='0' y='0'>
              {figureValues?.figure2}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='25.92'
            width='51.84'
            x='635.82'
            y='897.39'
          />
          <text
            className='main__cls-23'
            transform={extractDisplayCoordinate(
              initialCoordinates,
              FigureId.Figure3,
            )}
          >
            <tspan x='0' y='0'>
              {figureValues?.figure3}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='25.92'
            width='51.84'
            x='532.15'
            y='923.31'
          />
          <text
            className='main__cls-23'
            transform={extractDisplayCoordinate(
              initialCoordinates,
              FigureId.Figure4,
            )}
          >
            <tspan x='0' y='0'>
              {figureValues?.figure4}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='25.92'
            width='51.84'
            x='583.99'
            y='923.31'
          />
          <text
            className='main__cls-23'
            transform={extractDisplayCoordinate(
              initialCoordinates,
              FigureId.Figure5,
            )}
          >
            <tspan x='0' y='0'>
              {figureValues?.figure5}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='25.92'
            width='51.84'
            x='635.82'
            y='923.31'
          />
          <text
            className='main__cls-23'
            transform={extractDisplayCoordinate(
              initialCoordinates,
              FigureId.Figure6,
            )}
          >
            <tspan x='0' y='0'>
              {figureValues?.figure6}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='25.92'
            width='155.51'
            x='532.15'
            y='949.23'
          />
          <text
            className='main__cls-23'
            transform={extractDisplayCoordinate(
              initialCoordinates,
              FigureId.Figure7,
            )}
          >
            <tspan x='0' y='0'>
              {figureValues?.figure7}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='25.92'
            width='155.51'
            x='532.15'
            y='975.15'
          />
          <text
            className='main__cls-23'
            transform={extractDisplayCoordinate(
              initialCoordinates,
              FigureId.Figure8,
            )}
          >
            <tspan x='0' y='0'>
              {figureValues?.figure8}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='25.92'
            width='155.51'
            x='532.15'
            y='1001.07'
          />
          <text
            className='main__cls-23'
            transform={extractDisplayCoordinate(
              initialCoordinates,
              FigureId.Figure9,
            )}
          >
            <tspan x='0' y='0'>
              {figureValues?.figure9}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-3'
            height='25.92'
            width='155.51'
            x='532.15'
            y='1026.98'
          />
          <text
            className='main__cls-23'
            transform={extractDisplayCoordinate(
              initialCoordinates,
              FigureId.Figure10,
            )}
          >
            <tspan x='0' y='0'>
              {figureValues?.figure10}
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-2'
            height='25.92'
            width='51.84'
            x='687.66'
            y='871.47'
          />
          <line
            className='main__cls-7'
            x1='687.66'
            x2='739.5'
            y1='897.39'
            y2='872.54'
          />
        </g>
      </g>
    </g>
  );
}
