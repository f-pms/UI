import { useMemo } from 'react';
import { TooltipItem } from 'chart.js';
import { Line } from 'react-chartjs-2';

import { Stack, StackProps, Typography } from '@mui/material';

import { ChartData, ReportData } from '~/pages/Report/mocks/chartDataset';

import { getColorNumber } from '~/components/Charts/chartColorsUtil';
import ChartContainer from '~/components/Charts/ChartContainer';

type LineChartProp = StackProps & {
  dataset: ReportData;
  title: string;
};

const LineChart = ({ dataset, title, ...props }: LineChartProp) => {
  const data = useMemo(
    () => ({
      labels: dataset.labelStep,
      datasets: dataset.data.map((item, index) => ({
        label: item.label,
        data: [...item.dataset, 0],
        backgroundColor: getColorNumber(index + 1),
        borderColor: getColorNumber(index + 1),
        borderWidth: 1,
      })),
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
