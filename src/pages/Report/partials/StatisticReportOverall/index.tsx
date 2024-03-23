import { useContext } from 'react';

import { Grid, Stack, StackProps, styled, Typography } from '@mui/material';

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
  const { electricityConsumptionList } = useContext(StatisticReportContext);

  const getPercentByIndex = (index: number) => {
    const sum = electricityConsumptionList.reduce((sum, current, index) => {
      if (index < electricityConsumptionList.length - 1) {
        return sum + (current.consumedElectricity ?? 0);
      }
      return sum;
    }, 0);

    return (
      ((electricityConsumptionList[index].consumedElectricity ?? 0) / sum) * 100
    );
  };

  return (
    <StyledContainer container>
      {electricityConsumptionList.map((data, index) => (
        <Grid key={data.id} item xs={3}>
          <StyledGridItem
            alignItems={'center'}
            direction='row'
            displayBorder={index < electricityConsumptionList.length - 1}
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
            <CircularProgressWithLabel value={getPercentByIndex(index)} />
          </StyledGridItem>
        </Grid>
      ))}
    </StyledContainer>
  );
};

export default StatisticReportOverall;
