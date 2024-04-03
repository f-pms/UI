import { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';
import { useNavigate } from 'react-router-dom';

import { useQueryUsers } from '~/services/user/queries/useQueryUsers';
import { Role, User } from '~/types';
import { translateUserRole } from '~/utils';

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

  const { data: users, isLoading } = useQueryUsers({
    page: pagination.pageIndex + 1,
    size: pagination.pageSize,
  });

  useEffect(() => {
    navigate({
      search: `?page=${pagination.pageIndex + 1}&size=${pagination.pageSize}`,
    });
  }, [navigate, pagination]);

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
        id: 'role',
        header: 'Vai trò',
        accessorFn: (row) => translateUserRole(row.role.toUpperCase() as Role),
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
    data: users?.content ?? [],
    enableRowNumbers: true,
    enableRowActions: true,
    getRowId: (row) => row.id.toString(),
    manualPagination: true,
    rowCount: users?.recordTotal ?? 0,
    onPaginationChange: setPagination,
    state: { pagination },
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
      'mrt-row-numbers': {
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        size: 5,
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
            label={`${users?.recordTotal ?? 0} người dùng`}
            shape='square'
            size='small'
          />
        </Stack>
      );
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return <MaterialReactTable table={table} />;
}
