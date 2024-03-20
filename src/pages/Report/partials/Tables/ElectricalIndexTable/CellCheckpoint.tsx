import { Box, Stack, Typography } from '@mui/material';

import { CheckpointValue } from '~/types';

import { Checkpoint } from '~/pages/Report/helpers/columns';

export interface ICellMultiLineProps {
  width: number;
  values: CheckpointValue[];
  rowIndex: number;
  rowHeights: number[][];
  checkpoint: Checkpoint;
}

export function CellCheckpoint(props: ICellMultiLineProps) {
  const { width, values, rowIndex, rowHeights, checkpoint } = props;
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
              minWidth: `${width}px`,
            }}
          >
            <Typography fontSize={12}>{item[checkpoint].newValue}</Typography>
          </Stack>
          <Stack
            alignItems='center'
            justifyContent='center'
            style={{ flex: 1 }}
            sx={{
              textAlign: 'center',
              borderLeft: '1px solid #e0e0e0',
              minWidth: `${width}px`,
            }}
          >
            <Typography fontSize={12} fontWeight='bold'>
              {item[checkpoint].total}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Box>
  );
}
