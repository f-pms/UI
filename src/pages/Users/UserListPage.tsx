import { Outlet, useLocation } from 'react-router-dom';

import { Container } from '@mui/material';

import { Path } from '~/constants';

import { UserListPageHeading } from '~/pages/Users/partials/Headings/UserListPageHeading';
import { UserTable } from '~/pages/Users/partials/Tables/UserTable';

export interface IUserListPageProps {}

export function UserListPage() {
  const location = useLocation();

  if (location.pathname !== Path.USER_LIST) {
    return <Outlet />;
  }
  return (
    <Container maxWidth='xl' sx={{ py: 2 }}>
      <UserListPageHeading />
      <UserTable />
    </Container>
  );
}
