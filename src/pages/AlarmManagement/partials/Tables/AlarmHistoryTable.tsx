import { useMemo, useState } from 'react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  MRT_Row,
  useMaterialReactTable,
} from 'material-react-table';

import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { AlarmHistory } from '~/types';

import AlarmHistoryDetailsDialog from '~/pages/AlarmManagement/partials/Dialogs/AlarmHistoryDetailsDialog';
import { SeverityCell } from '~/pages/AlarmManagement/partials/Tables/SeverityCell';
import TypeCell from '~/pages/AlarmManagement/partials/Tables/TypeCell';

import { SoftChip } from '~/components';
import { getDefaultMRTOptions } from '~/components/Table';

export interface IAlarmHistoryTableProps {
  solvedAlarms: AlarmHistory[];
}

const defaultMRTOptions = getDefaultMRTOptions<AlarmHistory>();

export function AlarmHistoryTable(props: IAlarmHistoryTableProps) {
  const { solvedAlarms } = props;
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10, //customize the default page size
  });

  const columns: MRT_ColumnDef<AlarmHistory>[] = useMemo(
    () => [
      {
        id: 'severity',
        header: '',
        Cell: ({ row }: { row: MRT_Row<AlarmHistory> }) => (
          <SeverityCell severity={row.original.condition.severity} />
        ),
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        muiTableFooterCellProps: {
          align: 'center',
        },
        enableColumnActions: false,
        enableSorting: false,
        size: 30,
      },

      {
        id: 'type',
        header: 'Loại',
        Cell: ({ row }: { row: MRT_Row<AlarmHistory> }) => (
          <TypeCell type={row.original.condition.type} />
        ),
      },
      {
        accessorKey: 'condition.sensorConfiguration.address',
        header: 'Địa chỉ biến',
      },
      {
        accessorKey: 'condition.blueprint.name',
        header: 'Trạm',
      },
      {
        id: 'message',
        header: 'Thông báo',
        accessorFn: (row) =>
          row.condition.actions.length ? row.condition.actions[0]?.message : '',
      },
      {
        id: 'triggeredAt',
        header: 'Ban đầu cảnh báo',
        accessorFn: (row) =>
          format(new Date(row.triggeredAt), 'dd/MM/yyyy HH:mm:ss', {
            locale: vi,
          }),
      },
      {
        id: 'solvedAt',
        header: 'Kết thúc cảnh báo',
        accessorFn: (row) =>
          format(new Date(row.solvedAt), 'dd/MM/yyyy HH:mm:ss', {
            locale: vi,
          }),
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    ...defaultMRTOptions,
    initialState: {
      ...defaultMRTOptions.initialState,
      columnPinning: { left: ['mrt-row-actions'] },
    },
    positionActionsColumn: 'first',
    columns,
    data: solvedAlarms,
    enableRowActions: true,
    getRowId: (row) => row.id.toString(),
    onPaginationChange: setPagination,
    state: { pagination },
    enableColumnPinning: true,
    renderRowActions: (row) => {
      return (
        <Stack alignItems='center' justifyContent='center'>
          <AlarmHistoryDetailsDialog alarmHistory={row.row.original} />
        </Stack>
      );
    },
    renderTopToolbarCustomActions: () => {
      return (
        <Stack alignItems='center' direction='row' spacing={1}>
          <Typography fontWeight='bold' variant='body2'>
            Tất cả:
          </Typography>
          <SoftChip
            label={`${solvedAlarms.length} cảnh báo`}
            shape='square'
            size='small'
          />
        </Stack>
      );
    },
  });

  return <MaterialReactTable table={table} />;
}
