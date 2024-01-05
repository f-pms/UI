import { ReactNode } from 'react';

import { FiguresCoordinateType } from '~/pages/ProductionManagement/MonitoringPage';
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
    blueprint: 'main',
    channel: 'main',
    panel: <TR11Diagram />,
  },
  {
    value: 2,
    label: 'Trạm TR12',
    blueprint: 'main',
    channel: 'main',
    panel: <TR12Diagram />,
  },
  {
    value: 3,
    label: 'Trạm TR30',
    blueprint: 'main',
    channel: 'main',
    panel: <TR30Diagram />,
  },
  {
    value: 4,
    label: 'Trạm TR31',
    blueprint: 'main',
    channel: 'main',
    panel: <TR31Diagram />,
  },
  {
    value: 5,
    label: 'Trạm TR32',
    blueprint: 'main',
    channel: 'main',
    panel: <TR32Diagram />,
  },
  {
    value: 6,
    label: 'Trạm TR33',
    blueprint: 'main',
    channel: 'main',
    panel: <TR33Diagram />,
  },
  {
    value: 7,
    label: 'Trạm TR34',
    blueprint: 'main',
    channel: 'main',
    panel: <TR34Diagram />,
  },
  {
    value: 8,
    label: 'Trạm TR42',
    blueprint: 'main',
    channel: 'main',
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

export const useExtractFigureCoordinate = (
  figuresCoordinate: FiguresCoordinateType,
): ((figureId: string) => string) => {
  return (figureId) =>
    `translate (${figuresCoordinate[figureId].x} ${figuresCoordinate[figureId].y})`;
};
