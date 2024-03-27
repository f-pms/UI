import { Role } from '~/types/user';

export type AccessTokenDecoded = {
  sub: string;
  name: string;
  iat: number;
  role: Role;
  userId: number;
  email: string;
};
