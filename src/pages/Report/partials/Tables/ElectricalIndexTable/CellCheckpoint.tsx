import { Box, Stack, Typography } from '@mui/material';

import { CheckpointValue } from '~/types';

export interface ICellMultiLineProps {
  width?: number;
  values: CheckpointValue[];
  rowIndex: number;
  rowHeights: number[][];
}

export function CellCheckpoint(props: ICellMultiLineProps) {
  const { values, rowIndex, rowHeights } = props;
  return (
    <Box
      sx={{
        textAlign: 'center',
        width: '100%',
      }}
    >
      {values.map((item, index) => (
        <Stack
          key={`${index}-${rowIndex}`}
          direction='row'
          sx={{
            height: `${rowHeights[rowIndex][index] * 32}px`,
            borderBottom: '1px solid #e0e0e0',
            '&:last-child': { borderBottom: 'none' },
          }}
        >
          <Stack
            alignItems='center'
            justifyContent='center'
            style={{ flex: 1 }}
            sx={{
              textAlign: 'center',
            }}
          >
            <Typography fontSize={12}>{1000}</Typography>
          </Stack>
          <Stack
            alignItems='center'
            justifyContent='center'
            style={{ flex: 1 }}
            sx={{
              textAlign: 'center',
              borderLeft: '1px solid #e0e0e0',
            }}
          >
            <Typography fontSize={12} fontWeight='bold'>
              {1000}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Box>
  );
}
