import { ReportKey } from '~/types';

export const REPORT_TYPE_LABELS = {
  [ReportKey.CHE_BIEN_DAM]: 'Chế biến dăm',
  [ReportKey.BAN_THANH_PHAM]: 'Bán thành phẩm',
};

export const UNITS = {
  [ReportKey.CHE_BIEN_DAM]: 'tấn',
  [ReportKey.BAN_THANH_PHAM]: 'm3',
};

type EquipmentLabelType = {
  [key in ReportKey]: {
    [key: string]: string;
  };
};
export const EQUIPMENTS_LABELS: EquipmentLabelType = {
  [ReportKey.CHE_BIEN_DAM]: {
    SUM_SPECIFIC_1: 'Đồng hồ đo tổng tủ điện máy băm',
    SUM_SPECIFIC_2: 'Đồng ho đo tổng tủ điện khu vực chế biến dăm',
    SUM_SPECIFIC_3: 'Năng lượng xanh Kim Tín 05-VP',
  },
  [ReportKey.BAN_THANH_PHAM]: {
    SUM_SPECIFIC_1: 'Đồng hồ đo tổng tủ MV30',
    SUM_SPECIFIC_2: 'Đồng hồ đo tổng tủ LV31',
    SUM_SPECIFIC_3: 'Đồng hồ đo tổng tủ LV32',
    SUM_SPECIFIC_4: 'Đồng hồ đo tổng tủ LV33',
    SUM_SPECIFIC_5: 'Đồng hồ đo tổng tủ LV34-1',
    SUM_SPECIFIC_6: 'Đồng hồ đo tổng tủ LV34-2',
    SUM_SPECIFIC_7: 'Đồng hồ đo tổng tủ LV42',
    SUM_SPECIFIC_8: 'Năng lượng xanh Kim Tín 01',
    SUM_SPECIFIC_9: 'Đồng hồ đo tổng tủ LV72',
    SUM_SPECIFIC_10:
      'Tủ điều khiển kho chứa dăm và băng tải cấp dăm lên hệ thống rửa dăm 2100MC01 & 2100MC02',
    SUM_SPECIFIC_11: 'Tủ điều khiển hệ thống xử lí nước trung tâm',
    SUM_SPECIFIC_12:
      'Tủ nguồn UTCĐ, tủ C/S văn phòng xưởng, C/S nhà xưởng, thiết bị lạnh các phòng điện',
    SUM_SPECIFIC_13: 'Hệ thống xử lý nước đầu nguồn',
    SUM_SPECIFIC_14: 'Hệ thống xử lý nước thải bãi củi và nước thải SX',
    SUM_SPECIFIC_15: 'Tủ điện cụm máy khí nén',
  },
};
