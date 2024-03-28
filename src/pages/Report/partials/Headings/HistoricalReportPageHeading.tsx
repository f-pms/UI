import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

import { GetHistoricalReportsParams } from '~/services/report/queries/useQueryHistoricalReports';

import { SectionHeading } from '~/components';

interface IHistoricalReportPageHeadingProps {
  params: GetHistoricalReportsParams;
}

export function HistoricalReportPageHeading({
  params,
}: IHistoricalReportPageHeadingProps) {
  return (
    <SectionHeading
      description={`Báo cáo chỉ số điện của cụm sản xuất từ ngày ${format(
        params.startDate,
        'P',
        { locale: vi },
      )} đến ngày ${format(params.endDate, 'P', { locale: vi })}`}
      divider={true}
      header='Lịch sử báo cáo'
    />
  );
}
