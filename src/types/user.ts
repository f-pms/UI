export interface User {
  id: string;
  name: string;
  role: string;
}

export type LoginResponse = {
  token: string;
};
