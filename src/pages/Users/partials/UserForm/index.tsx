import { useFormContext } from 'react-hook-form';

import { Box, Stack } from '@mui/material';

import { UserDTO } from '~/pages/Users/helpers/userForm';
import { PasswordTextField } from '~/pages/Users/partials/UserForm/PasswordTextField';
import { UserRoleSelect } from '~/pages/Users/partials/UserForm/UserRoleSelect';

import { InputWithLabel } from '~/components';

export interface IUserFormProps {}

export function UserForm() {
  const {
    control,
    formState: { errors },
    clearErrors,
  } = useFormContext<UserDTO>();
  return (
    <Box mt={2}>
      <Stack direction='row' spacing={2}>
        <InputWithLabel
          clearErrors={clearErrors}
          control={control}
          error={errors.fullName}
          label='Họ và tên'
          name='fullName'
          placeholder='Họ và tên'
        />
        <InputWithLabel
          clearErrors={clearErrors}
          control={control}
          error={errors.email}
          label='Địa chỉ email'
          name='email'
          placeholder='Địa chỉ email'
        />
      </Stack>
      <Stack direction='row' mt={2} spacing={2}>
        <InputWithLabel
          clearErrors={clearErrors}
          control={control}
          error={errors.username}
          label='Tên đăng nhập'
          name='username'
          placeholder='Tên đăng nhập'
        />
        <UserRoleSelect />
      </Stack>
      <PasswordTextField />
    </Box>
  );
}
