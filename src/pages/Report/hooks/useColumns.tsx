import { useMemo } from 'react';
import _ from 'lodash';
import {
  MRT_Cell,
  MRT_Column,
  MRT_ColumnDef,
  MRT_TableInstance,
} from 'material-react-table';
import { useSearchParams } from 'react-router-dom';

import { CheckpointValue, ElectricalMeterReadingRow, Shift } from '~/types';

import {
  Checkpoint,
  CHECKPOINT_HEADERS,
  ColumnReportTable,
  REPORT_TABLE_COLUMNS,
  SHIFT_TIME,
} from '~/pages/Report/helpers/columns';
import { ELECTRICAL_METER_READING_TABLE } from '~/pages/Report/mocks/electricalMeterReadingTable';
import { Cell as CellCustom } from '~/pages/Report/partials/Tables/ElectricalIndexTable/Cell';
import { CellCheckpoint } from '~/pages/Report/partials/Tables/ElectricalIndexTable/CellCheckpoint';
import { CellMultiLine } from '~/pages/Report/partials/Tables/ElectricalIndexTable/CellMultiLine';
import { Header as HeaderCustom } from '~/pages/Report/partials/Tables/ElectricalIndexTable/Header';
import { HeaderMultiLine } from '~/pages/Report/partials/Tables/ElectricalIndexTable/HeaderMultiLine';

const MyHeader = ({
  col,
  column,
  shift,
  totalOrderNumber,
}: {
  column: MRT_Column<ElectricalMeterReadingRow, unknown>;
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
  rowHeights,
  filterValue,
}: {
  cell: MRT_Cell<ElectricalMeterReadingRow, unknown>;
  col: ColumnReportTable;
  rowHeights: number[][];
  filterValue?: string;
}) => {
  if (col.isMultiRLineInRow) {
    return (
      <CellMultiLine
        filterValue={filterValue}
        rowHeights={rowHeights}
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
        rowHeights={rowHeights}
        rowIndex={cell.row.index}
        values={cell.getValue<CheckpointValue[]>()}
        width={col.width}
      />
    );
  }
  return (
    <CellCustom
      filterValue={filterValue}
      rowHeights={rowHeights}
      rowIndex={cell.row.index}
      value={cell.getValue<string | number>()}
      width={col.width}
    />
  );
};

interface IUseColumns {
  totalOrderNumber: string;
}
export function useColumns({ totalOrderNumber }: IUseColumns) {
  const [searchParams] = useSearchParams();
  const shift = searchParams.get('shift') as Shift | Shift.MORNING;

  const calculateHeight = (row: number, line: number) => {
    const colEquipments = REPORT_TABLE_COLUMNS.find(
      (item) => item.id === 'equipments',
    );
    const colElectricMeter = REPORT_TABLE_COLUMNS.find(
      (item) => item.id === 'electricMeter',
    );
    const colLocationInfo = REPORT_TABLE_COLUMNS.find(
      (item) => item.id === 'locationInfo',
    );
    const colElectricRoom = REPORT_TABLE_COLUMNS.find(
      (item) => item.id === 'electricRoom',
    );

    if (
      !colEquipments ||
      !colElectricMeter ||
      !colLocationInfo ||
      !colElectricRoom
    )
      return 1;
    return (
      _.max([
        (ELECTRICAL_METER_READING_TABLE.rows[row].locationInfo.length * 8) /
          colLocationInfo.width,
        (ELECTRICAL_METER_READING_TABLE.rows[row].electricRoom.length * 8) /
          colElectricRoom.width,
        (ELECTRICAL_METER_READING_TABLE.rows[row].electricMeter[line].length *
          8) /
          colElectricMeter.width,
        (ELECTRICAL_METER_READING_TABLE.rows[row].equipments[line].length * 8) /
          colEquipments.width,
      ]) ?? 1
    );
  };

  const rowHeights = useMemo(() => {
    return ELECTRICAL_METER_READING_TABLE.rows.map((item, row) => {
      return item.equipments.map((__, line) => {
        return _.round(calculateHeight(row, line));
      });
    });
  }, []);

  const columns = useMemo<MRT_ColumnDef<ElectricalMeterReadingRow>[]>(() => {
    const columns: MRT_ColumnDef<ElectricalMeterReadingRow>[] = [];

    REPORT_TABLE_COLUMNS.forEach((col) => {
      columns.push({
        id: col.id,
        accessorKey: col.accessorKey,
        header: col.header,
        Header: ({
          column,
        }: {
          column: MRT_Column<ElectricalMeterReadingRow, unknown>;
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
          cell: MRT_Cell<ElectricalMeterReadingRow, unknown>;
          table: MRT_TableInstance<ElectricalMeterReadingRow>;
        }) => (
          <MyCell
            cell={cell}
            col={col}
            filterValue={table.refs.searchInputRef.current?.value}
            rowHeights={rowHeights}
          />
        ),
        size: 0,
      });
    });
    return columns;
  }, [rowHeights, shift, totalOrderNumber]);

  return { columns };
}
