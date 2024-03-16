import { useMemo } from 'react';
import { TooltipItem } from 'chart.js';
import { Pie } from 'react-chartjs-2';

export const DATA_LIST = [
  {
    id: 1,
    year: '1-1-2024',
    consumedElectricity: 20000,
    consumedElectricity2: 12000,
  },
  {
    id: 2,
    year: '2-1-2024',
    consumedElectricity: 10000,
    consumedElectricity2: 10000,
  },
  {
    id: 3,
    year: '3-1-2024',
    consumedElectricity: 15000,
    consumedElectricity2: 7000,
  },
  {
    id: 4,
    year: '4-1-2024',
    consumedElectricity: 60000,
    consumedElectricity2: 20000,
  },
  {
    id: 5,
    year: '5-1-2024',
    consumedElectricity: 15000,
    consumedElectricity2: 4500,
  },
];

const PieChart = () => {
  const data = useMemo(
    () => ({
      labels: DATA_LIST.map((item) => item.year),
      datasets: [
        {
          label: 'Lượng điện tiêu thụ',
          data: DATA_LIST.map((item) => item.consumedElectricity),
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
          text: 'Chart.js Pie Chart',
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
