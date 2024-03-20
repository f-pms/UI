import { ElectricalMeterReadingTableValues } from '~/types';

import { TABLE_PART_1_STATIC_VALUES } from './staticTableValuesPart1';

export const TABLE_PART_1: ElectricalMeterReadingTableValues = {
  title: 'I. Danh mục chốt chỉ số các đồng hồ điện thuộc cụm chế biến dăm',
  rows: [
    {
      ...TABLE_PART_1_STATIC_VALUES[0],
      oldElectricValue: [0],
      checkpoints: [
        {
          checkpoint1: {
            newValue: 0,
            total: 0,
          },
          checkpoint2: {
            newValue: 0,
            total: 0,
          },
          checkpoint3: {
            newValue: 0,
            total: 0,
          },
          checkpoint4: {
            newValue: 0,
            total: 0,
          },
        },
      ],
      checkpointTotal: [0],
    },
    {
      ...TABLE_PART_1_STATIC_VALUES[1],
      oldElectricValue: [0, 0],
      checkpoints: [
        {
          checkpoint1: {
            newValue: 0,
            total: 0,
          },
          checkpoint2: {
            newValue: 0,
            total: 0,
          },
          checkpoint3: {
            newValue: 0,
            total: 0,
          },
          checkpoint4: {
            newValue: 0,
            total: 0,
          },
        },
        {
          checkpoint1: {
            newValue: 0,
            total: 0,
          },
          checkpoint2: {
            newValue: 0,
            total: 0,
          },
          checkpoint3: {
            newValue: 0,
            total: 0,
          },
          checkpoint4: {
            newValue: 0,
            total: 0,
          },
        },
      ],
      checkpointTotal: [0, 0],
    },
  ],
  total: 0,
  totalOrderNumber: '(14)=(1)*(4+6+8+10)',
};
