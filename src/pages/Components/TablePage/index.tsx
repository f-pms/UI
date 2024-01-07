import { useMemo } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef, //if using TypeScript (optional, but recommended)
  useMaterialReactTable,
} from 'material-react-table';

import { Button, Divider, Stack, Tooltip, Typography } from '@mui/material';

import { AddCircleOutlineOutlinedIcon } from '~/components/Icons';

//If using TypeScript, define the shape of your data (optional, but recommended)
interface Person {
  name: string;
  age: number;
}

export interface ITablePageProps {}

//mock data - strongly typed if you are using TypeScript (optional, but recommended)
const persons: Person[] = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Sara',
    age: 25,
  },
];

export function TablePage() {
  //column definitions - strongly typed if you are using TypeScript (optional, but recommended)
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name', //simple recommended way to define a column
        header: 'Tên',
      },
      {
        accessorFn: (originalRow) => originalRow.age, //alternate way
        id: 'age', //id required if you use accessorFn instead of accessorKey
        header: 'Tuổi',
      },
    ],
    [],
  );

  //pass table options to useMaterialReactTable
  const table = useMaterialReactTable({
    columns,
    data: persons, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableRowSelection: true, //enable some features
    enableColumnFilters: false,
    enableFilterMatchHighlighting: false,
    enableColumnOrdering: false,
    enableHiding: true,
    localization: {
      and: 'và',
      cancel: 'Đóng',
      clearFilter: 'Xóa',
      clearSearch: 'Xóa',
      toggleFullScreen: 'Toàn mành hình',
      toggleDensity: 'Tăng/Giảm dãn cách dòng',
      showHideColumns: 'Ẩn/Hiện cột',
      sortByColumnAsc: 'Sắp xếp tăng dần theo {column}',
      sortByColumnDesc: 'Sắp xếp giảm dần theo {column}',
      sortedByColumnAsc: 'Đã sắp xếp tăng dần theo {column}',
      sortedByColumnDesc: 'Đã sắp xếp giảm dần theo {column}',
      clearSort: 'Không sắp xếp',
      rowsPerPage: 'Số dòng mỗi trang',
      hideAll: 'Ẩn tất cả',
      hideColumn: 'Ẩn cột {column}',
      showAll: 'Hiện tất cả',
      showAllColumns: 'Hiện tất cả cột',
      select: 'Lựa chọn',
      save: 'Lưu',
      search: 'Tìm kiếm',
      toggleSelectAll: 'Chọn/Hủy tất cả',
      toggleSelectRow: 'Chọn/Hủy dòng này',
    },
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

  //note: you can also pass table options as props directly to <MaterialReactTable /> instead of using useMaterialReactTable
  //but the useMaterialReactTable hook will be the most recommended way to define table options
  return <MaterialReactTable table={table} />;
}
