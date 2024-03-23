import { Box, Typography } from '@mui/material';

import { AutoSuggestHighlightText } from '~/components';

import { getRowHeight } from '../../../helpers/getRowHeight';

export interface ICellMultiLineProps {
  width: number;
  values: string[] | number[];
  linesPerRows: number[][];
  rowIndex: number;
  highlight?: boolean;
  filterValue?: string;
}

export function CellMultiLine(props: ICellMultiLineProps) {
  const {
    highlight,
    values,
    width,
    linesPerRows,
    rowIndex,
    filterValue = '',
  } = props;

  return (
    <Box sx={{ minWidth: `${width}px` }}>
      {values.map((item, index) => {
        return (
          <Box
            key={`${rowIndex}-${index}`}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: `${width}px`,
              height: getRowHeight(linesPerRows[rowIndex][index]),
              textWrap: 'wrap',

              borderBottom: '1px solid #e0e0e0',
              '&:last-child': { borderBottom: 'none' },
              padding: '1px 4px',
            }}
          >
            <Typography
              fontSize={12}
              sx={(theme) => ({
                textAlign: 'center',
                fontWeight: highlight ? 'bold' : 'inherit',
                color: highlight ? theme.palette.primary.main : 'inherit',
              })}
            >
              <AutoSuggestHighlightText
                filterValue={filterValue}
                value={item.toString()}
              />
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
