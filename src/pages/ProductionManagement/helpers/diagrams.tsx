import { ReactNode } from 'react';

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
  blueprintId: number;
  channel: string;
  panel: ReactNode;
};

export const DIAGRAMS: TabItem[] = [
  {
    value: 0,
    label: 'Main',
    blueprintId: 1,
    channel: 'main',
    panel: <MainDiagram />,
  },
  {
    value: 1,
    label: 'Trạm TR11',
    blueprintId: 2,
    channel: 'tr11',
    panel: <TR11Diagram />,
  },
  {
    value: 2,
    label: 'Trạm TR12',
    blueprintId: 3,
    channel: 'tr12',
    panel: <TR12Diagram />,
  },
  {
    value: 3,
    label: 'Trạm TR30',
    blueprintId: 4,
    channel: 'tr30',
    panel: <TR30Diagram />,
  },
  {
    value: 4,
    label: 'Trạm TR31',
    blueprintId: 5,
    channel: 'tr31',
    panel: <TR31Diagram />,
  },
  {
    value: 5,
    label: 'Trạm TR32',
    blueprintId: 6,
    channel: 'tr32',
    panel: <TR32Diagram />,
  },
  {
    value: 6,
    label: 'Trạm TR33',
    blueprintId: 7,
    channel: 'tr33',
    panel: <TR33Diagram />,
  },
  {
    value: 7,
    label: 'Trạm TR34',
    blueprintId: 8,
    channel: 'tr34',
    panel: <TR34Diagram />,
  },
  {
    value: 8,
    label: 'Trạm TR42',
    blueprintId: 9,
    channel: 'tr42',
    panel: <TR42Diagram />,
  },
  {
    value: 9,
    label: 'Trạm TR52',
    blueprintId: 10,
    channel: 'tr52',
    panel: <TR52Diagram />,
  },
  {
    value: 10,
    label: 'Trạm TR72',
    blueprintId: 11,
    channel: 'tr72',
    panel: <TR72Diagram />,
  },
  {
    value: 11,
    label: 'Trạm TR82',
    blueprintId: 12,
    channel: 'tr82',
    panel: <TR82Diagram />,
  },
  {
    value: 12,
    label: 'All Meter',
    blueprintId: 13,
    channel: 'all-meter',
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
