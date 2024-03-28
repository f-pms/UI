import { FormEvent, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material';

import { useCreateUser, UserDTO } from '~/services/user/mutation/useCreateUser';
import { useQueryUsers } from '~/services/user/queries/useQueryUsers';

import { defaultUser, userSchema } from '~/pages/Users/helpers/userForm';
import { UserForm } from '~/pages/Users/partials/UserForm';

import { AddCircleOutlineOutlinedIcon } from '~/components/Icons';

export interface ICreateUserDialogProps {}

export function CreateUserDialog() {
  const [searchParams] = useSearchParams();
  const { refetch } = useQueryUsers({
    page: Number(searchParams.get('page')) || 1,
    size: Number(searchParams.get('size')) || 10,
  });
  const { mutate: createUser, isSuccess: isCreateSuccess } = useCreateUser();
  const [open, setOpen] = useState(false);
  const methods = useForm<UserDTO>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: defaultUser,
    resolver: yupResolver(userSchema),
  });

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    handleReset();
  };

  const handleReset = () => {
    methods.reset();
    methods.clearErrors();
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    methods.trigger().then((isValid) => {
      if (isValid) {
        createUser({ ...methods.getValues() });
      }
    });
  };

  useEffect(() => {
    if (isCreateSuccess) {
      toast.success('Tạo người dùng mới thành công');
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreateSuccess]);

  return (
    <>
      <Button
        startIcon={<AddCircleOutlineOutlinedIcon />}
        variant='contained'
        onClick={handleOpenDialog}
      >
        Thêm người dùng
      </Button>

      <FormProvider {...methods}>
        <Dialog
          PaperProps={{
            component: 'form',
            onSubmit: (e: FormEvent<HTMLFormElement>) => handleSubmit(e),
          }}
          maxWidth='lg'
          open={open}
          onClose={handleCloseDialog}
        >
          <DialogTitle component='div' sx={{ paddingBottom: '8px' }}>
            <Typography
              color='text.strong'
              sx={{ fontWeight: 'bold' }}
              variant='h6'
            >
              Thêm người dùng
            </Typography>
            <Typography variant='body2'>
              Thêm người dùng mới và quyền truy cập vào hệ thống
            </Typography>
          </DialogTitle>
          <DialogContent sx={{ pt: 2, px: 3 }}>
            <UserForm />
          </DialogContent>
          <DialogActions
            sx={{ px: 3, pb: 2, borderTop: 1, borderColor: 'divider' }}
          >
            <Stack
              alignItems='center'
              direction='row'
              justifyContent='space-between'
              sx={{ width: '100%' }}
            >
              <Button
                color='inherit'
                variant='outlined'
                onClick={handleCloseDialog}
              >
                Đóng
              </Button>
              <Stack direction='row' spacing={1}>
                <Button
                  color='inherit'
                  variant='contained'
                  onClick={handleReset}
                >
                  Xóa hết
                </Button>
                <Button autoFocus type='submit' variant='contained'>
                  Tạo mới
                </Button>
              </Stack>
            </Stack>
          </DialogActions>
        </Dialog>
      </FormProvider>
    </>
  );
}
