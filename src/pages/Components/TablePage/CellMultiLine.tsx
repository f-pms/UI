import * as React from 'react';
import { MRT_Cell, MRT_TableInstance } from 'material-react-table';

import { Box, Stack } from '@mui/material';

import { useSoftColor } from '~/hooks';

import { Person } from '~/pages/Components/TablePage';
import { DENSITY } from '~/pages/Components/TablePage/utils';

export interface ICellMultiLineProps {
  cell: MRT_Cell<Person, unknown>;
  table: MRT_TableInstance<Person>;
  width?: number;
}

export function CellMultiLine(props: ICellMultiLineProps) {
  const { cell, table, width = 90 } = props;
  const padding = DENSITY[table.getState().density];

  return (
    <table
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <thead>
        <tr>
          <td
            style={{
              minWidth: `${width}px`,
              paddingTop: padding,
              paddingBottom: padding,
            }}
          >
            10000
          </td>
          <td
            style={{
              minWidth: `${width}px`,
              paddingTop: padding,
              paddingBottom: padding,
            }}
          >
            1000
          </td>
          <td
            style={{
              minWidth: `${width}px`,
              paddingTop: padding,
              paddingBottom: padding,
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
