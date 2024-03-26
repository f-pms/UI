import { SectionHeading } from '~/components';

export interface IUserProfilePageHeadingProps {}

export function UserProfilePageHeading() {
  return (
    <SectionHeading
      description='Thông tin cá nhân và thông tin tài khoản của người dùng'
      header='Thông tin người dùng'
    />
  );
}
