import { CreateUserDialog } from '~/pages/Users/partials/Dialogs/CreateUserDialog';

import { SectionHeading } from '~/components';

export interface IUserListPageHeadingProps {}

export function UserListPageHeading() {
  return (
    <SectionHeading
      actions={<CreateUserDialog />}
      description='Quản lý danh sách người dùng và quyền truy cập trong hệ thống'
      header='Quản lý người dùng'
    />
  );
}
