export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export interface User {
  id: number;
  name: string;
  username: string;
  password: string;
  email: string;
  role: Role;
}
