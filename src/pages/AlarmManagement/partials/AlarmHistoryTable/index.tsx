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
      name: 'Huy',
      age: 35,
    },
    {
      id: '6',
      name: 'Huy',
      age: 35,
    },
    {
      id: '7',
      name: 'Huy',
      age: 35,
    },
    {
      id: '8',
      name: 'Huy',
      age: 35,
    },
    {
      id: '9',
      name: 'Huy',
      age: 35,
    },
    {
      id: '10',
      name: 'Huy',
      age: 35,
    },
    {
      id: '11',
      name: 'Huy',
      age: 35,
    },
    {
      id: '12',
      name: 'Huy',
      age: 35,
    },
    {
      id: '13',
      name: 'Huy',
      age: 35,
    },
    {
      id: '14',
      name: 'Huy',
      age: 35,
    },
    {
      id: '15',
      name: 'Huy',
      age: 35,
    },
    {
      id: '16',
      name: 'Huy',
      age: 35,
    },
    {
      id: '17',
      name: 'Huy',
      age: 35,
    },
    {
      id: '18',
      name: 'Huy',
      age: 35,
    },
    {
      id: '19',
      name: 'Huy',
      age: 35,
    },
    {
      id: '20',
      name: 'Huy',
      age: 35,
    },
    {
      id: '21',
      name: 'Huy',
      age: 35,
    },
    {
      id: '22',
      name: 'Huy',
      age: 35,
    },
    {
      id: '23',
      name: 'Huy',
      age: 35,
    },
    {
      id: '24',
      name: 'Huy',
      age: 35,
    },
    {
      id: '25',
      name: 'Huy',
      age: 35,
    },
    {
      id: '26',
      name: 'Huy',
      age: 35,
    },
    {
      id: '27',
      name: 'Huy',
      age: 35,
    },
    {
      id: '28',
      name: 'Huy',
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
