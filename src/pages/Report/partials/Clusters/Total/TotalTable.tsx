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

export interface ITotalTableProps {}

export function TotalTable() {
  const tableData = {
    title: 'I. Ca sáng (6h00-18h00): Thứ Hai, ngày 18 tháng 03 năm 2024',
    headers: [
      'Loại',
      'Chỉ số điện',
      'Sản lượng (m3/ca)',
      'Sử dụng điện (KWh/tấn)',
    ],
    rows: [
      {
        name: 'Giờ cao điểm',
        value: 0,
      },
      {
        name: 'Giờ thấp điểm',
        value: 1000,
      },
      {
        name: 'Giờ bình thường',
        value: 2000,
      },
    ],
    totalOutput: 3000,
    totalElectricalUsage: 3000,
  };

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
        {tableData.title}
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
            {tableData.headers.map((header) => (
              <TableCell key={header} align='center'>
                <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
                  {header}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align='left'>{tableData.rows[0].name}</TableCell>
            <TableCell align='center'>{tableData.rows[0].value}</TableCell>
            <TableCell align='center' rowSpan={4}>
              {tableData.totalOutput}
            </TableCell>
            <TableCell align='center' rowSpan={4}>
              {tableData.totalElectricalUsage}
            </TableCell>
          </TableRow>
          {tableData.rows.slice(1).map((row) => (
            <TableRow key={row.name}>
              <TableCell align='left'>{row.name}</TableCell>
              <TableCell align='center'>{row.value}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align='center'>
              <Typography
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
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                  fontWeight: 'bold',
                })}
                variant='body2'
              >
                {1000}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
