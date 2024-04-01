import { useContext } from 'react';
import _ from 'lodash';

import { Paper, Typography } from '~/libs/mui';
import { translateUserRole } from '~/utils';

import { AuthContext } from '~/pages/Auth/context/AuthContext';

export default function SwitchRole() {
  const { user } = useContext(AuthContext);
  return (
    <Paper sx={{ py: 1, px: 2, mr: 2 }} variant='outlined'>
      <Typography variant='body2'>{`${_.startCase(
        user?.fullName,
      )} - ${translateUserRole(user?.role)}`}</Typography>
    </Paper>
  );
}
