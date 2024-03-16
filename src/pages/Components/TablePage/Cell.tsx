import { MRT_Cell, MRT_TableInstance } from 'material-react-table';

import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import { useSoftColor } from '~/hooks';

import { Person } from '~/pages/Components/TablePage';
import { DENSITY } from '~/pages/Components/TablePage/utils';

export interface ICellProps {
  cell: MRT_Cell<Person, unknown>;
  table: MRT_TableInstance<Person>;
  highlight?: boolean;
}

export function Cell(props: ICellProps) {
  const { cell, table, highlight } = props;
  const padding = DENSITY[table.getState().density];
  const { bgrColor } = useSoftColor('primary');

  return (
    <Typography
      fontSize={12}
      sx={(theme) => ({
        paddingTop: padding,
        paddingBottom: padding,
        textWrap: 'wrap',
        fontWeight: highlight ? 'bold' : 'inherit',
        color: highlight ? theme.palette.primary.main : 'inherit',
      })}
    >
      Test
    </Typography>
  );
}
