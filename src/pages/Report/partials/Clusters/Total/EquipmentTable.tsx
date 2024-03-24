import { Fragment } from 'react';

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

export interface IEquipmentTableProps {
  title: string;
  rows: {
    name: string;
    equipments: string[];
  }[];
}

export function EquipmentTable(props: IEquipmentTableProps) {
  const { title, rows } = props;
  const headers = ['STT', 'Phạm vi', 'Tên thiết bị'];

  return (
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
          {rows.map((row, index) => (
            <Fragment key={row.name}>
              <TableRow>
                <TableCell
                  align='center'
                  rowSpan={row.equipments.length + 2}
                  sx={{ fontSize: 12 }}
                >
                  {index + 1}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  align='center'
                  rowSpan={row.equipments.length + 2}
                  sx={{ fontSize: 12 }}
                >
                  {row.name}
                </TableCell>
              </TableRow>
              {row.equipments.map((item) => (
                <TableRow key={item}>
                  <TableCell sx={{ fontSize: 12 }}>{item}</TableCell>
                </TableRow>
              ))}
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
