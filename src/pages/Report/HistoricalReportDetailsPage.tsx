import { useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import { useQueryReportDetailsById } from '~/services/report/queries/useQueryReportDetailsById';
import { ReportKey, Shift } from '~/types';

import { UNITS } from '~/pages/Report/helpers/constants';
import {
  BanThanhPhamCluster,
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
  const shift = (searchParams.get('shift') as Shift) ?? Shift.ALL_DAY;
  const { data, isPending } = useQueryReportDetailsById(reportId ?? '', {
    enabled: !!reportId,
  });

  const content = useMemo(() => {
    if (!data) {
      return (
        <Box alignItems='center' textAlign='center'>
          <CircularProgress color='primary' />
        </Box>
      );
    }

    if (shift === Shift.ALL_DAY) {
      return (
        <Total
          data={{
            [Shift.MORNING]: {
              peakTimeValue: data.sums[0]?.SUM_PEAK ?? 0,
              lowTimeValue: data.sums[0]?.SUM_OFFPEAK ?? 0,
              normalTimeValue: data.sums[0]?.SUM_STANDARD ?? 0,
              total: data.sums[0]?.SUM_TOTAL ?? 0,
              totalElectricalUsage: 0,
              totalOutput: 0,
            },
            [Shift.NIGHT]: {
              peakTimeValue: data.sums[1]?.SUM_PEAK ?? 0,
              lowTimeValue: data.sums[1]?.SUM_OFFPEAK ?? 0,
              normalTimeValue: data.sums[1]?.SUM_STANDARD ?? 0,
              total: data.sums[1]?.SUM_TOTAL ?? 0,
              totalElectricalUsage: 0,
              totalOutput: 0,
            },
          }}
          date={data.recordingDate}
          reportKey={data.type.name}
          unit={UNITS[data.type.name]}
        />
      );
    }

    switch (data.type.name) {
      case ReportKey.CHE_BIEN_DAM:
        return <CheBienDamCluster report={data} />;
      case ReportKey.BAN_THANH_PHAM:
        return <BanThanhPhamCluster report={data} />;
      default:
        return <div>No Data</div>;
    }
  }, [shift, data]);

  if (isPending)
    return (
      <Box alignItems='center' textAlign='center'>
        <CircularProgress color='primary' />
      </Box>
    );

  return (
    <Box px={4} py={2}>
      <DetailsPageHeading report={data} />
      <ShiftNavigationTabs />
      <Box mt={4}>{content}</Box>
    </Box>
  );
}
