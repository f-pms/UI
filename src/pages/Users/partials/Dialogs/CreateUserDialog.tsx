import { useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from '@mui/material';

import { AddCircleOutlineOutlinedIcon } from '~/components/Icons';

export interface ICreateUserDialogProps {
  closeMenu: () => void;
}

export function CreateUserDialog(props: ICreateUserDialogProps) {
  const { closeMenu } = props;
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    closeMenu();
  };

  return (
    <>
      <MenuItem key='edit' onClick={handleOpenDialog}>
        <ListItemIcon>
          <AddCircleOutlineOutlinedIcon sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText>Thêm người dùng</ListItemText>
      </MenuItem>

      <Dialog maxWidth='md' open={open} onClose={handleCloseDialog}>
        <DialogTitle component='div' sx={{ paddingBottom: '8px' }}>
          <Typography
            color='text.strong'
            sx={{ fontWeight: 'bold' }}
            variant='h6'
          >
            Thêm người dùng
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ pt: 2, px: 3, width: '900px' }}>
          Form here
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            color='inherit'
            variant='outlined'
            onClick={handleCloseDialog}
          >
            Hủy
          </Button>
          <Button autoFocus variant='contained'>
            Tạo mới
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
