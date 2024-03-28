import { useMemo, useState } from 'react';
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';
import { useNavigate } from 'react-router-dom';

import { User } from '~/types';

import { USERS } from '~/pages/Users/mocks/users';
import { ConfirmDeleteUserDialog } from '~/pages/Users/partials/Dialogs/ConfirmDeleteUserDialog';

import { SoftButton, SoftChip } from '~/components';
import {
  ContentPasteSearchOutlinedIcon,
  DeleteOutlineOutlinedIcon,
} from '~/components/Icons';
import { Stack, Typography } from '~/components/MuiComponents';
import { getDefaultMRTOptions } from '~/components/Table';

const defaultMRTOptions = getDefaultMRTOptions<User>();

export interface IUserTableProps {}
export function UserTable() {
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const handleViewDetail = (user: User) => {
    navigate(`/users/${user.id}`);
  };

  const columns: MRT_ColumnDef<User>[] = useMemo(
    () => [
      {
        accessorKey: 'fullName',
        header: 'Họ và tên',
      },
      {
        accessorKey: 'username',
        header: 'Tên đăng nhập',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'role',
        header: 'Vai trò',
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    ...defaultMRTOptions,
    initialState: {
      ...defaultMRTOptions.initialState,
    },
    positionActionsColumn: 'last',
    columns,
    data: USERS,
    enableRowNumbers: true,
    enableRowActions: true,
    getRowId: (row) => row.id.toString(),
    onPaginationChange: setPagination, //hoist pagination state to your state when it changes internally
    state: { pagination }, //pass the pagination state to the table
    displayColumnDefOptions: {
      'mrt-row-actions': {
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        size: 0,
      },
    },
    renderRowActions: ({ row }) => {
      return (
        <Stack
          alignItems='center'
          direction='row'
          justifyContent='center'
          spacing={2}
          sx={{ minWidth: '240px' }}
        >
          <SoftButton
            color='primary'
            size='small'
            startIcon={<ContentPasteSearchOutlinedIcon />}
            onClick={() => handleViewDetail(row.original)}
          >
            Xem chi tiết
          </SoftButton>
          {
            <ConfirmDeleteUserDialog userId={row.original.id}>
              <SoftButton
                color='rose'
                size='small'
                startIcon={<DeleteOutlineOutlinedIcon />}
              >
                Xóa người dùng
              </SoftButton>
            </ConfirmDeleteUserDialog>
          }
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
            label={`${USERS.length} người dùng`}
            shape='square'
            size='small'
          />
        </Stack>
      );
    },
  });

  return <MaterialReactTable table={table} />;
}
