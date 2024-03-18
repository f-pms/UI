import { HistoricalReportItem } from '~/types';

import { REPORT_TYPE_LIST } from '~/pages/Report/mocks/reportTypeList';

export const HISTORICAL_REPORT_LIST: HistoricalReportItem[] = [
  {
    id: 1,
    reportType: REPORT_TYPE_LIST[0],
    recordingDate: '2021-01-01',
  },
  {
    id: 2,
    reportType: REPORT_TYPE_LIST[0],
    recordingDate: '2021-02-01',
  },
  {
    id: 3,
    reportType: REPORT_TYPE_LIST[0],
    recordingDate: '2021-03-01',
  },
  {
    id: 4,
    reportType: REPORT_TYPE_LIST[1],
    recordingDate: '2021-04-01',
  },
];
