import { useMemo } from 'react';
import { TooltipItem } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { Stack, StackProps, Typography } from '@mui/material';

import { ChartData } from '~/pages/Report/mocks/chartDataset';

import { generateColors } from '~/components/Charts/chartColorsUtil';
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
          backgroundColor: generateColors(dataset.length),
          borderColor: generateColors(dataset.length),
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
            const { chart, dataset } = context as TooltipItem<'pie'>;

            const sum = dataset.data.reduce((currentSum, item, index) => {
              if (chart.getDataVisibility(index)) {
                return currentSum + item;
              }

              return currentSum;
            }, 0);
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
