import {
  Box,
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

export interface ISubTableProps {
  headers: string[];
  orderNumber: string;
  rows: {
    label: string;
    items: string[];
    value: number;
  }[];
}

export function SubTable(props: ISubTableProps) {
  const { headers, orderNumber, rows } = props;
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
            {headers.map((header, index) => (
              <TableCell
                key={header}
                align='center'
                sx={{ width: index === headers.length - 1 ? '20%' : '80%' }}
              >
                <Typography fontSize={12} sx={{ fontWeight: 'bold' }}>
                  {header}
                  {index === headers.length - 1 && (
                    <span style={{ fontSize: 11 }}>{orderNumber}</span>
                  )}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.label}>
              <TableCell align='left'>
                <Box sx={{ height: '100%' }}>
                  <Typography fontSize={12}>{row.label}</Typography>
                  {row.items.map((item, index) => (
                    <Typography key={item} fontSize={12}>
                      {`${index + 1}. ${item}`}
                    </Typography>
                  ))}
                </Box>
              </TableCell>
              <TableCell align='center'>
                <Typography
                  color='primary'
                  fontSize={12}
                  sx={{ fontWeight: 'bold' }}
                >
                  {row.value}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
