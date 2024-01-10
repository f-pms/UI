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
  panel: ReactNode;
};

export const DIAGRAMS: TabItem[] = [
  {
    value: 0,
    label: 'Main',
    panel: <MainDiagram />,
  },
  {
    value: 1,
    label: 'Trạm TR11',
    panel: <TR11Diagram />,
  },
  {
    value: 2,
    label: 'Trạm TR12',
    panel: <TR12Diagram />,
  },
  {
    value: 3,
    label: 'Trạm TR30',
    panel: <TR30Diagram />,
  },
  {
    value: 4,
    label: 'Trạm TR31',
    panel: <TR31Diagram />,
  },
  {
    value: 5,
    label: 'Trạm TR32',
    panel: <TR32Diagram />,
  },
  {
    value: 6,
    label: 'Trạm TR33',
    panel: <TR33Diagram />,
  },
  {
    value: 7,
    label: 'Trạm TR34',
    panel: <TR34Diagram />,
  },
  {
    value: 8,
    label: 'Trạm TR42',
    panel: <TR42Diagram />,
  },
  {
    value: 9,
    label: 'Trạm TR52',
    panel: <TR52Diagram />,
  },
  {
    value: 10,
    label: 'Trạm TR72',
    panel: <TR72Diagram />,
  },
  {
    value: 11,
    label: 'Trạm TR82',
    panel: <TR82Diagram />,
  },
  {
    value: 12,
    label: 'All Meter',
    panel: <AllMeterDiagram />,
  },
];
