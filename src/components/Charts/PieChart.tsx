import { useMemo } from 'react';
import { TooltipItem } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { StackProps } from '@mui/material';

import { ReportData } from '~/pages/Report/mocks/chartDataset';

import { generateColors } from '~/components/Charts/chartColorsUtil';
import ChartContainer from '~/components/Charts/ChartContainer';

type PieChartProps = StackProps & {
  dataset: ReportData;
  title: string;
};

const PieChart = ({ dataset, title, ...props }: PieChartProps) => {
  const data = useMemo(
    () => ({
      labels: dataset.labelStep,
      datasets: dataset.data.map((item) => ({
        label: item.label,
        data: item.dataset,
        backgroundColor: generateColors(dataset.labelStep.length),
        borderColor: '#fff',
        borderWidth: 2,
      })),
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
