import { Role } from '~/types';

export type AccessTokenDecoded = {
  sub: string;
  name: string;
  iat: number;
  role: Role;
};
