import { useContext } from 'react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Stack } from '@mui/material';

import { downloadHistoricalReports } from '~/services/report/queries/useDownloadHistoricalReports';
import { Shift } from '~/types';

import { AuthContext } from '~/pages/Auth/context/AuthContext';

import { SectionHeading } from '~/components';
import {
  FileDownloadOutlinedIcon,
  InsertChartOutlinedIcon,
} from '~/components/Icons';

export interface IStatisticReportDetailsPageHeadingProps {
  recordingDate?: string;
}

export function StatisticReportDetailsPageHeading(
  props: Readonly<IStatisticReportDetailsPageHeadingProps>,
) {
  const { recordingDate } = props;
  const { isAdmin } = useContext(AuthContext);
  const { reportId } = useParams();
  const navigate = useNavigate();

  const handleDownloadReport = () => {
    if (!reportId) return;
    downloadHistoricalReports({
      ids: [reportId],
    });
  };

  return (
    <SectionHeading
      actions={
        <Stack
          alignItems='center'
          direction='row'
          justifyContent='space-between'
          spacing={2}
        >
          {isAdmin && (
            <Button
              startIcon={<FileDownloadOutlinedIcon />}
              variant='outlined'
              onClick={handleDownloadReport}
            >
              Tải báo cáo
            </Button>
          )}
          <Button
            startIcon={<InsertChartOutlinedIcon />}
            variant='contained'
            onClick={() =>
              navigate({
                pathname: `/report/history/${reportId}`,
                search: `?shift=${Shift.ALL_DAY}`,
              })
            }
          >
            Xem báo cáo
          </Button>
        </Stack>
      }
      description={`Thống kê chỉ số điện cụm sản xuất chế biến dăm: ${format(
        new Date(recordingDate ?? ''),
        'PPPP',
        { locale: vi },
      )}`}
      header='Thống kê chỉ số điện cụm sản xuất'
    />
  );
}
