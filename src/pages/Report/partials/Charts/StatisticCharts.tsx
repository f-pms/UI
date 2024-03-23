import { Stack } from '@mui/material';

import { DATA_LIST } from '~/pages/Report/mocks/chartDataset';

import BarChart from '~/components/Charts/BarChart';
import LineChart from '~/components/Charts/LineChart';
import PieChart from '~/components/Charts/PieChart';

const StatisticCharts = () => {
  return (
    <Stack marginTop={5} spacing={5}>
      <Stack direction='row' height={550} justifyContent={'space-between'}>
        <PieChart
          dataset={DATA_LIST}
          title='Tổng chỉ số điện của nhà máy'
          width={'30%'}
        />
        <LineChart
          dataset={DATA_LIST}
          title='Tổng chỉ số điện của từng công đoạn sản xuất'
          width='65%'
        />
      </Stack>
      <BarChart
        dataset={DATA_LIST}
        title='Tổng chỉ số điện của các thiết bị điện theo công đoạn sản xuất'
      />
    </Stack>
  );
};

export default StatisticCharts;
