import { toISOStringWithoutTimeZone } from '~/utils/date';
const baseURL = import.meta.env.VITE_API_URL as string;

import {
  ReportOrder,
  ReportSortBy,
} from '~/pages/Report/helpers/filterReportFrom';

export type DownloadHistoricalReportsParams = {
  typeIds?: number[] | string[];
  ids?: number[] | string[];
  startDate?: Date;
  endDate?: Date;
  sortBy?: ReportSortBy;
  order?: ReportOrder;
};

export const downloadHistoricalReports = async (
  params: DownloadHistoricalReportsParams,
) => {
  const formattedParams = new URLSearchParams();
  if (params.typeIds) {
    formattedParams.append('typeIds', params.typeIds.join(','));
  }
  if (params.ids) {
    formattedParams.append('ids', params.ids.join(','));
  }
  if (params.startDate) {
    formattedParams.append(
      'startDate',
      toISOStringWithoutTimeZone(params.startDate),
    );
  }
  if (params.endDate) {
    formattedParams.append(
      'endDate',
      toISOStringWithoutTimeZone(params.endDate),
    );
  }
  if (params.sortBy) {
    formattedParams.append('sortBy', params.sortBy);
  }
  if (params.order) {
    formattedParams.append('order', params.order);
  }
  const link = document.createElement('a');
  link.href = `${baseURL}/reports/download?` + formattedParams.toString();
  document.body.appendChild(link);
  link.click();
};
