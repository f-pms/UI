import { ReportSortBy } from '~/pages/Report/helpers/filterReportFrom';

export type SortOption = {
  label: string;
  value: string;
};

export const SORT_BY_OPTIONS: SortOption[] = [
  {
    label: 'Ngày xuất báo cáo',
    value: ReportSortBy.RECORDING_DATE,
  },
  {
    label: 'Loại chỉ số điện',
    value: ReportSortBy.TYPE,
  },
];

export const ORDER_OPTIONS: SortOption[] = [
  {
    label: 'Sắp xếp tăng dần',
    value: 'asc',
  },
  {
    label: 'Sắp sếp giảm dần',
    value: 'desc',
  },
];
