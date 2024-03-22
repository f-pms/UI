import { ElectricalMeterReadingTableValues } from '~/types';

import { getDynamicTableValues } from '~/pages/Report/helpers/getDynamicTableValues';
import { TABLE_PART_4_STATIC_VALUES } from '~/pages/Report/partials/Clusters/BanThanhPham/TablePart4/staticTableValuesPart4';

export const TABLE_PART_4: ElectricalMeterReadingTableValues = {
  title:
    'IV. Danh mục chốt chỉ số các đồng hồ điện dùng chung cho cả thành phầm và bán thành phẩm (Máy khí nén)',
  total: 0,
  totalOrderNumber: 17,
  rows: [
    {
      ...TABLE_PART_4_STATIC_VALUES[0],
      ...getDynamicTableValues(TABLE_PART_4_STATIC_VALUES[0].equipments.length),
    },
  ],
};
