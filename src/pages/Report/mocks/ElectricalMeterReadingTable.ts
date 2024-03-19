import { ElectricalMeterReading } from '~/types';

export const ELECTRICAL_METER_READING_TABLE: ElectricalMeterReading = {
  title: 'I. Danh mục chốt chỉ số các đồng hồ điện thuộc cụm chế biến dăm',
  rows: [
    {
      locationInfo: 'Trạm TR11: 1000KVA-22KV/0.69KV',
      electricRoom: 'TR01&02',
      electricMeter: ['Tủ LV11'],
      meterMultiplier: [1000000],
      equipments: ['Đồng hồ đo tổng tủ điện máy dăm'],
      oldElectricValue: [999.999999],
      checkpoints: [
        {
          newElectricValue1: 999.999999,
          newElectricValue2: 34.232143,
          newElectricValue3: 123.2322314,
          newElectricValue4: 43.213456,
        },
      ],
      checkpointTotal: [1243.6],
      total: 3581.3,
    },
    {
      locationInfo: 'Trạm TR12: 1000KVA-22KV/0.69KV',
      meterMultiplier: [1000000, 10000000, 10000000, 10000000],
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
          newElectricValue1: 999.999999,
          newElectricValue2: 34.232143,
          newElectricValue3: 123.2322314,
          newElectricValue4: 43.213456,
        },
        {
          newElectricValue1: 999.999999,
          newElectricValue2: 34.232143,
          newElectricValue3: 123.2322314,
          newElectricValue4: 43.213456,
        },
        {
          newElectricValue1: 999.999999,
          newElectricValue2: 34.232143,
          newElectricValue3: 123.2322314,
          newElectricValue4: 43.213456,
        },
        {
          newElectricValue1: 999.999999,
          newElectricValue2: 34.232143,
          newElectricValue3: 123.2322314,
          newElectricValue4: 43.213456,
        },
      ],
      checkpointTotal: [1243.6, 2098.9, 239.9, 99999.9],
      total: 3581.3,
    },
  ],
};
