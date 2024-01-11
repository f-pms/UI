import { ReactNode } from 'react';

import { FigureValuesType } from '~/stores/useMonitoringStore';

import { FigureCoordinateType } from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import {
  AllMeterDiagram,
  MainDiagram,
  TR11Diagram,
  TR12Diagram,
  TR30Diagram,
  TR31Diagram,
  TR32Diagram,
  TR33Diagram,
  TR34Diagram,
  TR42Diagram,
  TR52Diagram,
  TR72Diagram,
  TR82Diagram,
} from '~/pages/ProductionManagement/partials/Diagrams';

export type TabItem = {
  value: number;
  label: string;
  blueprint: string;
  channel: string;
  panel: ReactNode;
};

export const DIAGRAMS: TabItem[] = [
  {
    value: 0,
    label: 'Main',
    blueprint: 'main',
    channel: 'main',
    panel: <MainDiagram />,
  },
  {
    value: 1,
    label: 'Trạm TR11',
    blueprint: 'tr11',
    channel: 'tr11',
    panel: <TR11Diagram />,
  },
  {
    value: 2,
    label: 'Trạm TR12',
    blueprint: 'tr12',
    channel: 'tr12',
    panel: <TR12Diagram />,
  },
  {
    value: 3,
    label: 'Trạm TR30',
    blueprint: 'tr30',
    channel: 'tr30',
    panel: <TR30Diagram />,
  },
  {
    value: 4,
    label: 'Trạm TR31',
    blueprint: 'tr31',
    channel: 'tr31',
    panel: <TR31Diagram />,
  },
  {
    value: 5,
    label: 'Trạm TR32',
    blueprint: 'tr32',
    channel: 'tr32',
    panel: <TR32Diagram />,
  },
  {
    value: 6,
    label: 'Trạm TR33',
    blueprint: 'tr33',
    channel: 'tr33',
    panel: <TR33Diagram />,
  },
  {
    value: 7,
    label: 'Trạm TR34',
    blueprint: 'tr34',
    channel: 'tr34',
    panel: <TR34Diagram />,
  },
  {
    value: 8,
    label: 'Trạm TR42',
    blueprint: 'tr42',
    channel: 'tr42',
    panel: <TR42Diagram />,
  },
  {
    value: 9,
    label: 'Trạm TR52',
    blueprint: 'main',
    channel: 'main',
    panel: <TR52Diagram />,
  },
  {
    value: 10,
    label: 'Trạm TR72',
    blueprint: 'main',
    channel: 'main',
    panel: <TR72Diagram />,
  },
  {
    value: 11,
    label: 'Trạm TR82',
    blueprint: 'main',
    channel: 'main',
    panel: <TR82Diagram />,
  },
  {
    value: 12,
    label: 'All Meter',
    blueprint: 'main',
    channel: 'main',
    panel: <AllMeterDiagram />,
  },
];

export const getTabItemByValue = (tabValue: number): TabItem => {
  const diagram = DIAGRAMS.find((d) => d.value === tabValue);
  if (diagram == undefined) {
    console.error('Invalid tab value detected!');
  }
  return diagram!;
};

export interface FiguresProps {
  figuresCoordinateList: FigureCoordinateType[];
  figureValues: FigureValuesType;
}

export function Figures({ figuresCoordinateList, figureValues }: FiguresProps) {
  return figuresCoordinateList.map(({ displayCoordinate, address }) => {
    const xCoordinate = displayCoordinate.x;
    const yCoordinate = displayCoordinate.y;
    return (
      <text
        key={address + xCoordinate + yCoordinate}
        className='main__cls-25'
        transform={`translate(${xCoordinate} ${yCoordinate})`}
      >
        <tspan x='0' y='0'>
          {figureValues[address]}
        </tspan>
      </text>
    );
  });
}
