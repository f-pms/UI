import { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';

import { ChartData } from '~/pages/Report/mocks/chartDataset';

type BarChartProps = {
  isStacked?: boolean;
  dataset: ChartData[];
};

const BarChart = ({ isStacked = false, dataset }: BarChartProps) => {
  const data = useMemo(
    () => ({
      labels: dataset.map((item) => item.year),
      datasets: [
        {
          label: 'Chỉ số điện chế biến dăm',
          data: dataset.map((item) => item.consumedElectricity),
          backgroundColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'Chỉ số điện thành phẩm',
          data: dataset.map((item) => item.consumedElectricity2),
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
          text: `Thống kê tổng lượng điện tiêu thụ của từng công đoạn}`,
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
