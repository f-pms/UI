import { ElectricalMeterReadingTableValues } from '~/types';

import { TABLE_PART_1_STATIC_VALUES } from '~/pages/Report/partials/Clusters/BanThanhPham/TablePart1/staticTableValuesPart1';

import { getDynamicTableValues } from './../../../../helpers/getDynamicTableValues';

export const TABLE_PART_1: ElectricalMeterReadingTableValues = {
  title:
    'I. Danh mục chốt chỉ số các đồng hồ điện thuộc cụm bán thành phẩm (BTP)',
  total: 0,
  totalOrderNumber: 14,
  rows: [
    {
      ...TABLE_PART_1_STATIC_VALUES[0],
      ...getDynamicTableValues(TABLE_PART_1_STATIC_VALUES[0].equipments.length),
    },
    {
      ...TABLE_PART_1_STATIC_VALUES[1],
      ...getDynamicTableValues(TABLE_PART_1_STATIC_VALUES[1].equipments.length),
    },
    {
      ...TABLE_PART_1_STATIC_VALUES[2],
      ...getDynamicTableValues(TABLE_PART_1_STATIC_VALUES[2].equipments.length),
    },
    {
      ...TABLE_PART_1_STATIC_VALUES[3],
      ...getDynamicTableValues(TABLE_PART_1_STATIC_VALUES[3].equipments.length),
    },
    {
      ...TABLE_PART_1_STATIC_VALUES[4],
      ...getDynamicTableValues(TABLE_PART_1_STATIC_VALUES[4].equipments.length),
    },
    {
      ...TABLE_PART_1_STATIC_VALUES[5],
      ...getDynamicTableValues(TABLE_PART_1_STATIC_VALUES[5].equipments.length),
    },
    {
      ...TABLE_PART_1_STATIC_VALUES[6],
      ...getDynamicTableValues(TABLE_PART_1_STATIC_VALUES[6].equipments.length),
    },
  ],
};
