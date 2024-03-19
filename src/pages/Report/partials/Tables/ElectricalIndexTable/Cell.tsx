import _ from 'lodash';

import { Stack, Typography } from '@mui/material';

export interface ICellProps {
  value: string | number;
  rowHeights: number[][];
  rowIndex: number;
}

export function Cell(props: ICellProps) {
  const { value, rowHeights, rowIndex } = props;

  return (
    <Stack
      justifyContent='center'
      sx={{
        width: '100%',
        height: `${_.sum(rowHeights[rowIndex]) * 32}px`,
        padding: '0px 4px',
        textWrap: 'wrap',
      }}
    >
      <Typography fontSize={12} textAlign='center'>
        {value}
      </Typography>
    </Stack>
  );
}
