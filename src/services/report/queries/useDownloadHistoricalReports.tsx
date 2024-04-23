import { storage } from '~/utils';
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
    const start = params.startDate;
    start.setHours(0, 0, 0, 0);
    formattedParams.append('startDate', toISOStringWithoutTimeZone(start));
  }
  if (params.endDate) {
    const end = params.endDate;
    end.setHours(23, 59, 0, 0);
    formattedParams.append('endDate', toISOStringWithoutTimeZone(end));
  }
  if (params.sortBy) {
    formattedParams.append('sortBy', params.sortBy);
  }
  if (params.order) {
    formattedParams.append('order', params.order);
  }

  const token = storage.get('TOKEN');

  const headers = new Headers({
    Authorization: `Bearer ${token}`,
  });

  fetch(`${baseURL}reports/download?` + formattedParams.toString(), {
    headers,
  })
    .then((response) => response.blob())
    .then((blob) => {
      const desiredFileName = 'reports.zip';

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = desiredFileName;
      link.click();

      link.onload = () => URL.revokeObjectURL(link.href);
    });
};
