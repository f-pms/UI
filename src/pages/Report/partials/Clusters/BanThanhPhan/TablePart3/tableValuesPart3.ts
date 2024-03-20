import { ElectricalMeterReadingTableValues } from '~/types';

import { TABLE_PART_3_STATIC_VALUES } from '~/pages/Report/partials/Clusters/BanThanhPhan/TablePart3/staticTableValuesPart3';

export const TABLE_PART_3: ElectricalMeterReadingTableValues = {
  title:
    'III. Danh mục chốt chỉ số các đồng hồ điện không thuộc cụm BTP (nguồn điện đang ở vị trí NMSX keo, cụm chế biến dăm)',
  total: 0,
  totalOrderNumber: '(14)=(1)*(4+6+8+10)',
  rows: [
    {
      ...TABLE_PART_3_STATIC_VALUES[0],
      oldElectricValue: [0, 0, 0],
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
      checkpointTotal: [0, 0, 0],
    },
    {
      ...TABLE_PART_3_STATIC_VALUES[1],
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
};
