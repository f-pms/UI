import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

import { Stack, Typography } from '@mui/material';

import {
  ElectricalMeterReadingRowValues,
  ElectricalMeterReadingTableValues,
} from '~/types';
import { formatNumber } from '~/utils';

import { getDefaultEMRTOptions } from '~/pages/Report/helpers/getDefaultEMRTOptions';
import { useColumns } from '~/pages/Report/hooks/useColumns';

import { SoftChip } from '~/components';

const defaultMRTOptions =
  getDefaultEMRTOptions<ElectricalMeterReadingRowValues>();

export interface IElectricalMeterReadingTable {
  tableData: ElectricalMeterReadingTableValues;
}

export function ElectricalMeterReadingTable({
  tableData,
}: IElectricalMeterReadingTable) {
  const { columns } = useColumns({
    totalOrderNumber: tableData.totalOrderNumber,
    tableRowData: tableData.rows,
  });

  const table = useMaterialReactTable({
    ...defaultMRTOptions,
    columns,
    data: tableData.rows,
    renderTopToolbarCustomActions: () => {
      return (
        <Typography color='primary' fontWeight='bold' variant='subtitle2'>
          {tableData.title}
        </Typography>
      );
    },
    renderBottomToolbarCustomActions: () => {
      return (
        <Stack alignItems='center' direction='row' spacing={1}>
          <Typography
            color='primary'
            sx={{ fontWeight: 'bold' }}
            variant='body2'
          >
            Tổng số điện sử dụng{' '}
            <sup
              style={{ fontSize: '11px' }}
            >{`(${tableData.totalOrderNumber}*)`}</sup>
            {''}:
          </Typography>
          <SoftChip
            label={`${formatNumber(tableData.total, 6)} (KWh)`}
            shape='square'
            size='small'
          />
        </Stack>
      );
    },
  });

  return <MaterialReactTable table={table} />;
}
