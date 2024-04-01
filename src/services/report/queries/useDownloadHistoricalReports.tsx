import { storage } from '~/utils';

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
    formattedParams.append('startDate', params.startDate.toISOString());
  }
  if (params.endDate) {
    formattedParams.append('endDate', params.endDate.toISOString());
  }
  if (params.sortBy) {
    formattedParams.append('sortBy', params.sortBy);
  }
  if (params.order) {
    formattedParams.append('order', params.order);
  }

  const downloadWindow = window;

  if (downloadWindow && downloadWindow.document) {
    const token = storage.get('TOKEN');
    downloadWindow.document.cookie = `ACCESS_TOKEN=${token}; path=/`;

    downloadWindow.open(
      'http://localhost:8080/reports/download?' + formattedParams.toString(),
      '_blank',
    );
  }
};
