import { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';

import { DATA_LIST } from '~/components/Charts/PieChart';

type BarChartProps = {
  isStacked?: boolean;
};

const BarChart = ({ isStacked = false }: BarChartProps) => {
  const data = useMemo(
    () => ({
      labels: DATA_LIST.map((item) => item.year),
      datasets: [
        {
          label: 'Chỉ số điện chế biến dăm',
          data: DATA_LIST.map((item) => item.consumedElectricity),
          backgroundColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'Chỉ số điện thành phẩm',
          data: DATA_LIST.map((item) => item.consumedElectricity2),
          backgroundColor: 'rgb(75, 192, 192)',
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
          text: `Chart.js Bar Chart ${isStacked ? '- Stacked' : ''}`,
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

  return <Bar data={data} options={options} />;
};

export default BarChart;
