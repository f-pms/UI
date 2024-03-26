import { FormEvent, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';

import {
  defaultUser,
  UserDTO,
  userSchema,
} from '~/pages/Users/helpers/userForm';
import { UserForm } from '~/pages/Users/partials/UserForm';

import { AddCircleOutlineOutlinedIcon } from '~/components/Icons';

export interface ICreateUserDialogProps {
  closeMenu: () => void;
}

export function CreateUserDialog(props: ICreateUserDialogProps) {
  const { closeMenu } = props;
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
    closeMenu();
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
        console.warn(methods.getValues());
      }
    });
  };

  return (
    <>
      <MenuItem key='edit' onClick={handleOpenDialog}>
        <ListItemIcon>
          <AddCircleOutlineOutlinedIcon sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText>Thêm người dùng</ListItemText>
      </MenuItem>

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
