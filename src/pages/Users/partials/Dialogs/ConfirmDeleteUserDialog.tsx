import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Box } from '@mui/material';

import { useDeleteUser } from '~/services/user/mutation/useDeleteUser';
import { useQueryUsers } from '~/services/user/queries/useQueryUsers';
import { displayErrorMessage } from '~/utils/errorMessage';

import { AlertDialog } from '~/components';
import { DeleteOutlineOutlinedIcon } from '~/components/Icons';

export interface IConfirmDeleteUserDialogProps {
  children: React.ReactNode;
  userId?: number | string;
}

export function ConfirmDeleteUserDialog(props: IConfirmDeleteUserDialogProps) {
  const { children, userId } = props;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { refetch } = useQueryUsers(
    {
      page: Number(searchParams.get('page')) || 1,
      size: Number(searchParams.get('size')) || 10,
    },
    {
      enabled: false,
    },
  );
  const {
    mutate: deleteUser,
    isSuccess: isDeleteSuccess,
    isError,
    error,
  } = useDeleteUser();
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
      navigate('/users');
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleteSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(displayErrorMessage(error));
      handleClose();
    }
  }, [isError, error]);
  return (
    <>
      <Box key='delete' onClick={() => setOpen(true)}>
        {children}
      </Box>
      <AlertDialog
        color='warning'
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
