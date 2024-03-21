import { useMemo } from 'react';
import { TooltipItem } from 'chart.js';
import { Line } from 'react-chartjs-2';

import { Stack, StackProps, Typography } from '@mui/material';

import { ChartData } from '~/pages/Report/mocks/chartDataset';

import ChartContainer from '~/components/Charts/ChartContainer';

type LineChartProp = StackProps & {
  dataset: ChartData[];
  title: string;
};

const LineChart = ({ dataset, title, ...props }: LineChartProp) => {
  const data = useMemo(
    () => ({
      labels: dataset.map((item) => item.year),
      datasets: [
        {
          label: 'Chỉ số điện chế biến dăm',
          data: [...dataset.map((item) => item.consumedElectricity), 0],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          yAxisID: 'y',
        },
        {
          label: 'Chỉ số điện thành phẩm',
          data: [...dataset.map((item) => item.consumedElectricity2), 0],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          yAxisID: 'y',
        },
      ],
    }),
    [dataset],
  );
  const options = useMemo(
    () => ({
      responsive: true,
      interaction: {
        mode: 'index' as const,
        intersect: false,
      },
      stacked: false,
      plugins: {
        datalabels: {
          formatter: () => ``,
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem: TooltipItem<'line'>) => {
              const label = tooltipItem.dataset.label;
              const value = tooltipItem.parsed.y;
              return `${label}: ${value} GkW`;
            },
          },
        },
        legend: {
          position: 'bottom' as const,
        },
      },
      scales: {
        y: {
          type: 'linear' as const,
          display: true,
          position: 'left' as const,
        },
      },
    }),
    [],
  );

  return (
    <ChartContainer title={title} {...props}>
      <Line data={data} options={options} />
    </ChartContainer>
  );
};

export default LineChart;
