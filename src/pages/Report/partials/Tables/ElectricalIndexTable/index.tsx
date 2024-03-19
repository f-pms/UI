import { useMemo } from 'react';
import _ from 'lodash';
import {
  MaterialReactTable,
  MRT_Cell,
  MRT_Column,
  MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';

import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import { CheckpointValue, ElectricalMeterReadingRow } from '~/types';

import { ELECTRICAL_METER_READING_TABLE } from '~/pages/Report/mocks/ElectricalMeterReadingTable';
import { Cell } from '~/pages/Report/partials/Tables/ElectricalIndexTable/Cell';
import { CellCheckpoint } from '~/pages/Report/partials/Tables/ElectricalIndexTable/CellCheckpoint';
import { CellMultiLine } from '~/pages/Report/partials/Tables/ElectricalIndexTable/CellMultiLine';
import Header from '~/pages/Report/partials/Tables/ElectricalIndexTable/Header';
import { HeaderMultiLine } from '~/pages/Report/partials/Tables/ElectricalIndexTable/HeaderMultiLine';

import { SoftChip } from '~/components';

export interface IElectricalIndexTableProps {}

export default function ElectricalIndexTable() {
  const rowHeights = useMemo(() => {
    return ELECTRICAL_METER_READING_TABLE.rows.map((item) => {
      return item.equipments.map((e) => _.round((e.length * 6.5) / 240));
    });
  }, []);

  const columns = useMemo<MRT_ColumnDef<ElectricalMeterReadingRow>[]>(
    () => [
      {
        id: 'stt',
        header: 'STT',
        Header: ({
          column,
        }: {
          column: MRT_Column<ElectricalMeterReadingRow, unknown>;
        }) => <Header header={column.columnDef.header} width={20} />,
        Cell: ({
          cell,
        }: {
          cell: MRT_Cell<ElectricalMeterReadingRow, unknown>;
        }) => (
          <Cell
            rowHeights={rowHeights}
            rowIndex={cell.row.index}
            value={cell.row.index + 1}
          />
        ),
        size: 0,
      },
      {
        accessorKey: 'locationInfo',
        header: 'Thông tin vị trí sử dụng',
        Header: ({
          column,
        }: {
          column: MRT_Column<ElectricalMeterReadingRow, unknown>;
        }) => <Header header={column.columnDef.header} width={100} />,
        Cell: ({
          cell,
        }: {
          cell: MRT_Cell<ElectricalMeterReadingRow, unknown>;
        }) => (
          <Cell
            rowHeights={rowHeights}
            rowIndex={cell.row.index}
            value={cell.getValue<string>()}
          />
        ),
      },
      {
        accessorKey: 'electricRoom',
        header: 'Phòng điện',
        Header: ({
          column,
        }: {
          column: MRT_Column<ElectricalMeterReadingRow, unknown>;
        }) => <Header header={column.columnDef.header} width={100} />,
        Cell: ({
          cell,
        }: {
          cell: MRT_Cell<ElectricalMeterReadingRow, unknown>;
        }) => (
          <Cell
            rowHeights={rowHeights}
            rowIndex={cell.row.index}
            value={cell.getValue<string>()}
          />
        ),
        size: 0,
      },
      {
        accessorKey: 'electricMeter',
        header: 'Vị trí đặt đồng hồ điện',
        Header: ({
          column,
        }: {
          column: MRT_Column<ElectricalMeterReadingRow, unknown>;
        }) => <Header header={column.columnDef.header} width={180} />,
        Cell: ({
          cell,
        }: {
          cell: MRT_Cell<ElectricalMeterReadingRow, unknown>;
        }) => (
          <CellMultiLine
            rowHeights={rowHeights}
            rowIndex={cell.row.index}
            values={cell.getValue<string[]>()}
          />
        ),
        size: 0,
      },
      {
        accessorKey: 'equipments',
        header: 'Tên thiết bị sử dụng láp đồng hồ',
        Header: ({
          column,
        }: {
          column: MRT_Column<ElectricalMeterReadingRow, unknown>;
        }) => <Header header={column.columnDef.header} width={240} />,
        Cell: ({
          cell,
        }: {
          cell: MRT_Cell<ElectricalMeterReadingRow, unknown>;
        }) => (
          <CellMultiLine
            rowHeights={rowHeights}
            rowIndex={cell.row.index}
            values={cell.getValue<string[]>()}
          />
        ),
      },
      {
        accessorKey: 'meterMultiplier',
        header: 'Hệ số đồng hồ',
        Header: ({
          column,
        }: {
          column: MRT_Column<ElectricalMeterReadingRow, unknown>;
        }) => (
          <Header
            header={column.columnDef.header}
            orderNumber='(1)'
            width={90}
          />
        ),
        Cell: ({
          cell,
        }: {
          cell: MRT_Cell<ElectricalMeterReadingRow, unknown>;
        }) => (
          <CellMultiLine
            rowHeights={rowHeights}
            rowIndex={cell.row.index}
            values={cell.getValue<string[]>()}
          />
        ),
        size: 0,
      },
      {
        accessorKey: 'oldElectricValue',
        header: 'Chỉ số cũ',
        Header: ({
          column,
        }: {
          column: MRT_Column<ElectricalMeterReadingRow, unknown>;
        }) => (
          <Header
            header={column.columnDef.header}
            orderNumber='(2)'
            width={90}
          />
        ),
        Cell: ({
          cell,
        }: {
          cell: MRT_Cell<ElectricalMeterReadingRow, unknown>;
        }) => (
          <CellMultiLine
            rowHeights={rowHeights}
            rowIndex={cell.row.index}
            values={cell.getValue<string[]>()}
          />
        ),
        size: 0,
      },
      {
        id: 'checkpoints-1',
        accessorKey: 'checkpoints',
        header: 'Lần chốt 1',
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
              orderNumber: '(4)=(3)-(2)',
            }}
          />
        ),
        Cell: ({
          cell,
        }: {
          cell: MRT_Cell<ElectricalMeterReadingRow, unknown>;
        }) => {
          return (
            <CellCheckpoint
              rowHeights={rowHeights}
              rowIndex={cell.row.index}
              values={cell.getValue<CheckpointValue[]>()}
            />
          );
        },
      },
      {
        id: 'checkpoints-2',
        accessorKey: 'checkpoints',
        header: 'Lần chốt 2',
        Header: () => (
          <HeaderMultiLine
            newIndex={{
              label: 'Chỉ số mới',
              orderNumber: '(5)',
            }}
            oldIndex={{
              label: 'Chỉ số cũ',
              orderNumber: '(5)',
            }}
            shift='Lần chốt 2'
            time="9h30' - 11h30'"
            total={{
              label: 'Tổng(Gwh)',
              orderNumber: '(6)=(5)-(3)',
            }}
          />
        ),
        Cell: ({
          cell,
        }: {
          cell: MRT_Cell<ElectricalMeterReadingRow, unknown>;
        }) => {
          return (
            <CellCheckpoint
              rowHeights={rowHeights}
              rowIndex={cell.row.index}
              values={cell.getValue<CheckpointValue[]>()}
            />
          );
        },
      },
      {
        id: 'checkpoints-3',
        accessorKey: 'checkpoints',
        header: 'Lần chốt 3',
        Header: () => (
          <HeaderMultiLine
            newIndex={{
              label: 'Chỉ số mới',
              orderNumber: '(7)',
            }}
            oldIndex={{
              label: 'Chỉ số cũ',
              orderNumber: '(8)',
            }}
            shift='Lần chốt 3'
            time="11h30' - 17h00'"
            total={{
              label: 'Tổng(Gwh)',
              orderNumber: '(8)=(7)-(5)',
            }}
          />
        ),
        Cell: ({
          cell,
        }: {
          cell: MRT_Cell<ElectricalMeterReadingRow, unknown>;
        }) => {
          return (
            <CellCheckpoint
              rowHeights={rowHeights}
              rowIndex={cell.row.index}
              values={cell.getValue<CheckpointValue[]>()}
            />
          );
        },
      },
      {
        id: 'checkpoints-4',
        accessorKey: 'checkpoints',
        header: 'Lần chốt 4',
        Header: () => (
          <HeaderMultiLine
            newIndex={{
              label: 'Chỉ số mới',
              orderNumber: '(9)',
            }}
            oldIndex={{
              label: 'Chỉ số cũ',
              orderNumber: '(12)',
            }}
            shift='Lần chốt 4'
            time="17h00' - 18h00'"
            total={{
              label: 'Tổng(Gwh)',
              orderNumber: '(10)=(9)-(7)',
            }}
          />
        ),
        Cell: ({
          cell,
        }: {
          cell: MRT_Cell<ElectricalMeterReadingRow, unknown>;
        }) => {
          return (
            <CellCheckpoint
              rowHeights={rowHeights}
              rowIndex={cell.row.index}
              values={cell.getValue<CheckpointValue[]>()}
            />
          );
        },
      },
      {
        accessorKey: 'checkpointTotal',
        header: 'Tổng số điện sử dụng (KWh)',
        Header: ({
          column,
        }: {
          column: MRT_Column<ElectricalMeterReadingRow, unknown>;
        }) => (
          <Header
            header={column.columnDef.header}
            orderNumber='(14)=(1)*(4+6+8+10)'
            width={100}
          />
        ),
        Cell: ({
          cell,
        }: {
          cell: MRT_Cell<ElectricalMeterReadingRow, unknown>;
        }) => (
          <CellMultiLine
            highlight
            rowHeights={rowHeights}
            rowIndex={cell.row.index}
            values={cell.getValue<string[]>()}
          />
        ),
        size: 0,
      },
    ],
    [rowHeights],
  );

  const table = useMaterialReactTable({
    initialState: {
      density: 'compact',
    },
    columns,
    data: ELECTRICAL_METER_READING_TABLE.rows,
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
        border: '1px solid #e0e0e0',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        textAlign: 'center',
        fontSize: 12,
        background: grey[200],

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
          border: '1px solid #e0e0e0',
          borderCollapse: 'collapse',
          fontWeight: 700,
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
            fontWeight: 500,
            fontSize: 11,
          },
        },
        '& table > thead > tr:first-of-type': {
          '& > th': {
            borderTop: 0,
          },
        },
      },
    },
    muiTableBodyCellProps: {
      sx: {
        border: '1px solid #e0e0e0',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        fontSize: 12,
        backgroundColor: 'gray.100',
        position: 'relative',

        '& table, th, td': {
          border: '1px solid #e0e0e0',
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
