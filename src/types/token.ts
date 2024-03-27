import { Role } from '~/constants/role';

export type AccessTokenDecoded = {
  sub: string;
  name: string;
  iat: number;
  role: Role;
  userId: string;
};
