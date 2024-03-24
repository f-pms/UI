import { useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import { useQueryReportDetailsById } from '~/services/report/useQueryReportDetailsById';
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
