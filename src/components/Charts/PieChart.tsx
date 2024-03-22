import { useMemo } from 'react';
import { TooltipItem } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { ChartData } from '~/pages/Report/mocks/chartDataset';

type PieChartProps = {
  dataset: ChartData[];
};

const PieChart = ({ dataset }: PieChartProps) => {
  const data = useMemo(
    () => ({
      labels: dataset.map((item) => item.year),
      datasets: [
        {
          label: 'Lượng điện tiêu thụ',
          data: dataset.map((item) => item.consumedElectricity),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }),
    [],
  );

  const options = useMemo(
    () => ({
      plugins: {
        title: {
          display: true,
          text: 'Thống kê tổng lượng điện tiêu thụ của từng công đoạn',
        },
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
      },
    }),
    [],
  );

  return <Pie data={data} options={options} />;
};

export default PieChart;
