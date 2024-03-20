import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';

import { formatNumber } from '~/utils';

export interface ITotalTableProps {
  title: string;
  headers: string[];
  rows: {
    name: string;
    value: number;
  }[];
  totalOutput: number;
  totalElectricalUsage: number;
  total: number;
}

export function TotalTable(props: ITotalTableProps) {
  const { title, headers, rows, totalOutput, totalElectricalUsage, total } =
    props;
  return (
    <TableContainer component={Paper}>
      <Typography
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
        <TableHead sx={{ background: grey[200] }}>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header} align='center'>
                <Typography
                  fontSize={12}
                  sx={{ fontWeight: 'bold' }}
                  variant='body2'
                >
                  {header}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align='left' sx={{ fontSize: 12 }}>
              {rows[0].name}
            </TableCell>
            <TableCell align='center' sx={{ fontSize: 12 }}>
              {formatNumber(rows[0].value, 6)}
            </TableCell>
            <TableCell align='center' rowSpan={4} sx={{ fontSize: 12 }}>
              {formatNumber(totalOutput, 6)}
            </TableCell>
            <TableCell align='center' rowSpan={4} sx={{ fontSize: 12 }}>
              {formatNumber(totalElectricalUsage, 6)}
            </TableCell>
          </TableRow>
          {rows.slice(1).map((row) => (
            <TableRow key={row.name}>
              <TableCell align='left' sx={{ fontSize: 12 }}>
                {row.name}
              </TableCell>
              <TableCell align='center' sx={{ fontSize: 12 }}>
                {formatNumber(row.value, 6)}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align='center'>
              <Typography
                fontSize={12}
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                  fontWeight: 'bold',
                })}
                variant='body2'
              >
                Tổng
              </Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography
                fontSize={12}
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                  fontWeight: 'bold',
                })}
                variant='body2'
              >
                {formatNumber(total, 6)}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
