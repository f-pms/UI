import { Role, User } from '~/types';

export const USERS: User[] = [
  {
    id: 1,
    fullName: 'Bui Ngoc Huy',
    email: 'huy@fpt.edu.vn',
    username: 'huybui123',
    password: '***',
    role: Role.ADMIN,
  },
  {
    id: 2,
    fullName: 'Tran Trung Kien',
    email: 'kien@fpt.edu.vn',
    username: 'kien123',
    password: '***',
    role: Role.USER,
  },
];
