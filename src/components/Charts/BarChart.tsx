import { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';

import { Box, Stack, StackProps } from '@mui/material';

import { ChartData } from '~/pages/Report/mocks/chartDataset';

import ChartContainer from '~/components/Charts/ChartContainer';

type BarChartProps = StackProps & {
  title: string;
  dataset: ChartData[];
  isStacked?: boolean;
};

const BarChart = ({
  isStacked = false,
  dataset,
  title,
  ...props
}: BarChartProps) => {
  const data = useMemo(
    () => ({
      labels: dataset.map((item) => item.year),
      datasets: [
        {
          label: 'Chỉ số điện chế biến dăm',
          data: dataset.map((item) => item.consumedElectricity),
          backgroundColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'Chỉ số điện thành phẩm',
          data: dataset.map((item) => item.consumedElectricity2),
          backgroundColor: 'rgb(75, 192, 192)',
        },
      ],
    }),
    [dataset],
  );

  const options = useMemo(
    () => ({
      plugins: {
        legend: {
          position: 'bottom' as const,
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: isStacked,
        },
        y: {
          stacked: isStacked,
        },
      },
    }),
    [isStacked],
  );

  return (
    <ChartContainer title={title} {...props}>
      <Stack direction='row'>
        <Bar data={data} options={options} />
        <Box height={500} width={400}>
          test
        </Box>
      </Stack>
    </ChartContainer>
  );
};

export default BarChart;
