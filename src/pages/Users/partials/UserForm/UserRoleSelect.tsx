import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';

import { UserDTO } from '~/services/user/mutation/useCreateUser';
import { Role } from '~/types';
import { translateUserRole } from '~/utils';

import { USER_ROLES } from '~/pages/Users/mocks/userRoles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export interface IUserRoleSelectProps {}
export function UserRoleSelect() {
  const { getValues, setValue, watch } = useFormContext<UserDTO>();
  const [role, setRole] = useState<Role>(() => getValues('role'));
  const roleWatch = watch('role');

  const handleChange = (event: SelectChangeEvent) => {
    setValue('role', event.target.value as Role);
  };

  useEffect(() => {
    setRole(roleWatch);
  }, [roleWatch]);

  return (
    <FormControl sx={{ width: '100%' }}>
      <Typography
        color='text.strong'
        sx={{ fontWeight: 'bold' }}
        variant='subtitle2'
      >
        Vai trò
      </Typography>
      <Select
        MenuProps={MenuProps}
        input={<OutlinedInput size='small' />}
        inputProps={{ 'aria-label': 'Without label' }}
        value={role}
        onChange={handleChange}
      >
        {USER_ROLES.map((item) => (
          <MenuItem key={item.id} value={item.name}>
            {translateUserRole(item.label.toUpperCase() as Role)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
