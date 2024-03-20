import { ReportKey } from '~/types';

export const EQUIPMENTS_TABLE = {
  [ReportKey.CHE_BIEN_DAM]: {
    rows: [
      {
        name: 'Trạm TR11: 1000KVA-22KV/0.96KV',
        equipments: ['Tủ điện điều khiển motor băm 1220MC01'],
      },
      {
        name: 'Trạm TR12: 2000KVA-22KV/0.38KV',
        equipments: [
          'Tủ điền khiển dây chuyền băm củi keo 13000MC01',
          'Tủ điều khiển dây chuyền bóc vỏ cây 1000MC01',
          'Tủ điều khiển dây chuyền máy băm và băng tải cấp dăm vào kho 12000MC01',
          'Tủ điều khiển dây chuyền xử lí vỏ cây 1900MC01',
          'Tủ cấp nguồn cầu trục nhà xưởng',
          'Cấp nguồn cho UPS(Tủ 1000PLC01)',
          'Máy lạnh, CS xưởng',
        ],
      },
    ],
    title: 'III. Phạm vi thiết bị công đoạn sản xuất keo',
  },
  [ReportKey.BAN_THANH_PHAM]: {
    rows: [
      {
        name: 'Trạm TR12: 2000KVA-22KV/0.38KV khu vực băm dăm',
        equipments: [
          'Tủ điều khiển kho chứa dăm và băng tải cấp dăm lên hệ thống rửa dăm 2100MC01 & 2100MC02',
          'Tủ điều khiển hệ thống xử lí nước trung tâm',
          'Tủ nguồn UTCĐ, tủ C/S văn phòng xưởng, C/S nhà xưởng, thiết bị lạnh các phòng điện',
        ],
      },
      {
        name: 'Trạm TR82: 1000KVA-22KA/0.38KV',
        equipments: [
          'Hệ thống xử lý nước đầu nguồn',
          'Hệ thống xử lý nước thải bãi củi và nước thải SX',
        ],
      },
      {
        name: 'Trạm TR52: 3000KVA-22KA/0.4KV',
        equipments: ['Máy nén khí: sử dụng cho thành phẩm và bán thành phẩm'],
      },
      {
        name: 'Trạm TR30: 7000KVA-22/11KV',
        equipments: ['Đồng hồ đo tổng tủ MV30'],
      },
      {
        name: 'Trạm TR31: 2000KVA-22KV/0.69KV',
        equipments: ['Đồng hồ đo tổng tủ LV31'],
      },
      {
        name: 'Trạm TR32: 2000KVA-22KV/0.4KV',
        equipments: ['Đồng hồ đo tổng tủ LV32'],
      },
      {
        name: 'Trạm TR33: 2000KVA-22KV/0.4KV',
        equipments: ['Đồng hồ đo tổng tủ LV33'],
      },
      {
        name: 'Trạm TR34: 1600KVA-22KV/0.69-0.69KV',
        equipments: ['Đồng hồ đo tổng tủ LV34-1', 'Đồng hồ đo tổng tủ LV34-2'],
      },
      {
        name: 'Trạm TR42: 3500KVA-22KV/0.4KV',
        equipments: ['Đồng hồ đo tổng tủ LV42', 'Năng lượng xanh Kim Tín 01'],
      },
      {
        name: 'Trạm TR72: 1600KVA-22KV/0.4KV',
        equipments: ['Đồng hồ đo tổng tủ LV72'],
      },
    ],
    title: 'III. Phạm vi thiết bị công đoạn bán thành phẩm',
  },
};
