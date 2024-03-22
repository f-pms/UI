import { useSearchParams } from 'react-router-dom';

import { Box, Stack } from '@mui/material';

import { SHIFT_NAVIGATION_OPTIONS } from '~/pages/Report/helpers/shiftOption';
import { SubTablePart4 } from '~/pages/Report/partials/Clusters/BanThanhPhan/SubTablesPart4';
import { TablePart1 } from '~/pages/Report/partials/Clusters/BanThanhPhan/TablePart1';
import { TablePart2 } from '~/pages/Report/partials/Clusters/BanThanhPhan/TablePart2';
import { TablePart3 } from '~/pages/Report/partials/Clusters/BanThanhPhan/TablePart3';
import { TablePart4 } from '~/pages/Report/partials/Clusters/BanThanhPhan/TablePart4';
import { StageTotalTable } from '~/pages/Report/partials/Tables/StageTotalTable';

export interface IBanThanhPhanClusterProps {}

export function BanThanhPhanCluster() {
  const [searchParams] = useSearchParams();
  const shiftText = SHIFT_NAVIGATION_OPTIONS.find(
    (shift) => shift.value === searchParams.get('shift'),
  )?.label;
  return (
    <Stack spacing={4}>
      <TablePart1 />
      <TablePart2 />
      <TablePart3 />
      <Box>
        <TablePart4 />
        <SubTablePart4 />
      </Box>
      <StageTotalTable
        contents={`Tổng số điện sử dụng cho công đoạn SX bán thành phẩm (BTP) ${shiftText?.toLocaleLowerCase()} = Tổng số điện (14) - Tổng số điện (16) - Tổng số điện (17) = `}
        title='V. Tổng số điện sử dụng cho công đoạn SX bán thành phẩm'
        total={3000}
      />
    </Stack>
  );
}
