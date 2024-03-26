import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  Button,
  FormHelperText,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';

import { UserDTO } from '~/pages/Users/helpers/userForm';

import {
  EditOutlinedIcon,
  VisibilityOffOutlinedIcon,
  VisibilityOutlinedIcon,
} from '~/components/Icons';

export interface IUserPasswordFieldProps {
  isEdit: { [Key in keyof UserDTO]: boolean };
  setIsEdit: React.Dispatch<
    React.SetStateAction<{ [Key in keyof UserDTO]: boolean }>
  >;
}

export function UserPasswordField(props: IUserPasswordFieldProps) {
  const { isEdit, setIsEdit } = props;
  const { getValues, setValue } = useFormContext<UserDTO>();
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [showCurrentPassword, setShowCurrentPassword] =
    useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleEdit = (key: keyof UserDTO) => {
    setIsEdit((prev) => ({
      ...prev,
      [key]: true,
    }));
    setCurrentPassword('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSave = async () => {
    if (validationPassword().length > 0) return;
    setValue('password', password);
    setIsEdit((prev) => ({
      ...prev,
      password: false,
    }));
  };

  const handleCancel = (key: keyof UserDTO) => {
    setIsEdit((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  const validationPassword = () => {
    const errors = [];
    if (currentPassword !== getValues('password')) {
      errors.push('Mật khẩu cũ không đúng');
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
      {isEdit.password ? (
        <Stack style={{ flex: 1 }}>
          <OutlinedInput
            endAdornment={
              <IconButton
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {!showCurrentPassword ? (
                  <VisibilityOffOutlinedIcon sx={{ fontSize: '20px' }} />
                ) : (
                  <VisibilityOutlinedIcon sx={{ fontSize: '20px' }} />
                )}
              </IconButton>
            }
            placeholder='Mật khẩu cũ'
            size='small'
            sx={{ fontSize: '14px', mt: 1, width: '300px' }}
            type={showPassword ? 'text' : 'password'}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
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
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {validationPassword().map((error) => (
            <FormHelperText key={error} sx={{ ml: 0 }}>
              {error}
            </FormHelperText>
          ))}
        </Stack>
      ) : (
        <Typography style={{ flex: 1 }} variant='body2'>
          {getValues('password').replace(/./g, '*')}
        </Typography>
      )}

      {isEdit.password ? (
        <Stack direction='row' spacing={1}>
          <Button
            color='inherit'
            size='small'
            variant='outlined'
            onClick={() => handleCancel('password')}
          >
            Hủy
          </Button>
          <Button size='small' variant='outlined' onClick={handleSave}>
            Xong
          </Button>
        </Stack>
      ) : (
        <Button
          size='small'
          startIcon={<EditOutlinedIcon />}
          variant='text'
          onClick={() => handleEdit('password')}
        >
          Chỉnh sửa
        </Button>
      )}
    </Stack>
  );
}
