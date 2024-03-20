import { useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { ReportKey, Shift, UNITS } from '~/types';

import { HISTORICAL_REPORT_LIST } from '~/pages/Report/mocks/historicalReportList';
import {
  BanThanhPhanCluster,
  CheBienDamCluster,
  DetailsPageHeading,
  ShiftNavigationTabs,
} from '~/pages/Report/partials';
import Total from '~/pages/Report/partials/Clusters/Total';

import { Box } from '~/components/MuiComponents';

export interface IHistoricalReportDetailsPageProps {}

export function HistoricalReportDetailsPage() {
  const { reportId } = useParams();
  const [searchParams] = useSearchParams();
  const shift = searchParams.get('shift');

  const report = HISTORICAL_REPORT_LIST.find(
    (report) => report.id === parseInt(reportId ?? ''),
  );

  const content = useMemo(() => {
    if (!report) {
      return <div>No Data</div>;
    }

    if (shift === Shift.ALL_DAY) {
      return (
        <Total
          data={{
            [Shift.MORNING]: {
              peakTimeValue: 100,
              lowTimeValue: 200,
              normalTimeValue: 300,
              total: 600,
              totalElectricalUsage: 1000,
              totalOutput: 1000,
            },
            [Shift.NIGHT]: {
              peakTimeValue: 100,
              lowTimeValue: 200,
              normalTimeValue: 300,
              total: 600,
              totalElectricalUsage: 1000,
              totalOutput: 1000,
            },
          }}
          date={report.recordingDate}
          reportKey={report.reportType.value}
          unit={UNITS[report.reportType.value]}
        />
      );
    }

    switch (report.reportType.value) {
      case ReportKey.CHE_BIEN_DAM:
        return <CheBienDamCluster />;
      case ReportKey.BAN_THANH_PHAM:
        return <BanThanhPhanCluster />;
      default:
        return <div>No Data</div>;
    }
  }, [report, shift]);

  return (
    <Box px={4} py={2}>
      <DetailsPageHeading report={report} />
      <ShiftNavigationTabs />
      <Box mt={4}>{content}</Box>
    </Box>
  );
}
