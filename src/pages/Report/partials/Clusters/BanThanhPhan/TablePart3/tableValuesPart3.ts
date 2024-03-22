import { ElectricalMeterReadingTableValues } from '~/types';

import { getDynamicTableValues } from '~/pages/Report/helpers/getDynamicTableValues';
import { TABLE_PART_3_STATIC_VALUES } from '~/pages/Report/partials/Clusters/BanThanhPhan/TablePart3/staticTableValuesPart3';

export const TABLE_PART_3: ElectricalMeterReadingTableValues = {
  title:
    'III. Danh mục chốt chỉ số các đồng hồ điện không thuộc cụm BTP (nguồn điện đang ở vị trí NMSX keo, cụm chế biến dăm)',
  total: 0,
  totalOrderNumber: '(14)=(1)*(4+6+8+10)',
  rows: [
    {
      ...TABLE_PART_3_STATIC_VALUES[0],
      ...getDynamicTableValues(TABLE_PART_3_STATIC_VALUES[0].equipments.length),
    },
    {
      ...TABLE_PART_3_STATIC_VALUES[1],
      ...getDynamicTableValues(TABLE_PART_3_STATIC_VALUES[1].equipments.length),
    },
  ],
};
