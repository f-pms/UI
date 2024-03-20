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

export interface ISubTableProps {
  title: string;
  orderNumber: string;
  rows: {
    label: string;
    coefficient: number;
    value: number;
  }[];
}

export default function SubTable(props: ISubTableProps) {
  const { title, orderNumber, rows } = props;
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
      <Table
        size='small'
        sx={{
          height: '100%',
          '& .MuiTableCell-root': {
            border: '1px solid #e0e0e0',
          },
        }}
      >
        <TableHead sx={{ background: grey[200] }}>
          <TableRow>
            <TableCell rowSpan={3}>
              <Typography
                fontSize={12}
                sx={{ fontWeight: 'bold', textAlign: 'center' }}
              >
                {title}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                fontSize={12}
                sx={{ fontWeight: 'bold', textAlign: 'center' }}
              >
                Hệ số phân bổ (%)
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                fontSize={12}
                sx={{ fontWeight: 'bold', textAlign: 'center' }}
              >
                Tổng số điện (KWh)
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography fontSize={11} textAlign='center'>
                (a)
              </Typography>
            </TableCell>
            <TableCell>
              <Typography fontSize={11} textAlign='center'>
                {orderNumber}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.label}>
              <TableCell>
                <Typography fontSize={12} textAlign='center'>
                  {row.label}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography fontSize={12} textAlign='center'>
                  {formatNumber(row.coefficient, 6)}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  color='primary'
                  fontSize={12}
                  fontWeight='bold'
                  textAlign='center'
                >
                  {formatNumber(row.value, 6)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
