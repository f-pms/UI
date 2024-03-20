import { StaticValues } from '~/types';
import { formatNumber } from '~/utils';

export const TABLE_PART_3_STATIC_VALUES: StaticValues[] = [
  {
    id: 1,
    locationInfo: 'Trạm TR12: 2000KVA-22KA/0.38KV',
    electricRoom: 'SR01&02 (Băm dăm)',
    electricMeter: ['Tủ LV12'],
    equipments: [
      'Tủ điều khiển kho chứa dăm và băng tải cấp dăm lên hệ thống rửa dăm 2100MC01 & 2100MC02',
      'Tủ điều khiển hệ thống xử lí nước trung tâm',
      'Tủ nguồn UTCĐ, tủ C/S văn phòng xưởng, C/S nhà xưởng, thiết bị lạnh các phòng điện',
    ],
    meterMultiplier: [
      formatNumber(1000000, 0),
      formatNumber(1000000, 0),
      formatNumber(1000000, 0),
    ],
  },
  {
    id: 2,
    locationInfo: 'Trạm TR82: 1000KVA-22KA/0.38KV',
    electricRoom: 'TR82',
    electricMeter: ['Tủ LV82'],
    equipments: [
      'Hệ thống xử lý nước đầu nguồn',
      'Hệ thống xử lý nước thải bãi củi và nước thải SX',
    ],
    meterMultiplier: [formatNumber(1000000, 0), formatNumber(1000000, 0)],
  },
];
