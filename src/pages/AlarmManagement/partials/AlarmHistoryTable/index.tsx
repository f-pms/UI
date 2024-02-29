import { useState } from 'react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';

import { AlarmHistory } from '~/types';

import { AddCircleOutlineOutlinedIcon } from '~/components/Icons';
import {
  Button,
  Divider,
  Stack,
  Tooltip,
  Typography,
} from '~/components/MuiComponents';
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

  const columns: MRT_ColumnDef<AlarmHistory>[] = [
    {
      accessorKey: 'alarmCondition.type',
      header: 'Loại',
    },
    {
      accessorKey: 'alarmCondition.sensorConfiguration.address',
      header: 'Địa chỉ biến',
    },
    {
      accessorKey: 'alarmCondition.blueprint.name',
      header: 'Trạm',
    },
    {
      accessorKey: 'alarmCondition.severity',
      header: 'Mức độ',
    },
    {
      id: 'message',
      header: 'Thông báo',
      accessorFn: (row) =>
        row.alarmCondition.actions.length
          ? row.alarmCondition.actions[0]?.message
          : '',
    },
    {
      accessorKey: 'startAlarm',
      header: 'Ban đầu cảnh báo',
      accessorFn: () =>
        format(new Date(), 'dd/MM/yyyy HH:mm:ss', {
          locale: vi,
        }),
    },
    {
      id: 'endAlarm',
      header: 'Kết thúc cảnh báo',
      accessorFn: () =>
        format(new Date(), 'dd/MM/yyyy HH:mm:ss', {
          locale: vi,
        }),
    },
  ];

  const table = useMaterialReactTable({
    ...defaultMRTOptions,
    initialState: {
      ...defaultMRTOptions.initialState,
    },
    positionActionsColumn: 'first',
    columns,
    data: solvedAlarms,
    enableRowActions: true,
    getRowId: (row) => row.id.toString(),
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
  });

  return <MaterialReactTable table={table} />;
}
