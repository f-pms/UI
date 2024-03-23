import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Stack } from '@mui/material';

import { Shift } from '~/types';

import { SectionHeading } from '~/components';
import {
  FileDownloadOutlinedIcon,
  InsertChartOutlinedIcon,
} from '~/components/Icons';

export interface IStatisticReportDetailsPageHeadingProps {}

export function StatisticReportDetailsPageHeading() {
  const { reportId } = useParams();
  const navigate = useNavigate();
  return (
    <SectionHeading
      actions={
        <Stack
          alignItems='center'
          direction='row'
          justifyContent='space-between'
          spacing={2}
        >
          <Button startIcon={<FileDownloadOutlinedIcon />} variant='outlined'>
            Tải báo cáo
          </Button>
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
        new Date(),
        'PPPP',
        { locale: vi },
      )}`}
      header='Thống kê chỉ số điện cụm sản xuất'
    />
  );
}
