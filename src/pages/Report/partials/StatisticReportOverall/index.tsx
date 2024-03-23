import { Grid, Stack, StackProps, styled, Typography } from '@mui/material';

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

const REPORT_LIST = [
  {
    id: 1,
    title: 'Giờ cao điểm',
    consumedElectricity: 1024,
    percent: 66,
  },
  {
    id: 2,
    title: 'Giờ thấp điểm',
    consumedElectricity: 1024,
    percent: 66,
  },
  {
    id: 3,
    title: 'Giờ bình thường',
    consumedElectricity: 1024,
    percent: 66,
  },
  {
    id: 4,
    title: 'Tổng chỉ số điện',
    consumedElectricity: 1024,
    percent: 66,
  },
];

const StatisticReportOverall = () => {
  return (
    <StyledContainer container>
      {REPORT_LIST.map((data, index) => (
        <Grid key={data.id} item xs={3}>
          <StyledGridItem
            alignItems={'center'}
            direction='row'
            displayBorder={index < REPORT_LIST.length - 1}
            gap={3}
            justifyContent={'center'}
          >
            <Stack>
              <Typography variant='body2'>{data.title}</Typography>
              <Typography
                color={'black'}
                sx={{
                  fontWeight: 'bold',
                }}
                variant='h6'
              >
                {data.consumedElectricity} (KWh)
              </Typography>
            </Stack>
            <CircularProgressWithLabel value={data.percent} />
          </StyledGridItem>
        </Grid>
      ))}
    </StyledContainer>
  );
};

export default StatisticReportOverall;
