import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Button, Stack } from '@mui/material';

import { ReportDetails, ReportKey } from '~/types';

import { REPORT_TYPE_LABELS } from '~/pages/Report/helpers/constants';
import { SHIFT_NAVIGATION_OPTIONS } from '~/pages/Report/helpers/shiftOption';

import { SectionHeading } from '~/components';
import {
  FileDownloadOutlinedIcon,
  InsertChartOutlinedIcon,
} from '~/components/Icons';

export interface IDetailsPageHeadingProps {
  report?: ReportDetails;
}

export function DetailsPageHeading({ report }: IDetailsPageHeadingProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const shiftText = SHIFT_NAVIGATION_OPTIONS.find(
    (shift) => shift.value === searchParams.get('shift'),
  )?.label;
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
            onClick={() => navigate('statistic')}
          >
            Xem thống kê
          </Button>
        </Stack>
      }
      description={`Báo cáo chỉ số điện cụm SX ${REPORT_TYPE_LABELS[
        report?.type.name as ReportKey
      ].toLowerCase()} - ${shiftText}: ${format(
        new Date(report?.recordingDate ?? ''),
        'PPPP',
        { locale: vi },
      )}`}
      divider={false}
      header='Báo cáo chi tiết chỉ số điện cụm sản xuất'
    />
  );
}
