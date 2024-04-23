import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import {
  Button,
  FormHelperText,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';

import { useUpdateUser } from '~/services/user/mutation/useUpdateUser';
import { Role, User } from '~/types';
import { displayErrorMessage } from '~/utils/errorMessage';

import { AuthContext } from '~/pages/Auth/context/AuthContext';

import {
  EditOutlinedIcon,
  VisibilityOffOutlinedIcon,
  VisibilityOutlinedIcon,
} from '~/components/Icons';

export interface IUserPasswordFieldProps {
  userInfo?: User;
  refetchUserInfo: () => void;
}

export function UserPasswordField(props: IUserPasswordFieldProps) {
  const { userInfo, refetchUserInfo } = props;
  const { user: currentUser } = useContext(AuthContext);

  const [isEdit, setIsEdit] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');

  const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const {
    mutate: updateUser,
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
    error: updateError,
  } = useUpdateUser();

  const handleEdit = () => {
    setIsEdit(true);
    setOldPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validationPassword().length > 0) return;

    const payload = {
      password,
      ...(currentUser?.role === Role.ADMIN ? {} : { oldPassword }),
    };

    updateUser({
      id: userInfo?.id ?? 0,
      payload,
    });
  };

  useEffect(() => {
    if (isUpdateError) {
      toast.error(displayErrorMessage(updateError));
    }
  }, [updateError, isUpdateError]);

  useEffect(() => {
    if (isUpdateSuccess) {
      toast.success('Cập nhật thông tin người dùng thành công');
      setIsEdit(false);
      refetchUserInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdateSuccess]);

  const validationPassword = () => {
    const errors = [];
    if (currentUser?.role !== Role.ADMIN && oldPassword?.length === 0) {
      errors.push('Mật khẩu cũ không được để trống');
    }
    if (password !== confirmPassword) {
      errors.push('Mật khẩu không trùng khớp');
    }
    if (password === confirmPassword && password?.length < 8) {
      errors.push('Mật khẩu phải có ít nhất 8 ký tự');
    }
    if (password === confirmPassword && password?.length >= 20) {
      errors.push('Mật khẩu không được quá 16 ký tự');
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        alignItems='flex-start'
        direction='row'
        px={2}
        py={3}
        spacing={2}
        width='100%'
      >
        <Typography variant='body2' width={240}>
          Mật khẩu
        </Typography>
        {isEdit ? (
          <Stack style={{ flex: 1 }}>
            {currentUser?.role !== Role.ADMIN && (
              <OutlinedInput
                endAdornment={
                  <IconButton
                    onClick={() => setShowOldPassword(!showOldPassword)}
                  >
                    {!showOldPassword ? (
                      <VisibilityOffOutlinedIcon sx={{ fontSize: '20px' }} />
                    ) : (
                      <VisibilityOutlinedIcon sx={{ fontSize: '20px' }} />
                    )}
                  </IconButton>
                }
                placeholder='Mật khẩu cũ'
                size='small'
                sx={{ fontSize: '14px', mt: 1, width: '300px' }}
                type={showOldPassword ? 'text' : 'password'}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            )}

            <OutlinedInput
              endAdornment={
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {!showPassword ? (
                    <VisibilityOffOutlinedIcon sx={{ fontSize: '20px' }} />
                  ) : (
                    <VisibilityOutlinedIcon sx={{ fontSize: '20px' }} />
                  )}
                </IconButton>
              }
              placeholder='Mật khẩu mới'
              size='small'
              sx={{ fontSize: '14px', mt: 1, width: '300px' }}
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <OutlinedInput
              endAdornment={
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {!showConfirmPassword ? (
                    <VisibilityOffOutlinedIcon sx={{ fontSize: '20px' }} />
                  ) : (
                    <VisibilityOutlinedIcon sx={{ fontSize: '20px' }} />
                  )}
                </IconButton>
              }
              placeholder='Nhập lại mật khẩu'
              size='small'
              sx={{ fontSize: '14px', mt: 1, width: '300px' }}
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {validationPassword().map((error) => (
              <FormHelperText key={error} error sx={{ ml: 0 }}>
                {error}
              </FormHelperText>
            ))}
          </Stack>
        ) : (
          <Typography style={{ flex: 1 }} variant='body2'>
            ********
          </Typography>
        )}

        {isEdit ? (
          <Stack direction='row' spacing={1}>
            <Button
              color='inherit'
              size='small'
              variant='outlined'
              onClick={() => setIsEdit(false)}
            >
              Hủy
            </Button>
            <Button size='small' type='submit' variant='outlined'>
              Xong
            </Button>
          </Stack>
        ) : (
          <Button
            size='small'
            startIcon={<EditOutlinedIcon />}
            variant='text'
            onClick={handleEdit}
          >
            Chỉnh sửa
          </Button>
        )}
      </Stack>
    </form>
  );
}
