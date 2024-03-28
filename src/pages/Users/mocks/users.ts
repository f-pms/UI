import { Role, User } from '~/types';

export const USERS: User[] = [
  {
    id: 1,
    fullName: 'Bui Ngoc Huy',
    email: 'huy@fpt.edu.vn',
    username: 'huybui123',
    role: Role.ADMIN,
  },
  {
    id: 3,
    fullName: 'Tran Trung Kien',
    email: 'kien@fpt.edu.vn',
    username: 'kien123',
    role: Role.USER,
  },
];
