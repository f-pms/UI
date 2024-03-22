import { ReportKey } from '~/types';

export const REPORT_TYPE_LABELS = {
  [ReportKey.CHE_BIEN_DAM]: 'Chế biến dăm',
  [ReportKey.BAN_THANH_PHAM]: 'Bán thành phẩm',
};

export const UNITS = {
  [ReportKey.CHE_BIEN_DAM]: 'tấn',
  [ReportKey.BAN_THANH_PHAM]: 'm3',
};
