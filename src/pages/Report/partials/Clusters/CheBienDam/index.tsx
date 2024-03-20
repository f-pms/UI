import { Stack } from '@mui/material';

import { TablePart1 } from '~/pages/Report/partials/Clusters/CheBienDam/TablePart1';
import { TablePart2 } from '~/pages/Report/partials/Clusters/CheBienDam/TablePart2';

export interface ICheBienDamClusterProps {}

export function CheBienDamCluster() {
  return (
    <Stack spacing={4}>
      <TablePart1 />
      <TablePart2 />
    </Stack>
  );
}
