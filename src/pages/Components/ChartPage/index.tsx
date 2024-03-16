import { useEffect } from 'react';

import { Box } from '@mui/material';

import { useLoadingStore } from '~/stores';

import { CustomBorderButton } from '~/components';
import BarChart from '~/components/Charts/BarChart';
import LineChart from '~/components/Charts/LineChart';
import PieChart from '~/components/Charts/PieChart';

export function ChartPage() {
  const setLoading = useLoadingStore((state) => state.setLoading);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [setLoading]);
  return (
    <Box textAlign={'center'}>
      <h1>Chart Page</h1>
      <CustomBorderButton>Hello</CustomBorderButton>
      <Box alignSelf={'center'} margin={'0 auto'} width='50%'>
        <PieChart />
        <BarChart isStacked />
        <BarChart />
        <LineChart />
      </Box>
    </Box>
  );
}
