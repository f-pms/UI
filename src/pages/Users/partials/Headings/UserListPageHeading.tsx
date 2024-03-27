import { SectionHeading } from '~/components';

export interface IUserListPageHeadingProps {}

export function UserListPageHeading() {
  return (
    <SectionHeading
      description='Quản lý danh sách người dùng và quyền truy cập trong hệ thống'
      header='Quản lý người dùng'
    />
  );
}
