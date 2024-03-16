import { useMemo } from 'react';
import { TooltipItem } from 'chart.js';
import { Line } from 'react-chartjs-2';

import { DATA_LIST } from '~/components/Charts/PieChart';

const LineChart = () => {
  const data = useMemo(
    () => ({
      labels: DATA_LIST.map((item) => item.year),
      datasets: [
        {
          label: 'Chỉ số điện chế biến dăm',
          data: [...DATA_LIST.map((item) => item.consumedElectricity), 0],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          yAxisID: 'y',
        },
        {
          label: 'Chỉ số điện thành phẩm',
          data: [...DATA_LIST.map((item) => item.consumedElectricity2), 0],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          yAxisID: 'y',
        },
      ],
    }),
    [],
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
        title: {
          display: true,
          text: 'Chart.js Line Chart - Multi Axis',
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

  return <Line data={data} options={options} />;
};

export default LineChart;
