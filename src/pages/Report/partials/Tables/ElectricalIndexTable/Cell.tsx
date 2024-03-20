import _ from 'lodash';

import { Stack, Typography } from '@mui/material';

import { AutoSuggestHighlightText } from '~/components';

export interface ICellProps {
  width: number;
  value: string | number;
  rowHeights: number[][];
  rowIndex: number;
  filterValue?: string;
}

export function Cell(props: ICellProps) {
  const { width, value, rowHeights, rowIndex, filterValue = '' } = props;

  return (
    <Stack
      justifyContent='center'
      sx={{
        width: '100%',
        height: `${_.sum(rowHeights[rowIndex]) * 32}px`,
        minWidth: `${width}px`,
        padding: '0px 4px',
        textWrap: 'wrap',
      }}
    >
      <Typography fontSize={12} textAlign='center'>
        <AutoSuggestHighlightText
          filterValue={filterValue}
          value={value.toString()}
        />
      </Typography>
    </Stack>
  );
}
