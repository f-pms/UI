import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

import { Stack, Typography } from '@mui/material';

import { ElectricalMeterReadingRow } from '~/types';

import { getDefaultEMRTOptions } from '~/pages/Report/helpers/getDefaultEMRTOptions';
import { useColumns } from '~/pages/Report/hooks/useColumns';
import { ELECTRICAL_METER_READING_TABLE } from '~/pages/Report/mocks/electricalMeterReadingTable';

import { SoftChip } from '~/components';

export interface IElectricalIndexTableProps {}
const defaultMRTOptions = getDefaultEMRTOptions<ElectricalMeterReadingRow>();

export default function ElectricalIndexTable() {
  const { columns } = useColumns({
    totalOrderNumber: '(14)=(1)*(4+6+8+10)',
  });

  const table = useMaterialReactTable({
    ...defaultMRTOptions,
    columns,
    data: ELECTRICAL_METER_READING_TABLE.rows,
    renderTopToolbarCustomActions: () => {
      return (
        <Typography fontWeight='bold' variant='subtitle1'>
          I. Danh mục chốt chỉ số các đồng hồ điện thuộc cụm chế biến dăm
        </Typography>
      );
    },
    renderBottomToolbarCustomActions: () => {
      return (
        <Stack alignItems='center' direction='row' spacing={1}>
          <Typography
            color='text.strong'
            sx={{ fontWeight: 'bold' }}
            variant='body2'
          >
            Tổng số điện sử dụng (KWh):
          </Typography>
          <SoftChip label={'1.000.000'} shape='square' size='small' />
        </Stack>
      );
    },
  });

  return <MaterialReactTable table={table} />;
}
