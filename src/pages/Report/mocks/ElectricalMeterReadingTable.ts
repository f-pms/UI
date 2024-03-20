import { ElectricalMeterReading } from '~/types';
import { formatNumber } from '~/utils';

export const ELECTRICAL_METER_READING_TABLE: ElectricalMeterReading = {
  title: 'I. Danh mục chốt chỉ số các đồng hồ điện thuộc cụm chế biến dăm',
  rows: [
    {
      id: 1,
      locationInfo: 'Trạm TR11: 11 1 1 12sad sass',
      electricRoom: 'TR01&02',
      electricMeter: ['Tủ LV11'],
      meterMultiplier: [formatNumber(1000000, 0)],
      equipments: ['Đồng hồ đo tổng tủ điện máy dăm'],
      oldElectricValue: [999.999999],
      checkpoints: [
        {
          checkpoint1: {
            newValue: formatNumber(999.9999243499, 6),
            total: formatNumber(999.999999, 6),
          },
          checkpoint2: {
            newValue: formatNumber(34.232143, 6),
            total: formatNumber(34.232143, 6),
          },
          checkpoint3: {
            newValue: formatNumber(123.2322314, 6),
            total: formatNumber(123.2322314, 6),
          },
          checkpoint4: {
            newValue: formatNumber(43.213456, 6),
            total: formatNumber(43.213456, 6),
          },
        },
      ],
      checkpointTotal: [formatNumber(1243.6, 6)],
      total: 3581.3,
    },
    {
      id: 2,
      locationInfo: 'Trạm TR12: 1000KVA-22KV/0.69KV',
      meterMultiplier: [
        formatNumber(1000000, 0),
        formatNumber(1000000, 0),
        formatNumber(1000000, 0),
        formatNumber(1000000, 0),
      ],
      electricRoom: 'TR01&02',
      electricMeter: [
        'Tủ LV11',
        'Tủ điện mặt trời',
        'Tủ LV11',
        'Tủ điện mặt trời',
      ],
      equipments: [
        'Năng lượng xanh kim tín 05-VP',
        'Năng lượng xanh kim tín 05-VP',
        'Cấp nguồn tổng các tủ: \n- Tủ điện mặt trời \n- Tủ LV11 \n - Tủ điện mặt trời \n- Tủ LV11',
        'Năng lượng xanh kim tín 05-VP năng lượng xanh kim tín 05-VP năng lượng xanh kim tín 05-VP',
      ],
      oldElectricValue: [12.1231313, 421.2312321, 3.2132442, 4.213456],

      checkpoints: [
        {
          checkpoint1: {
            newValue: 999.999999,
            total: 999.999999,
          },
          checkpoint2: {
            newValue: 34.232143,
            total: 34.232143,
          },
          checkpoint3: {
            newValue: 123.2322314,
            total: 123.2322314,
          },
          checkpoint4: {
            newValue: 43.213456,
            total: 43.213456,
          },
        },
        {
          checkpoint1: {
            newValue: 999.999999,
            total: 999.999999,
          },
          checkpoint2: {
            newValue: 34.232143,
            total: 34.232143,
          },
          checkpoint3: {
            newValue: 123.2322314,
            total: 123.2322314,
          },
          checkpoint4: {
            newValue: 43.213456,
            total: 43.213456,
          },
        },
        {
          checkpoint1: {
            newValue: 999.999999,
            total: 999.999999,
          },
          checkpoint2: {
            newValue: 34.232143,
            total: 34.232143,
          },
          checkpoint3: {
            newValue: 123.2322314,
            total: 123.2322314,
          },
          checkpoint4: {
            newValue: 43.213456,
            total: 43.213456,
          },
        },
        {
          checkpoint1: {
            newValue: 999.999999,
            total: 999.999999,
          },
          checkpoint2: {
            newValue: 34.232143,
            total: 34.232143,
          },
          checkpoint3: {
            newValue: 123.2322314,
            total: 123.2322314,
          },
          checkpoint4: {
            newValue: 43.213456,
            total: 43.213456,
          },
        },
      ],
      checkpointTotal: [1243.6, 2098.9, 239.9, 99999.9],
      total: 3581.3,
    },
  ],
};
