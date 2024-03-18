import { useMemo } from 'react';
import {
  MaterialReactTable,
  MRT_Cell,
  MRT_Column,
  MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';

import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import { Cell } from '~/pages/Report/partials/Tables/ElectricalIndexTable/Cell';
import { CellMultiLine } from '~/pages/Report/partials/Tables/ElectricalIndexTable/CellMultiLine';
import Header from '~/pages/Report/partials/Tables/ElectricalIndexTable/Header';
import { HeaderMultiLine } from '~/pages/Report/partials/Tables/ElectricalIndexTable/HeaderMultiLine';

import { SoftChip } from '~/components';

export interface Person {
  name: string;
  age: number;
}

const persons: Person[] = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Sara',
    age: 1000000,
  },
  {
    name: 'Harry',
    age: 15,
  },
  {
    name: 'Dyan',
    age: 15,
  },
];

export interface IElectricalIndexTableProps {}

export default function ElectricalIndexTable() {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'stt',
        header: 'STT',
        Header: ({ column }: { column: MRT_Column<Person, unknown> }) => (
          <Header header={column.columnDef.header} width={40} />
        ),
        Cell: ({ cell }: { cell: MRT_Cell<Person, unknown> }) => (
          <Cell<Person> cell={cell} />
        ),
        size: 0,
      },
      {
        accessorKey: 'info',
        header: 'Thông tin vị trí sử dụng',
        Header: ({ column }: { column: MRT_Column<Person, unknown> }) => (
          <Header header={column.columnDef.header} width={100} />
        ),
        Cell: ({ cell }: { cell: MRT_Cell<Person, unknown> }) => (
          <Cell<Person> cell={cell} />
        ),
      },
      {
        accessorKey: 'room',
        header: 'Phòng điện',
        Header: ({ column }: { column: MRT_Column<Person, unknown> }) => (
          <Header header={column.columnDef.header} width={100} />
        ),
        Cell: ({ cell }: { cell: MRT_Cell<Person, unknown> }) => (
          <Cell<Person> cell={cell} />
        ),
        size: 0,
      },
      {
        accessorKey: 'position',
        header: 'Vị trí đặt đồng hồ điện',
        Header: ({ column }: { column: MRT_Column<Person, unknown> }) => (
          <Header header={column.columnDef.header} width={100} />
        ),
        Cell: ({ cell }: { cell: MRT_Cell<Person, unknown> }) => (
          <Cell<Person> cell={cell} />
        ),
      },
      {
        accessorKey: 'age',
        header: 'Hệ số đồng hồ',
        Header: ({ column }: { column: MRT_Column<Person, unknown> }) => (
          <Header
            header={column.columnDef.header}
            orderNumber='(1)'
            width={60}
          />
        ),
        Cell: ({ cell }: { cell: MRT_Cell<Person, unknown> }) => (
          <Cell<Person> cell={cell} />
        ),
        size: 0,
      },
      {
        id: 'shift-1',
        header: 'Tuổi',
        Header: () => (
          <HeaderMultiLine
            newIndex={{
              label: 'Chỉ số mới',
              orderNumber: '(3)',
            }}
            oldIndex={{
              label: 'Chỉ số cũ',
              orderNumber: '(2)',
            }}
            shift='Lần chốt 1'
            time="6h00' - 9h30'"
            total={{
              label: 'Tổng(Gwh)',
              orderNumber: '(4)=(3)+(2)',
            }}
          />
        ),
        Cell: ({ cell }: { cell: MRT_Cell<Person, unknown> }) => {
          return <CellMultiLine cell={cell} />;
        },
      },
      {
        accessorKey: 'shift-2',
        header: 'Tên',
        Header: () => (
          <HeaderMultiLine
            newIndex={{
              label: 'Chỉ số mới',
              orderNumber: '(6)',
            }}
            oldIndex={{
              label: 'Chỉ số cũ',
              orderNumber: '(5)',
            }}
            shift='Lần chốt 2'
            time="9h30' - 11h30'"
            total={{
              label: 'Tổng(Gwh)',
              orderNumber: '(7)=(6)+(5)',
            }}
          />
        ),
        Cell: ({ cell }: { cell: MRT_Cell<Person, unknown> }) => {
          return <CellMultiLine cell={cell} />;
        },
      },
      {
        accessorFn: (originalRow) => originalRow.age,
        id: 'shift-3',
        header: 'Tuổi',
        Header: () => (
          <HeaderMultiLine
            newIndex={{
              label: 'Chỉ số mới',
              orderNumber: '(9)',
            }}
            oldIndex={{
              label: 'Chỉ số cũ',
              orderNumber: '(8)',
            }}
            shift='Lần chốt 3'
            time="11h30' - 17h00'"
            total={{
              label: 'Tổng(Gwh)',
              orderNumber: '(10)=(9)+(8)',
            }}
          />
        ),
        Cell: ({ cell }: { cell: MRT_Cell<Person, unknown> }) => {
          return <CellMultiLine cell={cell} />;
        },
      },
      {
        accessorFn: (originalRow) => originalRow.age,
        id: 'shift-4',
        header: 'Tuổi',
        Header: () => (
          <HeaderMultiLine
            newIndex={{
              label: 'Chỉ số mới',
              orderNumber: '(11)',
            }}
            oldIndex={{
              label: 'Chỉ số cũ',
              orderNumber: '(12)',
            }}
            shift='Lần chốt 4'
            time="17h00' - 18h00'"
            total={{
              label: 'Tổng(Gwh)',
              orderNumber: '(13)=(12)+(11)',
            }}
          />
        ),
        Cell: ({ cell }: { cell: MRT_Cell<Person, unknown> }) => {
          return <CellMultiLine cell={cell} />;
        },
      },
      {
        accessorKey: 'total',
        header: 'Tổng số điện sử dụng (KWh)',
        Header: ({ column }: { column: MRT_Column<Person, unknown> }) => (
          <Header
            header={column.columnDef.header}
            orderNumber='(14)=(1)*(4+7+10+13)'
            width={100}
          />
        ),
        Cell: ({ cell }: { cell: MRT_Cell<Person, unknown> }) => (
          <Cell<Person> cell={cell} highlight={true} />
        ),
        size: 0,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    initialState: {
      density: 'compact',
    },
    columns,
    data: persons,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
    enableDensityToggle: false,
    muiTableProps: {
      sx: {
        border: 0,
        caption: {
          captionSide: 'top',
        },
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .12)',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        textAlign: 'center',
        fontSize: 12,
        background: grey[300],

        '& > .Mui-TableHeadCell-Content': {
          width: '100%',
          '& > .Mui-TableHeadCell-Content-Labels': {
            width: '100%',
            '& > .Mui-TableHeadCell-Content-Wrapper': {
              width: '100%',
            },
          },
        },

        '& table, th, td': {
          border: '1px solid rgba(81, 81, 81, .12)',
          borderCollapse: 'collapse',
          fontWeight: 500,
        },

        '& table': {
          width: '100%',
          height: '100%',
          border: 0,
        },

        '& table > thead > tr > th:first-of-type': {
          borderLeft: 0,
        },
        '& table > thead > tr > th:last-of-type': {
          borderRight: 0,
        },
        '& table > thead > tr:last-of-type': {
          '& > th': {
            borderBottom: 0,
          },
        },
        '& table > thead > tr:first-of-type': {
          '& > th': {
            borderTop: 0,
            fontWeight: 700,
          },
        },
      },
    },
    muiTableBodyCellProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .12)',
        paddingLeft: 0,
        paddingRight: 0,
        textAlign: 'center',
        fontSize: 12,
        backgroundColor: 'gray.100',
        position: 'relative',

        '& table, th, td': {
          border: '1px solid rgba(81, 81, 81, .12)',
          borderCollapse: 'collapse',
          fontWeight: 500,
        },

        '& table': {
          width: '100%',
          height: '100%',
          border: 0,
        },
        '& table > thead > tr > td:first-of-type': {
          borderLeft: 0,
        },
        '& table > thead > tr > td:last-of-type': {
          borderRight: 0,
        },
        '& table > thead > tr:last-of-type': {
          '& > td': {
            borderBottom: 0,
          },
        },
        '& table > thead > tr:first-of-type': {
          '& > td': {
            borderTop: 0,
          },
        },
      },
    },
    muiTopToolbarProps: {
      sx: {
        '& > .MuiBox-root': {
          alignItems: 'center',
        },
      },
    },
    muiBottomToolbarProps: {
      sx: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        pr: 2,
        '& > .MuiBox-root': {
          padding: 0,
        },
      },
    },
    renderTopToolbarCustomActions: () => {
      return (
        <Typography fontWeight='bold' variant='subtitle1'>
          I. Danh mục chốt chỉ số các đồng hồ điện thuộc cụm chế biến dăm
        </Typography>
      );
    },
    renderBottomToolbarCustomActions: () => {
      return (
        <Stack alignItems='center' direction='row' spacing={1}>
          <Typography
            color='text.strong'
            sx={{ fontWeight: 'bold' }}
            variant='body2'
          >
            Tổng số điện sử dụng (KWh):
          </Typography>
          <SoftChip label={'1.000.000'} shape='square' size='small' />
        </Stack>
      );
    },
  });

  return <MaterialReactTable table={table} />;
}
