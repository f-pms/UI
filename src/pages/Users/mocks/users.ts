import { Role, User } from '~/types';

export const USERS: User[] = [
  {
    id: 1,
    name: 'Bui Ngoc Huy',
    email: 'huy@fpt.edu.vn',
    username: 'huybui123',
    password: '123456',
    role: Role.ADMIN,
  },
  {
    id: 2,
    name: 'Tran Trung Kien',
    email: 'kien@fpt.edu.vn',
    username: 'kien123',
    password: '123456',
    role: Role.USER,
  },
];
