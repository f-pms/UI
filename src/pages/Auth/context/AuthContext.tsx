import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import {
  useLoginAccount,
  UserDTO,
} from '~/services/auth/mutation/useloginAccount';
import { User } from '~/types';
import { storage } from '~/utils';

import { UserFormData } from '~/pages/Auth/helpers/loginForm';

export interface IAuthProviderProps {
  children: ReactNode;
}

export type AuthContextType = {
  user: User | null;
  login: (userInformation: UserFormData) => void;
  register: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const { mutate: loginAccount, data: token, isSuccess } = useLoginAccount();

  useEffect(() => {
    const token = storage.get('TOKEN');
    if (token) {
      const fakeUser: User = { id: '001', name: 'John Doe', role: 'USER' };
      setUser(fakeUser);
    }
  }, []);

  useEffect(() => {}, [isSuccess, token]);

  const login = ({ username, password }: UserFormData) => {
    const userDTO: UserDTO = {
      username,
      password,
    };

    loginAccount(userDTO);

    // const fakeUser: User = { id: '001', name: 'John Doe', role: 'USER' };

    // storage.set(
    //   'TOKEN',
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoiVVNFUiIsImlkIjoiMDAxIn0.W8vbB7ySChWTt1ZWzqWLLPWsv7t0RO6jroI8WPUtI6k',
    // );
    // setUser(fakeUser);
  };

  const register = () => {
    const fakeUser: User = { id: '001', name: 'John Doe', role: 'ADMIN' };
    storage.set(
      'TOKEN',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoiQURNSU4ifQ._F60tRV98OYI8752zrPs66Tdhbfee_wUGsfb4kXt7qo',
    );
    setUser(fakeUser);
  };

  const logout = () => {
    storage.remove('TOKEN');
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, register, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
