import { ElectricalMeterReadingTableValues } from '~/types';

import { getDynamicTableValues } from '~/pages/Report/helpers/getDynamicTableValues';
import { TABLE_PART_2_STATIC_VALUES } from '~/pages/Report/partials/Clusters/BanThanhPhan/TablePart2/staticTableValuesPart2';

export const TABLE_PART_2: ElectricalMeterReadingTableValues = {
  title:
    'II. Danh mục chốt chỉ số các đồng hồ điện không thuộc cụm BTP (nguồn điện đang dùng chung với cụm BTP) => Công đoạn TP',
  total: 0,
  totalOrderNumber: '(14)=(1)*(4+6+8+10)',
  rows: [
    {
      ...TABLE_PART_2_STATIC_VALUES[0],
      ...getDynamicTableValues(TABLE_PART_2_STATIC_VALUES[0].equipments.length),
    },
  ],
};
