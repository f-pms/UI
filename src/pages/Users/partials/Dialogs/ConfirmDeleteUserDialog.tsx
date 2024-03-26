import { useState } from 'react';

import { Box } from '@mui/material';

import { AlertDialog } from '~/components';
import { DeleteOutlineOutlinedIcon } from '~/components/Icons';

export interface IConfirmDeleteUserDialogProps {
  closeMenu?: () => void;
  children: React.ReactNode;
}

export function ConfirmDeleteUserDialog(props: IConfirmDeleteUserDialogProps) {
  const { closeMenu, children } = props;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    closeMenu && closeMenu();
  };
  const handleAgree = () => {
    setOpen(false);
    closeMenu && closeMenu();
  };
  return (
    <>
      <Box key='delete' onClick={() => setOpen(true)}>
        {children}
      </Box>
      <AlertDialog
        color='error'
        content='Hành động này không thể hoàn tác. Tất cả thông tin liên quan đến tài khoản này sẽ bị xóa vĩnh viễn. Bạn có chắc chắn muốn tiếp tục không?'
        handleAgree={handleAgree}
        handleClose={handleClose}
        icon={DeleteOutlineOutlinedIcon}
        open={open}
        title='Xóa người dùng?'
      />
    </>
  );
}
