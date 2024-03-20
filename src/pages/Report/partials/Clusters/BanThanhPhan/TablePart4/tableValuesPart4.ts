import { ElectricalMeterReadingTableValues } from '~/types';

import { TABLE_PART_4_STATIC_VALUES } from '~/pages/Report/partials/Clusters/BanThanhPhan/TablePart4/staticTableValuesPart4';

export const TABLE_PART_4: ElectricalMeterReadingTableValues = {
  title:
    'IV. Danh mục chốt chỉ số các đồng hồ điện dùng chung cho cả thành phầm và bán thành phẩm (Máy khí nén)',
  total: 0,
  totalOrderNumber: '(14)=(1)*(4+6+8+10)',
  rows: [
    {
      ...TABLE_PART_4_STATIC_VALUES[0],
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
  ],
};
