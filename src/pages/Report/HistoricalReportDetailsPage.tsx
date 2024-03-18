import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { ReportKey } from '~/types';

import { HISTORICAL_REPORT_LIST } from '~/pages/Report/mocks/historicalReportList';
import {
  BanThanhPhanCluster,
  CheBienDamCluster,
  DetailsPageHeading,
  ShiftNavigationTabs,
} from '~/pages/Report/partials';

import { Box } from '~/components/MuiComponents';

export interface IHistoricalReportDetailsPageProps {}

export function HistoricalReportDetailsPage() {
  const { reportId } = useParams();

  const report = HISTORICAL_REPORT_LIST.find(
    (report) => report.id === parseInt(reportId ?? ''),
  );

  const content = useMemo(() => {
    if (!report) {
      return <div>No Data</div>;
    }
    switch (report.reportType.value) {
      case ReportKey.CHE_BIEN_DAM:
        return <CheBienDamCluster />;
      case 'BAN_THANH_PHAN':
        return <BanThanhPhanCluster />;
      default:
        return <div>No Data</div>;
    }
  }, [report]);

  return (
    <Box px={4} py={2}>
      <DetailsPageHeading report={report} />
      <ShiftNavigationTabs />
      <Box mt={4}>{content}</Box>
    </Box>
  );
}
