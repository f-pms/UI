import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Box, Stack } from '@mui/material';

import { ReportDetails, Shift } from '~/types';

import { mapDataIntoTableValue } from '~/pages/Report/helpers/mapDataIntoTableValue';
import { SHIFT_NAVIGATION_OPTIONS } from '~/pages/Report/helpers/shiftOption';
import { SubTablePart4 } from '~/pages/Report/partials/Clusters/BanThanhPham/SubTablesPart4';
import { TABLE_PART_1 } from '~/pages/Report/partials/Clusters/BanThanhPham/TablePart1/tableValuesPart1';
import { TABLE_PART_2 } from '~/pages/Report/partials/Clusters/BanThanhPham/TablePart2/tableValuesPart2';
import { TABLE_PART_3 } from '~/pages/Report/partials/Clusters/BanThanhPham/TablePart3/tableValuesPart3';
import { TABLE_PART_4 } from '~/pages/Report/partials/Clusters/BanThanhPham/TablePart4/tableValuesPart4';
import { ElectricalMeterReadingTable } from '~/pages/Report/partials/Tables/ElectricalMeterReadingTable';
import { StageTotalTable } from '~/pages/Report/partials/Tables/StageTotalTable';

export interface IBanThanhPhamClusterProps {
  report: ReportDetails;
}

export function BanThanhPhamCluster({ report }: IBanThanhPhamClusterProps) {
  const [searchParams] = useSearchParams();
  const shift = searchParams.get('shift') as Shift;
  const shiftText = SHIFT_NAVIGATION_OPTIONS.find(
    (option) => option.value === shift,
  )?.label;

  const tableDataPart1 = useMemo(() => {
    return mapDataIntoTableValue(TABLE_PART_1, report, shift, 1);
  }, [report, shift]);

  const tableDataPart2 = useMemo(() => {
    return mapDataIntoTableValue(TABLE_PART_2, report, shift, 10);
  }, [report, shift]);

  const tableDataPart3 = useMemo(() => {
    return mapDataIntoTableValue(TABLE_PART_3, report, shift, 11);
  }, [report, shift]);

  const tableDataPart4 = useMemo(() => {
    return mapDataIntoTableValue(TABLE_PART_4, report, shift, 16);
  }, [report, shift]);

  const sum = shift === Shift.MORNING ? report.sums[0] : report.sums[1];
  return (
    <Stack spacing={4}>
      <ElectricalMeterReadingTable tableData={tableDataPart1} />
      <ElectricalMeterReadingTable tableData={tableDataPart2} />
      <ElectricalMeterReadingTable tableData={tableDataPart3} />
      <Box>
        <ElectricalMeterReadingTable tableData={tableDataPart4} />
        <SubTablePart4 report={report} />
      </Box>
      <StageTotalTable
        contents={`Tổng số điện sử dụng cho công đoạn SX bán thành phẩm (BTP) ${shiftText?.toLocaleLowerCase()} = Tổng số điện (14*) - Tổng số điện (15*) + Tổng số điện (16*) + Tổng số điện (17c) = `}
        title='V. Tổng số điện sử dụng cho công đoạn SX bán thành phẩm'
        total={
          tableDataPart1.total -
          tableDataPart2.total +
          tableDataPart3.total +
          sum?.['SUM_BTP_CATEGORY_4.2']
        }
      />
    </Stack>
  );
}
