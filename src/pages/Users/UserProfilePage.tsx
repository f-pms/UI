import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';

import { Role, User } from '~/types';

import { UserDTO } from '~/pages/Users/helpers/userForm';
import { ConfirmDeleteUserDialog } from '~/pages/Users/partials/Dialogs/ConfirmDeleteUserDialog';
import { UserProfilePageHeading } from '~/pages/Users/partials/Headings/UserProfilePageHeading';
import { UserInfoTextField } from '~/pages/Users/partials/UserInfo/UserInfoTextField';
import { UserPasswordField } from '~/pages/Users/partials/UserInfo/UserPasswordField';

import { SoftChip } from '~/components';

export interface IUserProfilePageProps {}

export function UserProfilePage() {
  const [isEdit, setIsEdit] = useState<{ [Key in keyof UserDTO]: boolean }>({
    fullName: false,
    email: false,
    role: false,
    username: false,
    password: false,
  });
  const user: User = {
    id: 0,
    fullName: 'Bui Ngoc Huy',
    username: 'buingochuy123',
    password: 'buingochuy123',
    email: 'huybui@fpt.edu.vn',
    role: Role.ADMIN,
  };
  const methods = useForm<UserDTO>({
    defaultValues: {
      fullName: user.fullName,
      username: user.username,
      password: user.password,
      email: user.email,
      role: user.role,
    },
  });

  const onSubmit: SubmitHandler<UserDTO> = (data) => {
    console.warn(data);
  };

  const isEditAllFalse = Object.values(isEdit).every((value) => !value);

  return (
    <Container maxWidth='lg' sx={{ py: 2 }}>
      <UserProfilePageHeading />
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <Box>
            <Typography
              color='text.strong'
              fontWeight='bold'
              variant='subtitle1'
            >
              Thông tin cá nhân
            </Typography>
            <Typography variant='body2'>
              Tên nhân viên và tài khoản email
            </Typography>
          </Box>
          <UserInfoTextField
            isEdit={isEdit}
            label='Họ và tên'
            name='fullName'
            setIsEdit={setIsEdit}
          />
          <Divider />
          <UserInfoTextField
            isEdit={isEdit}
            label='Địa chỉ email'
            name='email'
            setIsEdit={setIsEdit}
          />
          <Divider />
          <Stack
            alignItems='center'
            direction='row'
            px={2}
            py={2}
            spacing={2}
            width='100%'
          >
            <Typography variant='body2' width={240}>
              Vai trò
            </Typography>
            <Box style={{ flex: 1 }}>
              <SoftChip
                label={methods.getValues('role')}
                shape='square'
                size='small'
              />
            </Box>
          </Stack>
          <Box mt={2}>
            <Typography
              color='text.strong'
              fontWeight='bold'
              variant='subtitle1'
            >
              Thông tin tài khoản
            </Typography>
            <Typography variant='body2'>
              Thông tin đăng nhập và mật khẩu
            </Typography>
          </Box>
          <UserInfoTextField
            disableEdit={true}
            isEdit={isEdit}
            label='Tên đăng nhập'
            name='username'
            setIsEdit={setIsEdit}
          />
          <Divider />
          <UserPasswordField isEdit={isEdit} setIsEdit={setIsEdit} />

          <Stack
            alignItems='center'
            direction='row'
            justifyContent='flex-end'
            mt={2}
          >
            <Button
              disabled={!isEditAllFalse}
              size='small'
              type='submit'
              variant='contained'
            >
              Cập nhật thông tin
            </Button>
          </Stack>

          <Stack
            alignItems='center'
            direction='row'
            justifyContent='space-between'
            mt={5}
            pt={5}
          >
            <Box>
              <Typography
                color='text.strong'
                fontWeight='bold'
                variant='subtitle1'
              >
                Xóa tài khoản
              </Typography>
              <Typography variant='body2'>
                Hành động này không thể hoàn tác. Tất cả thông tin liên quan đến
                tài khoản này sẽ bị xóa vĩnh viễn.
              </Typography>
            </Box>
            <ConfirmDeleteUserDialog>
              <Button color='error' variant='outlined'>
                Xóa tài khoản
              </Button>
            </ConfirmDeleteUserDialog>
          </Stack>
        </FormProvider>
      </form>
    </Container>
  );
}
