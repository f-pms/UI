import { MouseEvent, useState } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';

import {
  AddCircleOutlineOutlinedIcon,
  EditOutlinedIcon,
  MoreHorizIcon,
  NotificationsOffOutlinedIcon,
} from '~/components/Icons';
import {
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from '~/components/MuiComponents';
import { getDefaultMRTOptions } from '~/components/Table';

export interface IAlarmHistoryTableProps {}

interface User {
  id: string;
  name: string;
  age: number;
}

const defaultMRTOptions = getDefaultMRTOptions<User>();

export function AlarmHistoryTable() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const columns: MRT_ColumnDef<User>[] = [
    {
      accessorKey: 'name',
      header: 'Tên',
    },
    {
      accessorFn: (originalRow) => originalRow.age,
      id: 'age',
      header: 'Tuổi',
    },
  ];

  const persons: User[] = [
    {
      id: '1',
      name: 'John',
      age: 30,
    },
    {
      id: '2',
      name: 'Sara',
      age: 25,
    },
    {
      id: '3',
      name: 'Jane',
      age: 22,
    },
    {
      id: '4',
      name: 'Doe',
      age: 40,
    },
    {
      id: '5',
      name: 'Huy 5',
      age: 35,
    },
    {
      id: '6',
      name: 'Huy 6',
      age: 36,
    },
    {
      id: '7',
      name: 'Huy 7',
      age: 37,
    },
    {
      id: '8',
      name: 'Huy 8',
      age: 38,
    },
    {
      id: '9',
      name: 'Huy 9',
      age: 39,
    },
    {
      id: '10',
      name: 'Huy 10',
      age: 45,
    },
    {
      id: '11',
      name: 'Huy 11',
      age: 55,
    },
    {
      id: '12',
      name: 'Huy 12',
      age: 65,
    },
    {
      id: '13',
      name: 'Huy 13',
      age: 75,
    },
    {
      id: '14',
      name: 'Huy 14',
      age: 85,
    },
    {
      id: '15',
      name: 'Huy 15',
      age: 95,
    },
    {
      id: '16',
      name: 'Huy 16',
      age: 15,
    },
    {
      id: '17',
      name: 'Huy 17',
      age: 25,
    },
    {
      id: '18',
      name: 'Huy 18',
      age: 45,
    },
    {
      id: '19',
      name: 'Huy 19',
      age: 32,
    },
    {
      id: '20',
      name: 'Huy 20',
      age: 36,
    },
    {
      id: '21',
      name: 'Huy 21',
      age: 31,
    },
    {
      id: '22',
      name: 'Huy 22',
      age: 30,
    },
    {
      id: '23',
      name: 'Huy 23',
      age: 31,
    },
    {
      id: '24',
      name: 'Huy 24',
      age: 32,
    },
    {
      id: '25',
      name: 'Huy 25',
      age: 33,
    },
    {
      id: '26',
      name: 'Huy 26',
      age: 34,
    },
    {
      id: '27',
      name: 'Huy 27',
      age: 35,
    },
    {
      id: '28',
      name: 'Huy 28',
      age: 36,
    },
  ];

  const table = useMaterialReactTable({
    ...defaultMRTOptions,
    initialState: {
      ...defaultMRTOptions.initialState,
    },
    positionActionsColumn: 'first',
    columns,
    data: persons,
    getRowId: (row) => row.id,
    enableRowActions: true,
    // renderTopToolbarCustomActions: () => {
    //   return (
    //     <div>
    //       <Tooltip title='Lọc theo tên'>
    //         <Button
    //           color='zinc'
    //           size='small'
    //           startIcon={<AddCircleOutlineOutlinedIcon />}
    //           sx={{ borderStyle: 'dashed' }}
    //           variant='outlined'
    //         >
    //           <Stack direction='row' spacing={1}>
    //             <Typography variant='caption'>Tên</Typography>
    //             <Divider flexItem orientation='vertical' />
    //             <Typography variant='caption'>Huy</Typography>
    //           </Stack>
    //         </Button>
    //       </Tooltip>
    //     </div>
    //   );
    // },
    renderRowActions: () => (
      <Box sx={{ display: 'flex', width: '20px' }}>
        <Tooltip title=''>
          <IconButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup='true'
            id='basic-button'
            size='small'
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  });

  return (
    <>
      <MaterialReactTable table={table} />
      <Menu
        anchorEl={anchorEl}
        id='basic-menu'
        open={open}
        sx={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)' }}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <EditOutlinedIcon sx={{ fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText>Chỉnh sửa cảnh báo</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AddCircleOutlineOutlinedIcon sx={{ fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText>Tạo mới từ cảnh báo</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <NotificationsOffOutlinedIcon sx={{ fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText>Vô hiệu hóa cảnh báo</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
