import { MRT_Cell, MRT_RowData } from 'material-react-table';

export interface ICellMultiLineProps<T extends MRT_RowData> {
  cell: MRT_Cell<T, unknown>;
  width?: number;
}

export function CellMultiLine<T extends MRT_RowData>(
  props: ICellMultiLineProps<T>,
) {
  const { width = 90, cell } = props;

  return (
    <table
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <thead>
        <tr>
          <td
            style={{
              minWidth: `${width}px`,
            }}
          >
            {cell.getValue<string | number>()}
          </td>
          <td
            style={{
              minWidth: `${width}px`,
            }}
          >
            1000
          </td>
          <td
            style={{
              minWidth: `${width}px`,
              fontWeight: 'bolder',
            }}
          >
            1000
          </td>
        </tr>
      </thead>
    </table>
  );
}
