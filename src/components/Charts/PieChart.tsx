import { useMemo } from 'react';
import { TooltipItem } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { Stack, StackProps, Typography } from '@mui/material';

import { ChartData } from '~/pages/Report/mocks/chartDataset';

import ChartContainer from '~/components/Charts/ChartContainer';

type PieChartProps = StackProps & {
  dataset: ChartData[];
  title: string;
};

const PieChart = ({ dataset, title, ...props }: PieChartProps) => {
  const data = useMemo(
    () => ({
      labels: dataset.map((item) => item.year),
      datasets: [
        {
          label: 'Lượng điện tiêu thụ',
          data: dataset.map((item) => item.consumedElectricity),
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255,159,64, 1)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255,159,64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }),
    [dataset],
  );

  const options = useMemo(
    () => ({
      plugins: {
        datalabels: {
          formatter: (value: number, context: unknown) => {
            const sum = (context as TooltipItem<'pie'>).dataset.data.reduce(
              (currentSum, item) => currentSum + item,
              0,
            );
            const percentage = (value / sum) * 100;
            return `${percentage.toFixed(1)}%`;
          },
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem: TooltipItem<'pie'>) => {
              const label = tooltipItem.dataset.label;
              const value = tooltipItem.parsed;
              return `${label}: ${value} GkW`;
            },
          },
        },
        legend: {
          position: 'bottom' as const,
        },
      },
    }),
    [],
  );

  return (
    <ChartContainer title={title} {...props}>
      <Pie data={data} options={options} />
    </ChartContainer>
  );
};

export default PieChart;
