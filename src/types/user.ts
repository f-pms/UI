export enum Role {
  USER = 'SUPERVISOR',
  ADMIN = 'ADMIN',
}

export interface User {
  id: number;
  fullName: string;
  username: string;
  password?: string;
  email: string;
  role: Role;
}

export type LoginResponse = {
  token: string;
};
