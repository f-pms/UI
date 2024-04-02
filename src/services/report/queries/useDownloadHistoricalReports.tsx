import { storage } from '~/utils';
import { toISOStringWithoutTimeZone } from '~/utils/date';
const baseURL = import.meta.env.VITE_API_URL as string;

import {
  ReportOrder,
  ReportSortBy,
} from '~/pages/Report/helpers/filterReportFrom';

export type DownloadHistoricalReportsParams = {
  typeIds?: number[];
  ids?: number[];
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

  const token = storage.get('TOKEN');

  const headers = new Headers({
    Authorization: `Bearer ${token}`,
  });

  fetch(`${baseURL}reports/download?` + formattedParams.toString(), {
    headers,
  })
    .then((response) => response.blob())
    .then((blob) => {
      const desiredFileName = 'report.zip';

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = desiredFileName;
      link.click();

      link.onload = () => URL.revokeObjectURL(link.href);
    });
};
