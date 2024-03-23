import { Stack } from '@mui/material';

import {
  DUMMY_REPORT_BAR_DATA_LIST,
  DUMMY_REPORT_LINE_DATA,
  DUMMY_REPORT_PIE_DATA,
} from '~/pages/Report/mocks/chartDataset';

import BarChart from '~/components/Charts/BarChart';
import LineChart from '~/components/Charts/LineChart';
import PieChart from '~/components/Charts/PieChart';

const StatisticCharts = () => {
  return (
    <Stack marginTop={5} spacing={5}>
      <Stack direction='row' height={550} justifyContent={'space-between'}>
        <PieChart
          dataset={DUMMY_REPORT_PIE_DATA}
          title='Tổng chỉ số điện của nhà máy'
          width={'30%'}
        />
        <LineChart
          dataset={DUMMY_REPORT_LINE_DATA}
          title='Tổng chỉ số điện của từng công đoạn sản xuất'
          width='65%'
        />
      </Stack>
      <BarChart
        isStacked
        dataset={DUMMY_REPORT_BAR_DATA_LIST}
        title='Tổng chỉ số điện của các thiết bị điện theo công đoạn sản xuất'
      />
    </Stack>
  );
};

export default StatisticCharts;
