import { ReportKey, ReportType } from '~/types';

export const REPORT_TYPE_LIST: ReportType[] = [
  {
    id: 1,
    name: 'Chỉ số điện chế biến dăm',
    value: ReportKey.CHE_BIEN_DAM,
  },
  {
    id: 2,
    name: 'Chỉ số điện bán thành phần',
    value: ReportKey.BAN_THANH_PHAN,
  },
];
