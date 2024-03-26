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
import { CreateUserDialog } from '~/pages/Users/partials/Dialogs/CreateUserDialog';

import { SoftChip } from '~/components';
import {
  ContentPasteSearchOutlinedIcon,
  DeleteOutlineOutlinedIcon,
} from '~/components/Icons';
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  Typography,
} from '~/components/MuiComponents';
import { getDefaultMRTOptions } from '~/components/Table';

const defaultMRTOptions = getDefaultMRTOptions<User>();

export interface IUserTableProps {}
export function UserTable() {
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const handleViewDetail = (user: User, closeMenu: () => void) => {
    navigate(`/users/${user.id}`);
    closeMenu();
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
    positionActionsColumn: 'first',
    columns,
    data: USERS,
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
    renderRowActionMenuItems: ({ row, closeMenu }) => [
      <MenuItem
        key='edit'
        onClick={() => handleViewDetail(row.original, closeMenu)}
      >
        <ListItemIcon>
          <ContentPasteSearchOutlinedIcon sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText>Thông tin chi tiết</ListItemText>
      </MenuItem>,
      <CreateUserDialog key='create' closeMenu={closeMenu} />,
      <ConfirmDeleteUserDialog key='delete' closeMenu={closeMenu}>
        <MenuItem key='delete'>
          <ListItemIcon>
            <DeleteOutlineOutlinedIcon sx={{ fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText>Xóa người dùng</ListItemText>
        </MenuItem>
      </ConfirmDeleteUserDialog>,
    ],
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
