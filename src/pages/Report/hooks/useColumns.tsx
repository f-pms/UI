import { useMemo } from 'react';
import _ from 'lodash';
import {
  MRT_Cell,
  MRT_Column,
  MRT_ColumnDef,
  MRT_TableInstance,
} from 'material-react-table';
import { useSearchParams } from 'react-router-dom';

import {
  CheckpointValue,
  ElectricalMeterReadingRowValues,
  Shift,
} from '~/types';

import {
  Checkpoint,
  CHECKPOINT_HEADERS,
  ColumnReportTable,
  REPORT_TABLE_COLUMNS,
  SHIFT_TIME,
} from '~/pages/Report/helpers/columns';
import { Cell as CellCustom } from '~/pages/Report/partials/Tables/ElectricalMeterReadingTable/Cell';
import { CellCheckpoint } from '~/pages/Report/partials/Tables/ElectricalMeterReadingTable/CellCheckpoint';
import { CellMultiLine } from '~/pages/Report/partials/Tables/ElectricalMeterReadingTable/CellMultiLine';
import { Header as HeaderCustom } from '~/pages/Report/partials/Tables/ElectricalMeterReadingTable/Header';
import { HeaderMultiLine } from '~/pages/Report/partials/Tables/ElectricalMeterReadingTable/HeaderMultiLine';

const MyHeader = ({
  col,
  column,
  shift,
  totalOrderNumber,
}: {
  column: MRT_Column<ElectricalMeterReadingRowValues, unknown>;
  shift: Shift;
  col: ColumnReportTable;
  totalOrderNumber: string;
}) => {
  if (col.isMultiColumn) {
    const checkpoint = column.id as keyof typeof CHECKPOINT_HEADERS;
    const props = {
      ...CHECKPOINT_HEADERS[checkpoint],
      time: SHIFT_TIME[shift][checkpoint],
    };
    return <HeaderMultiLine {...props} width={col.width} />;
  }

  const orderNumber = () => {
    switch (col.id) {
      case 'checkpointTotal':
        return totalOrderNumber;
      case 'meterMultiplier':
        return '(1)';
      case 'oldElectricValue':
        return '(2)';
      default:
        return null;
    }
  };
  return (
    <HeaderCustom
      header={column.columnDef.header}
      orderNumber={orderNumber()}
      width={col.width}
    />
  );
};

const MyCell = ({
  cell,
  col,
  linesPerRows,
  filterValue,
}: {
  cell: MRT_Cell<ElectricalMeterReadingRowValues, unknown>;
  col: ColumnReportTable;
  linesPerRows: number[][];
  filterValue?: string;
}) => {
  if (col.isMultiRLineInRow) {
    return (
      <CellMultiLine
        filterValue={filterValue}
        highlight={cell.column.id === 'checkpointTotal'}
        linesPerRows={linesPerRows}
        rowIndex={cell.row.index}
        values={cell.getValue<string[] | number[]>()}
        width={col.width}
      />
    );
  }
  if (col.isMultiColumn) {
    return (
      <CellCheckpoint
        checkpoint={col.id as Checkpoint}
        linesPerRows={linesPerRows}
        rowIndex={cell.row.index}
        values={cell.getValue<CheckpointValue[]>()}
        width={col.width}
      />
    );
  }
  return (
    <CellCustom
      filterValue={filterValue}
      linesPerRows={linesPerRows}
      rowIndex={cell.row.index}
      value={cell.getValue<string | number>()}
      width={col.width}
    />
  );
};

interface IUseColumns {
  totalOrderNumber: string;
  tableRowData: ElectricalMeterReadingRowValues[];
}
export function useColumns({ totalOrderNumber, tableRowData }: IUseColumns) {
  const [searchParams] = useSearchParams();
  const shift = searchParams.get('shift') as Shift | Shift.MORNING;

  const calculateNumberOfLine = (row: number, line: number) => {
    const colEquipments = REPORT_TABLE_COLUMNS.find(
      (item) => item.id === 'equipments',
    );
    const colLocationInfo = REPORT_TABLE_COLUMNS.find(
      (item) => item.id === 'locationInfo',
    );
    const colElectricRoom = REPORT_TABLE_COLUMNS.find(
      (item) => item.id === 'electricRoom',
    );

    if (!colEquipments || !colLocationInfo || !colElectricRoom) return 1;
    return (
      _.max([
        (tableRowData[row].locationInfo.length * 7.5) / colLocationInfo.width,
        (tableRowData[row].electricRoom.length * 7.5) / colElectricRoom.width,
        (tableRowData[row].equipments[line].length * 7.5) / colEquipments.width,
      ]) ?? 1
    );
  };

  const linesPerRows = useMemo(() => {
    return tableRowData.map((item, row) => {
      return item.equipments.map((__, line) => {
        return _.round(calculateNumberOfLine(row, line));
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableRowData]);

  const columns = useMemo<
    MRT_ColumnDef<ElectricalMeterReadingRowValues>[]
  >(() => {
    const columns: MRT_ColumnDef<ElectricalMeterReadingRowValues>[] = [];

    REPORT_TABLE_COLUMNS.forEach((col) => {
      columns.push({
        id: col.id,
        accessorKey: col.accessorKey,
        header: col.header,
        Header: ({
          column,
        }: {
          column: MRT_Column<ElectricalMeterReadingRowValues, unknown>;
        }) => (
          <MyHeader
            col={col}
            column={column}
            shift={shift}
            totalOrderNumber={totalOrderNumber}
          />
        ),
        Cell: ({
          cell,
          table,
        }: {
          cell: MRT_Cell<ElectricalMeterReadingRowValues, unknown>;
          table: MRT_TableInstance<ElectricalMeterReadingRowValues>;
        }) => (
          <MyCell
            cell={cell}
            col={col}
            filterValue={table.refs.searchInputRef.current?.value}
            linesPerRows={linesPerRows}
          />
        ),
        size: 0,
      });
    });
    return columns;
  }, [linesPerRows, shift, totalOrderNumber]);

  return { columns };
}
