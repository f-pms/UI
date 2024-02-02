import { useState } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';

import { AlarmConfigDTO } from '~/types/alarmConfig';

import { ALARM_CONFIG_LIST } from '~/pages/AlarmManagement/mocks/alarmConfig';

import {
  AddCircleOutlineOutlinedIcon,
  EditOutlinedIcon,
  NotificationsOffOutlinedIcon,
} from '~/components/Icons';
import {
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from '~/components/MuiComponents';
import { getDefaultMRTOptions } from '~/components/Table';

export interface IAlarmConfigTableProps {}

const defaultMRTOptions = getDefaultMRTOptions<AlarmConfigDTO>();

export function AlarmConfigTable() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10, //customize the default page size
  });

  const columns: MRT_ColumnDef<AlarmConfigDTO>[] = [
    {
      accessorKey: 'type',
      header: 'Loại',
    },
    {
      accessorKey: 'sensorConfigId',
      header: 'Địa chỉ biến',
    },
    {
      accessorKey: 'severity',
      header: 'Mức độ',
    },
    {
      accessorKey: 'message',
      header: 'Thông báo',
    },
    {
      accessorKey: 'checkInterval',
      header: 'Chu kì kiểm tra',
    },
    {
      accessorKey: 'timeDelay',
      header: 'Độ trễ',
    },
  ];

  const table = useMaterialReactTable({
    ...defaultMRTOptions,
    initialState: {
      ...defaultMRTOptions.initialState,
    },
    positionActionsColumn: 'first',
    columns,
    data: ALARM_CONFIG_LIST,
    enableRowActions: true,
    getRowId: (row) => row.id,
    onPaginationChange: setPagination, //hoist pagination state to your state when it changes internally
    state: { pagination }, //pass the pagination state to the table
    renderTopToolbarCustomActions: () => {
      return (
        <div>
          <Tooltip title='Lọc theo tên'>
            <Button
              color='zinc'
              size='small'
              startIcon={<AddCircleOutlineOutlinedIcon />}
              sx={{ borderStyle: 'dashed' }}
              variant='outlined'
            >
              <Stack direction='row' spacing={1}>
                <Typography variant='caption'>Tên</Typography>
                <Divider flexItem orientation='vertical' />
                <Typography variant='caption'>Huy</Typography>
              </Stack>
            </Button>
          </Tooltip>
        </div>
      );
    },
    renderRowActionMenuItems: () => [
      <MenuItem key='edit'>
        <ListItemIcon>
          <EditOutlinedIcon sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText>Chỉnh sửa cảnh báo</ListItemText>
      </MenuItem>,
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
