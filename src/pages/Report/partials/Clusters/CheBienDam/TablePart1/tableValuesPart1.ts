import { ElectricalMeterReadingTableValues } from '~/types';

import { getDynamicTableValues } from '~/pages/Report/helpers/getDynamicTableValues';

import { TABLE_PART_1_STATIC_VALUES } from './staticTableValuesPart1';

export const TABLE_PART_1: ElectricalMeterReadingTableValues = {
  title: 'I. Danh mục chốt chỉ số các đồng hồ điện thuộc cụm chế biến dăm',
  rows: [
    {
      ...TABLE_PART_1_STATIC_VALUES[0],
      ...getDynamicTableValues(TABLE_PART_1_STATIC_VALUES[0].equipments.length),
    },
    {
      ...TABLE_PART_1_STATIC_VALUES[1],
      ...getDynamicTableValues(TABLE_PART_1_STATIC_VALUES[1].equipments.length),
    },
  ],
  total: 0,
  totalOrderNumber: '(14)=(1)*(4+6+8+10)',
};
