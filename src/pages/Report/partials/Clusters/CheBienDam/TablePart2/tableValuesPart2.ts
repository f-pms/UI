import { ElectricalMeterReadingTableValues } from '~/types';

import { getDynamicTableValues } from '~/pages/Report/helpers/getDynamicTableValues';
import { TABLE_PART_2_STATIC_VALUES } from '~/pages/Report/partials/Clusters/CheBienDam/TablePart2/staticTableValuesPart2';

export const TABLE_PART_2: ElectricalMeterReadingTableValues = {
  title:
    'II. Danh mục chốt chỉ số các đồng hồ điện không thuộc cụm chế biến dăm (nguồn điện dùng chung với cụm chế biến dăm của công đoạn BTP và điện dùng chung)',
  rows: [
    {
      ...TABLE_PART_2_STATIC_VALUES[0],
      ...getDynamicTableValues(TABLE_PART_2_STATIC_VALUES[0].equipments.length),
    },
  ],
  total: 0,
  totalOrderNumber: '(15)=(1)*(4+6+8+10)',
};
