export type ChartData = {
  id: number;
  year: string;
  consumedElectricity: number;
  consumedElectricity2: number;
};

export const DATA_LIST: ChartData[] = [
  {
    id: 1,
    year: '1-1-2024',
    consumedElectricity: 20000,
    consumedElectricity2: 12000,
  },
  {
    id: 2,
    year: '2-1-2024',
    consumedElectricity: 10000,
    consumedElectricity2: 10000,
  },
  {
    id: 3,
    year: '3-1-2024',
    consumedElectricity: 15000,
    consumedElectricity2: 7000,
  },
  {
    id: 4,
    year: '4-1-2024',
    consumedElectricity: 35000,
    consumedElectricity2: 20000,
  },
  {
    id: 5,
    year: '5-1-2024',
    consumedElectricity: 15000,
    consumedElectricity2: 4500,
  },
];
