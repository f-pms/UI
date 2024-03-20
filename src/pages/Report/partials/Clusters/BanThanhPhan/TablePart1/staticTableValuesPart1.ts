import { StaticValues } from '~/types';
import { formatNumber } from '~/utils';

export const TABLE_PART_1_STATIC_VALUES: StaticValues[] = [
  {
    id: 1,
    locationInfo: 'Trạm TR30: 7000KVA-22/11KV',
    electricRoom: 'Phòng điện TTMV',
    electricMeter: ['MV 30'],
    equipments: ['Đồng hồ đo tổng tủ MV30'],
    meterMultiplier: [formatNumber(1000000, 0)],
  },
  {
    id: 2,
    locationInfo: 'Trạm TR31: 2000KVA-22KV/0.69KV',
    electricRoom: 'SR03-2',
    electricMeter: ['Tủ LV31'],
    equipments: ['Đồng hồ đo tổng tủ LV31'],
    meterMultiplier: [formatNumber(1000000, 0)],
  },
  {
    id: 3,
    locationInfo: 'Trạm TR32: 2000KVA-22KV/0.4KV',
    electricRoom: 'SR03-2',
    electricMeter: ['Tủ LV32'],
    equipments: ['Đồng hồ đo tổng tủ LV32'],
    meterMultiplier: [formatNumber(1000000, 0)],
  },
  {
    id: 4,
    locationInfo: 'Trạm TR33: 2000KVA-22KV/0.4KV',
    electricRoom: 'SR03-2',
    electricMeter: ['Tủ LV33'],
    equipments: ['Đồng hồ đo tổng tủ LV33'],
    meterMultiplier: [formatNumber(1000000, 0)],
  },
  {
    id: 5,
    locationInfo: 'Trạm TR34: 1600KVA-22KV/0.69-0.69KV',
    electricRoom: 'SR03-1',
    electricMeter: ['Tủ LV34', 'Tủ LV34'],
    equipments: ['Đồng hồ đo tổng tủ LV34-1', 'Đồng hồ đo tổng tủ LV34-2'],
    meterMultiplier: [formatNumber(1000000, 0), formatNumber(1000000, 0)],
  },
  {
    id: 6,
    locationInfo: 'Trạm TR42: 3500KVA-22KV/0.4KV',
    electricRoom: 'SR04',
    electricMeter: ['Tủ LV42', 'Tủ điện mặt trời'],
    equipments: ['Đồng hồ đo tổng tủ LV42', 'Năng lượng xanh Kim Tín 01'],
    meterMultiplier: [formatNumber(1000000, 0), formatNumber(1000000, 0)],
  },
  {
    id: 7,
    locationInfo: 'Trạm TR72: 1600KVA-22KV/0.4KV',
    electricRoom: 'SR07',
    electricMeter: ['Tủ LV72'],
    equipments: ['Đồng hồ đo tổng tủ LV72'],
    meterMultiplier: [formatNumber(1000000, 0)],
  },
];
