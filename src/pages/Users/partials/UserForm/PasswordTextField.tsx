import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  Box,
  FormControl,
  FormGroup,
  FormHelperText,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';

import { UserDTO } from '~/services/user/mutation/useCreateUser';

import {
  VisibilityOffOutlinedIcon,
  VisibilityOutlinedIcon,
} from '~/components/Icons';

export interface IPasswordTextFieldProps {}
export function PasswordTextField() {
  const {
    setValue,
    formState: { errors },
    clearErrors,
    watch,
  } = useFormContext<UserDTO>();
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const watchPassword = watch('password');

  const [validateErrors, setValidateErrors] = useState<string[]>([]);

  const validationPassword = () => {
    if (!password.length) return setValidateErrors([]);
    const errors = [];
    if (password !== confirmPassword) {
      errors.push('Mật khẩu không trùng khớp');
    }
    if (password === confirmPassword && password?.length < 8) {
      errors.push('Mật khẩu phải có ít nhất 8 ký tự');
    }
    if (password === confirmPassword && password?.length >= 20) {
      errors.push('Mật khẩu không được quá 16 ký tự');
    }
    setValidateErrors(errors);
  };

  useEffect(() => {
    validationPassword();
    clearErrors('password');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password, confirmPassword]);

  useEffect(() => {
    if (validateErrors.length === 0) {
      setValue('password', password);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateErrors]);

  useEffect(() => {
    if (!watchPassword?.length) {
      setPassword(watchPassword ?? '');
      setConfirmPassword(watchPassword ?? '');
    }
  }, [watchPassword]);

  return (
    <Box>
      <Typography
        color='text.strong'
        sx={{ fontWeight: 'bold' }}
        variant='subtitle2'
      >
        Mật khẩu
      </Typography>

      <FormGroup sx={{ width: '100%', mt: 2 }}>
        <Stack direction='row' spacing={2}>
          <FormControl
            error={!!validateErrors.length || !!errors.password}
            variant='outlined'
          >
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
              placeholder='Mật khẩu'
              size='small'
              sx={{ fontSize: '14px', mt: 1, width: '100%' }}
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <FormControl
            error={!!validateErrors.length || !!errors.password}
            variant='outlined'
          >
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
              sx={{ fontSize: '14px', mt: 1, width: '100%' }}
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>
        </Stack>

        {validateErrors.map((error) => (
          <FormHelperText key={error} sx={{ ml: 0 }}>
            {error}
          </FormHelperText>
        ))}
        <FormHelperText error sx={{ ml: 0 }}>
          {errors.password?.message}
        </FormHelperText>
      </FormGroup>
    </Box>
  );
}
