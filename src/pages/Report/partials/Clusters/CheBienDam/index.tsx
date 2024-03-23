import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Box, Stack } from '@mui/material';

import { ReportDetails, Shift } from '~/types';

import { mapDataIntoTableValue } from '~/pages/Report/helpers/mapDataIntoTableValue';
import { SHIFT_NAVIGATION_OPTIONS } from '~/pages/Report/helpers/shiftOption';
import { SubTablesPart2 } from '~/pages/Report/partials/Clusters/CheBienDam/SubTablesPart2';
import { TABLE_PART_1 } from '~/pages/Report/partials/Clusters/CheBienDam/TablePart1/tableValuesPart1';
import { TABLE_PART_2 } from '~/pages/Report/partials/Clusters/CheBienDam/TablePart2/tableValuesPart2';
import { ElectricalMeterReadingTable } from '~/pages/Report/partials/Tables/ElectricalMeterReadingTable';
import { StageTotalTable } from '~/pages/Report/partials/Tables/StageTotalTable';

export interface ICheBienDamClusterProps {
  report: ReportDetails;
}

export function CheBienDamCluster({ report }: ICheBienDamClusterProps) {
  const [searchParams] = useSearchParams();
  const shift = searchParams.get('shift') as Shift;
  const shiftText = SHIFT_NAVIGATION_OPTIONS.find(
    (option) => option.value === shift,
  )?.label;

  const tableDataPart1 = useMemo(() => {
    return mapDataIntoTableValue(TABLE_PART_1, report, shift, 1);
  }, [report, shift]);

  const tableDataPart2 = useMemo(() => {
    return mapDataIntoTableValue(TABLE_PART_2, report, shift, 4);
  }, [report, shift]);

  return (
    <Stack spacing={4}>
      <ElectricalMeterReadingTable tableData={tableDataPart1} />
      <Box>
        <ElectricalMeterReadingTable tableData={tableDataPart2} />
        <SubTablesPart2 />
      </Box>
      <StageTotalTable
        contents={`Tổng số điện sử dụng cho SX công đoạn chế biến dăm ${shiftText?.toLocaleLowerCase()} = Tổng số điện (14*) - Tổng số điện (16) - Tổng số điện (17) = `}
        title='III. Tổng số điện sử dụng cho SX công đoạn chế biến dăm'
        total={tableDataPart1.total - tableDataPart2.total}
      />
    </Stack>
  );
}
