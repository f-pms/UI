import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import { User } from '~/types';
import { storage } from '~/utils';

import { USERS } from '~/pages/Users/mocks/users';

export interface IAuthProviderProps {
  children: ReactNode;
}

export type AuthContextType = {
  user: User | null;
  login: () => void;
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
  useEffect(() => {
    const token = storage.get('TOKEN');
    if (token) {
      setUser(USERS[0]);
    }
  }, []);

  const login = () => {
    const fakeUser: User = USERS[0];
    storage.set(
      'TOKEN',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoiVVNFUiIsImlkIjoiMDAxIn0.W8vbB7ySChWTt1ZWzqWLLPWsv7t0RO6jroI8WPUtI6k',
    );
    setUser(fakeUser);
  };

  const register = () => {
    const fakeUser: User = USERS[0];
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
