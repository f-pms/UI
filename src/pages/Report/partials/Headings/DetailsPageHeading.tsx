import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Button, Stack } from '@mui/material';

import { HistoricalReportItem, ReportKey } from '~/types';

import { REPORT_TYPE_LABELS } from '~/pages/Report/helpers/constants';
import { SHIFT_NAVIGATION_OPTIONS } from '~/pages/Report/helpers/shiftOption';

import { SectionHeading } from '~/components';
import { InsertChartOutlinedIcon } from '~/components/Icons';

export interface IDetailsPageHeadingProps {
  report?: HistoricalReportItem;
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
          <Button
            startIcon={<InsertChartOutlinedIcon />}
            variant='contained'
            onClick={() => navigate('statistic')}
          >
            Xem báo cáo thống kê
          </Button>
        </Stack>
      }
      description={`Báo cáo chỉ số điện cụm SX ${REPORT_TYPE_LABELS[
        report?.reportType.name as ReportKey
      ].toLowerCase()} - ${shiftText}: ${format(
        new Date(report?.recordingDate ?? ''),
        'PPPP',
        { locale: vi },
      )}`}
      divider={false}
      header='Báo cáo chi tiết chỉ số điện sản xuất'
    />
  );
}
