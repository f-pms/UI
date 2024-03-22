import { ReportKey, ReportType } from '~/types';

export const REPORT_TYPE_LIST: ReportType[] = [
  {
    id: 1,
    label: 'Chỉ số điện chế biến dăm',
    name: ReportKey.CHE_BIEN_DAM,
  },
  {
    id: 2,
    label: 'Chỉ số điện bán thành phẩm',
    name: ReportKey.BAN_THANH_PHAM,
  },
];
