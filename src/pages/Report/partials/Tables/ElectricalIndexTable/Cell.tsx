import { MRT_Cell, MRT_RowData } from 'material-react-table';

import { Typography } from '@mui/material';

export interface ICellProps<T extends MRT_RowData> {
  cell: MRT_Cell<T, unknown>;
  highlight?: boolean;
}

export function Cell<T extends MRT_RowData>(props: ICellProps<T>) {
  const { highlight, cell } = props;

  return (
    <Typography
      fontSize={13}
      sx={(theme) => ({
        textWrap: 'wrap',
        fontWeight: highlight ? 'bold' : 'inherit',
        color: highlight ? theme.palette.primary.main : 'inherit',
      })}
    >
      {cell.getValue<string | number>()}
    </Typography>
  );
}
