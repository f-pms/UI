import { StaticValues } from '~/types';
import { formatNumber } from '~/utils';

export const TABLE_PART_1_STATIC_VALUES: StaticValues[] = [
  {
    id: 1,
    locationInfo: 'Trạm TR11: 1000KVA-22KA/0.69KV',
    electricRoom: 'TR01&02',
    electricMeter: ['Tủ LV11'],
    equipments: ['Đồng hồ đo tổng tủ điện máy băm'],
  },
  {
    id: 2,
    locationInfo: 'Trạm TR12: 2000KVA-22KV/0.38KV',
    electricRoom: 'TR01&02',
    electricMeter: ['Tủ LV12', 'Tủ điện mặt trời'],
    equipments: [
      'Đồng ho đo tổng tủ điện khu vực chế biến dăm',
      'Năng lượng xanh Kim Tín 05-VP',
    ],
  },
];
