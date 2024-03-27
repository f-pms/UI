import { Role } from '~/constants';

export interface User {
  id: string;
  name: string;
  role: Role;
}

export type LoginResponse = {
  token: string;
};
