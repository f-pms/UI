import { useContext } from 'react';

import {
  Box,
  Grid,
  Skeleton,
  Stack,
  StackProps,
  styled,
  Typography,
} from '@mui/material';

import { useQueryGetMultiDayReportSummary } from '~/services/report/queries/useQueryReportCharts';

import { StatisticReportContext } from '~/pages/Report/context/StatisticReportContext';

import CircularProgressWithLabel from '~/components/CircularProgressWithLabel';

const StyledContainer = styled(Grid)(({ theme }) => ({
  boxShadow: '0px 4px 4px 0px #00000040',
  border: '1px solid #00000033',
  width: '100%',
  padding: theme.spacing(3, 0),
}));

type StyledGridItemProps = StackProps & {
  displayBorder?: boolean;
};

const StyledGridItem = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'displayBorder',
})<StyledGridItemProps>(({ theme, displayBorder }) => ({
  padding: theme.spacing(1),
  borderRight: displayBorder ? '1px solid #0000001f' : 'none',
}));

const StatisticReportOverall = () => {
  const { params } = useContext(StatisticReportContext);

  const { data: reportSummary, isPending: reportSummaryLoading } =
    useQueryGetMultiDayReportSummary(params.pieChartParams);

  const getPercentByIndex = (value: number, total: number) => {
    return (value / total) * 100;
  };

  if (reportSummaryLoading)
    return (
      <Box alignItems='center' textAlign='center'>
        <Skeleton height={110} variant='rounded' />
      </Box>
    );

  return (
    <StyledContainer container>
      <Grid item xs={3}>
        <StyledGridItem
          alignItems={'center'}
          direction='row'
          displayBorder={true}
          gap={3}
          justifyContent={'center'}
        >
          <Stack>
            <Typography variant='body2'>Giờ cao điểm</Typography>
            <Typography
              color={'black'}
              sx={{
                fontWeight: 'bold',
              }}
              variant='h6'
            >
              {reportSummary?.SUM_PEAK} (KWh)
            </Typography>
          </Stack>
          <CircularProgressWithLabel
            value={getPercentByIndex(
              reportSummary?.SUM_PEAK ?? 0,
              reportSummary?.SUM_TOTAL ?? 1,
            )}
          />
        </StyledGridItem>
      </Grid>
      <Grid item xs={3}>
        <StyledGridItem
          alignItems={'center'}
          direction='row'
          displayBorder={true}
          gap={3}
          justifyContent={'center'}
        >
          <Stack>
            <Typography variant='body2'>Giờ thấp điểm</Typography>
            <Typography
              color={'black'}
              sx={{
                fontWeight: 'bold',
              }}
              variant='h6'
            >
              {reportSummary?.SUM_OFFPEAK} (KWh)
            </Typography>
          </Stack>
          <CircularProgressWithLabel
            value={getPercentByIndex(
              reportSummary?.SUM_OFFPEAK ?? 0,
              reportSummary?.SUM_TOTAL ?? 1,
            )}
          />
        </StyledGridItem>
      </Grid>
      <Grid item xs={3}>
        <StyledGridItem
          alignItems={'center'}
          direction='row'
          displayBorder={true}
          gap={3}
          justifyContent={'center'}
        >
          <Stack>
            <Typography variant='body2'>Giờ bình thường</Typography>
            <Typography
              color={'black'}
              sx={{
                fontWeight: 'bold',
              }}
              variant='h6'
            >
              {reportSummary?.SUM_STANDARD} (KWh)
            </Typography>
          </Stack>
          <CircularProgressWithLabel
            value={getPercentByIndex(
              reportSummary?.SUM_STANDARD ?? 0,
              reportSummary?.SUM_TOTAL ?? 1,
            )}
          />
        </StyledGridItem>
      </Grid>
      <Grid item xs={3}>
        <StyledGridItem
          alignItems={'center'}
          direction='row'
          displayBorder={false}
          gap={3}
          justifyContent={'center'}
        >
          <Stack>
            <Typography variant='body2'>Tổng chỉ số điện</Typography>
            <Typography
              color={'black'}
              sx={{
                fontWeight: 'bold',
              }}
              variant='h6'
            >
              {reportSummary?.SUM_TOTAL} (KWh)
            </Typography>
          </Stack>
          <CircularProgressWithLabel
            value={getPercentByIndex(
              reportSummary?.SUM_TOTAL ?? 0,
              reportSummary?.SUM_TOTAL ?? 1,
            )}
          />
        </StyledGridItem>
      </Grid>
    </StyledContainer>
  );
};

export default StatisticReportOverall;
