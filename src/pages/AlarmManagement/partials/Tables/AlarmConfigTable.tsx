import { useMemo, useState } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  MRT_Row,
  useMaterialReactTable,
} from 'material-react-table';

import { Alarm, AlarmSeverity, Color } from '~/types';

import { ConfirmDeleteAlarmDialog } from '~/pages/AlarmManagement/partials/Dialogs/ConfirmDeleteAlarmDialog';
import { CreateAlarmWithBaseDialog } from '~/pages/AlarmManagement/partials/Dialogs/CreateAlarmWithBaseDialog';
import UpdateAlarmDialog from '~/pages/AlarmManagement/partials/Dialogs/UpdateAlarmDialog';
import { SeverityCell } from '~/pages/AlarmManagement/partials/Tables/SeverityCell';
import TypeCell from '~/pages/AlarmManagement/partials/Tables/TypeCell';

import { CircleIcon } from '~/components/Icons';
import { getDefaultMRTOptions } from '~/components/Table';

export interface IAlarmConfigTableProps {
  alarmConditions: Alarm[];
}

const defaultMRTOptions = getDefaultMRTOptions<Alarm>();

export function AlarmConfigTable(props: IAlarmConfigTableProps) {
  const { alarmConditions } = props;
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10, //customize the default page size
  });

  const columns: MRT_ColumnDef<Alarm>[] = useMemo(
    () => [
      {
        id: 'severity',
        header: '',
        Cell: ({ row }: { row: MRT_Row<Alarm> }) => (
          <SeverityCell severity={row.original.severity} />
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
        Cell: ({ row }: { row: MRT_Row<Alarm> }) => (
          <TypeCell type={row.original.type} />
        ),
      },
      {
        accessorKey: 'sensorConfiguration.address',
        header: 'Địa chỉ biến',
      },
      {
        id: 'message',
        header: 'Thông báo',
        accessorFn: (row) =>
          row.actions.length ? row.actions[0]?.message : '',
      },
      {
        accessorKey: 'checkInterval',
        header: 'Chu kì kiểm tra',
        accessorFn: (row) => `${row.checkInterval} giây`,
      },
      {
        id: 'timeDelay',
        header: 'Độ trễ',
        accessorFn: (row) => `${row.timeDelay} giây`,
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
    data: alarmConditions,
    enableRowActions: true,
    getRowId: (row) => row.id.toString(),
    onPaginationChange: setPagination, //hoist pagination state to your state when it changes internally
    state: { pagination }, //pass the pagination state to the table
    enableColumnPinning: true,
    displayColumnDefOptions: {
      'mrt-row-actions': {
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
      },
    },
    // renderTopToolbarCustomActions: () => {
    //   return (
    //     <div>
    //       <Tooltip title='Lọc theo tên'>
    //         <Button
    //           color='zinc'
    //           size='small'
    //           startIcon={<AddCircleOutlineOutlinedIcon />}
    //           sx={{ borderStyle: 'dashed' }}
    //           variant='outlined'
    //         >
    //           <Stack direction='row' spacing={1}>
    //             <Typography variant='caption'>Tên</Typography>
    //             <Divider flexItem orientation='vertical' />
    //             <Typography variant='caption'>Huy</Typography>
    //           </Stack>
    //         </Button>
    //       </Tooltip>
    //     </div>
    //   );
    // },
    renderRowActionMenuItems: ({ row, closeMenu }) => [
      <UpdateAlarmDialog
        key='update'
        alarm={row.original}
        closeMenu={closeMenu}
      />,
      <CreateAlarmWithBaseDialog
        key='create-with-base'
        alarm={row.original}
        closeMenu={closeMenu}
      />,
      <ConfirmDeleteAlarmDialog
        key='delete'
        alarm={row.original}
        closeMenu={closeMenu}
      />,
    ],
  });

  return <MaterialReactTable table={table} />;
}
