import _ from 'lodash';

import { Box, Typography } from '@mui/material';

export interface ICellMultiLineProps {
  width?: number;
  values: string[] | number[];
  rowHeights: number[][];
  rowIndex: number;
  highlight?: boolean;
}

export function CellMultiLine(props: ICellMultiLineProps) {
  const { highlight, values, width, rowHeights, rowIndex } = props;

  return (
    <Box sx={{ width: `${width}px` }}>
      {values.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: `${width}px`,
            height: `${rowHeights[rowIndex][index] * 32}px`,
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
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
