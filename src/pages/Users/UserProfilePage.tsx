import { useCallback, useContext, useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';

import { UserDTO } from '~/services/user/mutation/useCreateUser';
import { useUpdateUser } from '~/services/user/mutation/useUpdateUser';
import { useQueryUserById } from '~/services/user/queries/useQueryUserById';
import { Role } from '~/types';
import { translateUserRole } from '~/utils';
import { displayErrorMessage } from '~/utils/errorMessage';

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
  const { data: user, refetch: refetchUser } = useQueryUserById(userId ?? 0, {
    enabled: userId !== undefined,
  });
  const [oldPassword, setOldPassword] = useState<string | undefined>();

  const {
    mutate: updateUser,
    isSuccess: isUpdateSuccess,
    isError,
    error,
  } = useUpdateUser();

  const [isEdit, setIsEdit] = useState<{
    [Key in keyof UserDTO]: boolean;
  }>({
    fullName: false,
    email: false,
    role: false,
    username: false,
    password: false,
  });

  const methods = useForm<UserDTO>();
  const setDefaultValues = useCallback(() => {
    if (user === undefined) return;
    methods.setValue('fullName', user.fullName);
    methods.setValue('email', user.email);
    methods.setValue('role', user.role);
    methods.setValue('username', user.username);
    methods.setValue('password', undefined);
    setOldPassword(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    setDefaultValues();
  }, [setDefaultValues]);

  const onSubmit: SubmitHandler<UserDTO> = (data) => {
    if (userId === undefined) return;
    const payload = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };
    updateUser({
      id: userId,
      payload:
        currentUser?.role === Role.ADMIN
          ? payload
          : {
              ...payload,
              oldPassword: data.password ? oldPassword : undefined,
            },
    });
  };

  useEffect(() => {
    if (isUpdateSuccess) {
      toast.success('Cập nhật thông tin người dùng thành công');
      refetchUser();
      setDefaultValues();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdateSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(displayErrorMessage(error));
      setDefaultValues();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

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
                label={translateUserRole(methods.getValues('role'))}
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
          <UserPasswordField
            isEdit={isEdit}
            oldPassword={oldPassword}
            setIsEdit={setIsEdit}
            setOldPassword={setOldPassword}
          />

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

          {currentUser?.role === Role.ADMIN && (
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
                  Hành động này không thể hoàn tác. Tất cả thông tin liên quan
                  đến tài khoản này sẽ bị xóa vĩnh viễn.
                </Typography>
              </Box>

              <ConfirmDeleteUserDialog userId={user?.id}>
                <Button color='error' variant='outlined'>
                  Xóa tài khoản
                </Button>
              </ConfirmDeleteUserDialog>
            </Stack>
          )}
        </FormProvider>
      </form>
    </Container>
  );
}
