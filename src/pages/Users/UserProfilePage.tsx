import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';

import { useQueryUserById } from '~/services/user/queries/useQueryUserById';
import { Role } from '~/types';
import { translateUserRole } from '~/utils';

import { AuthContext } from '~/pages/Auth/context/AuthContext';
import { ConfirmDeleteUserDialog } from '~/pages/Users/partials/Dialogs/ConfirmDeleteUserDialog';
import { UserProfilePageHeading } from '~/pages/Users/partials/Headings/UserProfilePageHeading';
import { UserInfoTextField } from '~/pages/Users/partials/UserInfo/UserInfoTextField';
import { UserPasswordField } from '~/pages/Users/partials/UserInfo/UserPasswordField';

import { SoftChip } from '~/components';

export interface IUserProfilePageProps {}

export function UserProfilePage() {
  const { userId } = useParams();
  const { user: currentUser } = useContext(AuthContext);
  const { data: user, refetch: refetchUserInfo } = useQueryUserById(
    userId ?? 0,
    {
      enabled: userId !== undefined,
    },
  );

  return (
    <Container maxWidth='lg' sx={{ py: 2 }}>
      <UserProfilePageHeading />
      <Box>
        <Typography color='text.strong' fontWeight='bold' variant='subtitle1'>
          Thông tin cá nhân
        </Typography>
        <Typography variant='body2'>
          Tên nhân viên và tài khoản email
        </Typography>
      </Box>
      <UserInfoTextField
        label='Họ và tên'
        name='fullName'
        refetchUserInfo={refetchUserInfo}
        userInfo={user}
      />
      <Divider />
      <UserInfoTextField
        label='Địa chỉ email'
        name='email'
        refetchUserInfo={refetchUserInfo}
        userInfo={user}
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
            label={translateUserRole(user?.role ?? Role.USER)}
            shape='square'
            size='small'
          />
        </Box>
      </Stack>
      <Box mt={2}>
        <Typography color='text.strong' fontWeight='bold' variant='subtitle1'>
          Thông tin tài khoản
        </Typography>
        <Typography variant='body2'>Thông tin đăng nhập và mật khẩu</Typography>
      </Box>
      <UserInfoTextField
        disableEdit={true}
        label='Tên đăng nhập'
        name='username'
        refetchUserInfo={refetchUserInfo}
        userInfo={user}
      />
      <Divider />
      <UserPasswordField refetchUserInfo={refetchUserInfo} userInfo={user} />

      {currentUser?.role === Role.ADMIN && currentUser?.id !== user?.id && (
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

          <ConfirmDeleteUserDialog userId={user?.id}>
            <Button color='error' variant='outlined'>
              Xóa tài khoản
            </Button>
          </ConfirmDeleteUserDialog>
        </Stack>
      )}
    </Container>
  );
}
