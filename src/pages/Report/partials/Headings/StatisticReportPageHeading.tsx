import { useContext, useMemo } from 'react';

import { Button, Stack } from '@mui/material';

import { StatisticReportContext } from '~/pages/Report/context/StatisticReportContext';

import { SectionHeading } from '~/components';
import { FileDownloadOutlinedIcon } from '~/components/Icons';

export function StatisticReportPageHeading() {
  const { date } = useContext(StatisticReportContext);

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
          <Button startIcon={<FileDownloadOutlinedIcon />} variant='contained'>
            Tải báo cáo
          </Button>
        </Stack>
      }
      description={
        hasDateInformation
          ? `Thống kê chỉ số điện SX cho nhà máy 7 từ ${date.startDate} đến ${date.endDate}`
          : ''
      }
      divider={true}
      header='Báo cáo thống kê'
    />
  );
}
