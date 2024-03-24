import { useMemo } from 'react';
import { TooltipItem } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { StackProps } from '@mui/material';

import { formatNumber } from '~/utils';

import { ReportData } from '~/pages/Report/mocks/chartDataset';

import { getColorNumber } from '~/components/Charts/chartColorsUtil';
import ChartContainer from '~/components/Charts/ChartContainer';

export interface IVerticalBarChartProps extends StackProps {
  dataset: ReportData;
  title: string;
}

export function VerticalBarChart(props: IVerticalBarChartProps) {
  const { dataset, title, ...others } = props;
  const data = useMemo(
    () => ({
      labels: dataset.labelStep,
      datasets: dataset.data.map((item, index) => ({
        label: item.label,
        data: item.dataset,
        backgroundColor: getColorNumber(index + 1),
        borderColor: getColorNumber(index + 1),
      })),
    }),
    [dataset],
  );

  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom' as const,
        },
        datalabels: {
          formatter: () => {
            return null;
          },
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem: TooltipItem<'bar'>) => {
              const label = tooltipItem.dataset.label;
              const value = tooltipItem.parsed.y;
              return `${label}: ${formatNumber(value, 6)} KWh`;
            },
          },
        },
        title: {
          display: false,
          text: 'Chart.js Bar Chart',
        },
      },
    }),
    [],
  );
  return (
    <ChartContainer title={title} {...others}>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
}
