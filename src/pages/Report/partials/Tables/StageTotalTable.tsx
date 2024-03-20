import {
  Box,
  Paper,
  Stack,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { formatNumber } from '~/utils';

import { SoftChip } from '~/components';

export interface IStageTotalTableProps {
  title: string;
  contents: string;
  total: number;
}

export function StageTotalTable(props: IStageTotalTableProps) {
  const { title, contents, total } = props;
  return (
    <Box>
      <TableContainer component={Paper}>
        <Typography
          color='primary'
          p={2}
          sx={{
            border: '1px solid #e0e0e0',
            borderBottom: 'none',
            fontWeight: 'bold',
          }}
          variant='body2'
        >
          {title}
        </Typography>
        <Table
          size='small'
          sx={{
            '& .MuiTableCell-root': {
              border: '1px solid #e0e0e0',
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align='center'>
                <Stack
                  alignItems='center'
                  direction='row'
                  justifyContent='center'
                  spacing={1}
                >
                  <Typography sx={{ fontWeight: 'bold' }} variant='body1'>
                    {contents}
                  </Typography>
                  <SoftChip
                    label={`${formatNumber(total, 6)} (KWh)`}
                    shape='square'
                  />
                </Stack>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Box>
  );
}
