import { Box, Stack } from '@mui/material';

import { EquipmentTable } from '~/pages/Report/partials/Clusters/Total/EquipmentTable';
import { TotalTable } from '~/pages/Report/partials/Clusters/Total/TotalTable';

export interface ITotalProps {}

export default function Total() {
  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' spacing={5}>
        <TotalTable />
        <TotalTable />
      </Stack>
      <Box mt={5}>
        <EquipmentTable />
      </Box>
    </Box>
  );
}
