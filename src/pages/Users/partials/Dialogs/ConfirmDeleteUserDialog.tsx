import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Box } from '@mui/material';

import { useDeleteUser } from '~/services/user/mutation/useDeleteUser';

import { AlertDialog } from '~/components';
import { DeleteOutlineOutlinedIcon } from '~/components/Icons';

export interface IConfirmDeleteUserDialogProps {
  children: React.ReactNode;
  userId?: number | string;
}

export function ConfirmDeleteUserDialog(props: IConfirmDeleteUserDialogProps) {
  const { children, userId } = props;
  const { mutate: deleteUser, isSuccess: isDeleteSuccess } = useDeleteUser();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleAgree = () => {
    if (userId === undefined) return;
    deleteUser(userId);
  };

  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success('Xóa người dùng thành công');
      handleClose();
    }
  }, [isDeleteSuccess]);
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
