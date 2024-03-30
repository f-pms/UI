import { Role } from '~/types';

export const translateUserRole = (userRole: Role | undefined) => {
  if (userRole === Role.ADMIN) {
    return 'Quản lý';
  }
  return 'Giám sát viên';
};
