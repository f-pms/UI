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

export interface IEquipmentTableProps {}

export function EquipmentTable() {
  const headers = ['STT', 'Phạm vi', 'Tên thiết bị'];
  const tableData = {
    title: 'III. Phạm vi thiết bị công đoạn sản xuất keo',
    rows: [
      {
        name: 'Trạm TR11: 1000KVA-22KV/0.96KV',
        equipments: ['Tủ điện điều khiển motor băm 1220MC01'],
      },
      {
        name: 'Trạm TR12: 2000KVA-22KV/0.38KV',
        equipments: [
          'Tủ điền khiển dây chuyền băm củi keo 13000MC01',
          'Tủ điều khiển dây chuyền bóc vỏ cây 1000MC01',
          'Tủ điều khiển dây chuyền máy băm và băng tải cấp dăm vào kho 12000MC01',
          'Tủ điều khiển dây chuyền xử lí vỏ cây 1900MC01',
          'Tủ cấp nguồn cầu trục nhà xưởng',
          'Cấp nguồn cho UPS(Tủ 1000PLC01)',
          'Máy lạnh, CS xưởng',
        ],
      },
      {
        name: 'Test null',
        equipments: [''],
      },
    ],
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
            {headers.map((header) => (
              <TableCell key={header} align='center'>
                <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
                  {header}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.rows.map((row, index) => (
            <Fragment key={row.name}>
              <TableRow>
                <TableCell align='center' rowSpan={row.equipments.length + 2}>
                  {index + 1}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center' rowSpan={row.equipments.length + 2}>
                  {row.name}
                </TableCell>
              </TableRow>
              {row.equipments.map((item) => (
                <TableRow key={item}>
                  <TableCell>{item}</TableCell>
                </TableRow>
              ))}
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
