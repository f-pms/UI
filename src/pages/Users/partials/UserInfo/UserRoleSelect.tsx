import { useFormContext } from 'react-hook-form';

import { Box, Stack, Typography } from '@mui/material';

import { UserDTO } from '~/pages/Users/helpers/userForm';

import { SoftChip } from '~/components';

export function UserRoleSelect() {
  const { getValues } = useFormContext<UserDTO>();
  return (
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
        <SoftChip label={getValues('role')} shape='square' size='small' />
      </Box>
    </Stack>
  );
}
