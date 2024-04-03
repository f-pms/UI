import { useContext, useMemo } from 'react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

import { Box, Button, Stack, Typography } from '@mui/material';

import { useQueryMissingDateReports } from '~/services/report/queries/useQueryMissingDateReports';

import { AuthContext } from '~/pages/Auth/context/AuthContext';
import { StatisticReportContext } from '~/pages/Report/context/StatisticReportContext';

import { SectionHeading } from '~/components';
import { FileDownloadOutlinedIcon } from '~/components/Icons';

export function StatisticReportPageHeading() {
  const { isAdmin } = useContext(AuthContext);
  const { date, params } = useContext(StatisticReportContext);

  const { data: missingDates } = useQueryMissingDateReports({
    start: params.pieChartParams.start,
    end: params.pieChartParams.end,
  });

  const hasDateInformation = useMemo(() => {
    return !!date.startDate && !!date.endDate;
  }, [date]);

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
              variant='contained'
            >
              Tải báo cáo
            </Button>
          )}
        </Stack>
      }
      description={
        <Box>
          <Typography variant='body2'>
            {hasDateInformation && (
              <span>
                Thống kê chỉ số điện SX của nhà máy từ ngày{' '}
                <span style={{ fontWeight: 'bold' }}>{date.startDate}</span> đến
                ngày <span style={{ fontWeight: 'bold' }}>{date.endDate}</span>
              </span>
            )}
          </Typography>
          <Typography component='p' fontStyle='italic' variant='caption'>
            *Công đoạn chế biến dăm thiếu dữ liệu:{' '}
            {missingDates?.DAM.map((date) =>
              format(new Date(date ?? new Date()), 'P', { locale: vi }),
            ).join(', ')}
          </Typography>
          <Typography component='p' fontStyle='italic' variant='caption'>
            *Công đoạn bán thành phần thiếu dữ liệu:{' '}
            {missingDates?.BTP.map((date) =>
              format(new Date(date ?? new Date()), 'P', { locale: vi }),
            ).join(', ')}
          </Typography>
        </Box>
      }
      divider={true}
      header='Báo cáo thống kê'
    />
  );
}
