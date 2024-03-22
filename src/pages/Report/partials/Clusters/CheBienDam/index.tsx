import { useSearchParams } from 'react-router-dom';

import { Box, Stack } from '@mui/material';

import { SHIFT_NAVIGATION_OPTIONS } from '~/pages/Report/helpers/shiftOption';
import { SubTablesPart2 } from '~/pages/Report/partials/Clusters/CheBienDam/SubTablesPart2';
import { TablePart1 } from '~/pages/Report/partials/Clusters/CheBienDam/TablePart1';
import { TablePart2 } from '~/pages/Report/partials/Clusters/CheBienDam/TablePart2';
import { StageTotalTable } from '~/pages/Report/partials/Tables/StageTotalTable';

export interface ICheBienDamClusterProps {}

export function CheBienDamCluster() {
  const [searchParams] = useSearchParams();
  const shiftText = SHIFT_NAVIGATION_OPTIONS.find(
    (shift) => shift.value === searchParams.get('shift'),
  )?.label;
  return (
    <Stack spacing={4}>
      <TablePart1 />
      <Box>
        <TablePart2 />
        <SubTablesPart2 />
      </Box>
      <StageTotalTable
        contents={`Tổng số điện sử dụng cho SX công đoạn chế biến dăm ${shiftText?.toLocaleLowerCase()} = Tổng số điện (14) - Tổng số điện (16) - Tổng số điện (17) = `}
        title='III. Tổng số điện sử dụng cho SX công đoạn chế biến dăm'
        total={3000}
      />
    </Stack>
  );
}
