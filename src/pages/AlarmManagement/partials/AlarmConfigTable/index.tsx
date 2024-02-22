import { useState } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';

import { Alarm } from '~/types';

import UpdateAlarmDialog from '~/pages/AlarmManagement/partials/UpdateAlarmDialog';

import {
  AddCircleOutlineOutlinedIcon,
  NotificationsOffOutlinedIcon,
} from '~/components/Icons';
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
} from '~/components/MuiComponents';
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

  const columns: MRT_ColumnDef<Alarm>[] = [
    {
      accessorKey: 'type',
      header: 'Loại',
    },
    {
      accessorKey: 'sensorConfiguration.address',
      header: 'Địa chỉ biến',
    },
    {
      accessorKey: 'severity',
      header: 'Mức độ',
    },
    {
      id: 'message',
      header: 'Thông báo',
      accessorFn: (row) => (row.actions.length ? row.actions[0]?.message : ''),
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
  ];

  const table = useMaterialReactTable({
    ...defaultMRTOptions,
    initialState: {
      ...defaultMRTOptions.initialState,
    },
    positionActionsColumn: 'first',
    columns,
    data: alarmConditions,
    enableRowActions: true,
    getRowId: (row) => row.id,
    onPaginationChange: setPagination, //hoist pagination state to your state when it changes internally
    state: { pagination }, //pass the pagination state to the table
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
      <MenuItem key='create'>
        <ListItemIcon>
          <AddCircleOutlineOutlinedIcon sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText>Tạo mới từ cảnh báo</ListItemText>
      </MenuItem>,
      <MenuItem key='delete'>
        <ListItemIcon>
          <NotificationsOffOutlinedIcon sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText>Vô hiệu hóa cảnh báo</ListItemText>
      </MenuItem>,
    ],
  });

  return <MaterialReactTable table={table} />;
}
