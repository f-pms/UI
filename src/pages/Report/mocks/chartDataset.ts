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

export type ReportDataItem = {
  label: string;
  dataset: string[] | number[];
};

export type ReportData = {
  labelStep: string[];
  data: ReportDataItem[];
};

export const DUMMY_REPORT_LINE_DATA: ReportData = {
  labelStep: [
    '1-1-2024',
    '2-1-2024',
    '3-1-2024',
    '4-1-2024',
    '5-1-2024',
    '6-1-2024',
    '7-1-2024',
  ],
  data: [
    {
      label: 'Chỉ số điện chế biến dăm',
      dataset: [58, 50, 40, 11, 62, 52, 48],
    },
    {
      label: 'Chỉ số điện thành phẩm',
      dataset: [20, 25, 11, 35, 32, 22, 25],
    },
  ],
};

export const DUMMY_REPORT_PIE_DATA: ReportData = {
  labelStep: ['Ca 1', 'Ca 2'],
  data: [
    {
      label: 'Chỉ số điện chế biến dăm',
      dataset: [58, 50],
    },
  ],
};

export type ReportComplexBarData = {
  id: number;
  title: string;
  labelStep: string[];
  data: ReportDataItem[];
};

export const DUMMY_REPORT_BAR_DATA_LIST: ReportComplexBarData[] = [
  {
    id: 1,
    title: 'Chỉ số điện chế biến dăm',
    labelStep: [
      '1-1-2024',
      '2-1-2024',
      '3-1-2024',
      '4-1-2024',
      '5-1-2024',
      '6-1-2024',
      '7-1-2024',
    ],
    data: [
      {
        label: 'Thiết bị 1',
        dataset: [58, 50, 40, 11, 62, 52, 48],
      },
      {
        label: 'Thiết bị 2',
        dataset: [20, 25, 11, 35, 32, 22, 25],
      },
      {
        label: 'Thiết bị 3',
        dataset: [12, 22, 31, 8, 12, 15, 11],
      },
    ],
  },
  {
    id: 2,
    title: 'Chỉ số điện bán thành phần',
    labelStep: [
      '1-1-2024',
      '2-1-2024',
      '3-1-2024',
      '4-1-2024',
      '5-1-2024',
      '6-1-2024',
      '7-1-2024',
    ],
    data: [
      {
        label: 'Thiết bị 1',
        dataset: [22, 33, 22, 26, 24, 31, 41],
      },
      {
        label: 'Thiết bị 2',
        dataset: [12, 15, 9, 21, 16, 7, 14],
      },
      {
        label: 'Thiết bị 3',
        dataset: [16, 11, 25, 11, 6, 12, 11],
      },
    ],
  },
];

export const DUMMY_REPORT_DETAILS_BAR_DATA_LIST: ReportComplexBarData[] = [
  {
    id: 1,
    title: 'Chỉ số điện chế biến dăm',
    labelStep: [
      'Thiết bị 1',
      'Thiết bị 2',
      'Thiết bị 3',
      'Thiết bị 4',
      'Thiết bị 5',
      'Thiết bị 6',
      'Thiết bị 7',
      'Thiết bị 8',
      'Thiết bị 9',
      'Thiết bị 10',
      'Thiết bị 11',
    ],
    data: [
      {
        label: 'Ca sáng (6h00-18h00)',
        dataset: [
          58, 50, 20, 58, 50, 20, 58, 50, 20, 58, 1158.00943434343, 50.3434,
        ],
      },
      {
        label: 'Ca tối (18h00-6h00)',
        dataset: [20, 25, 30, 20, 58, 50, 20, 58, 50, 20, 58],
      },
    ],
  },
];

export const DUMMY_REPORT_DETAILS_LINE_DATA: ReportData = {
  labelStep: ['Ca sáng (6h00-18h00)', 'Ca tối(18h00-6h00)'],
  data: [
    {
      label: 'Điện giờ cao điểm',
      dataset: [158.00943434343, 50.3434],
    },
    {
      label: 'Điện giờ thấp điểm',
      dataset: [20, 251],
    },
    {
      label: 'Điện giờ trung bình',
      dataset: [20, 25],
    },
  ],
};
