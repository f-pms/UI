import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { jwtDecode } from 'jwt-decode';

import {
  useLoginAccount,
  UserDTO,
} from '~/services/auth/mutation/useLoginAccount';
import { AccessTokenDecoded, Role, User } from '~/types';
import { storage } from '~/utils';

import { UserFormData } from '~/pages/Auth/helpers/loginForm';

export interface IAuthProviderProps {
  children: ReactNode;
}

export type AuthContextType = {
  user: User | null;
  login: (userInformation: UserFormData) => void;
  logout: () => void;
  isError: boolean;
  isAdmin: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  isError: false,
  isAdmin: false,
});

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const { mutate: loginAccount, data, isSuccess, isError } = useLoginAccount();

  const convertToUser = (userDecoded: AccessTokenDecoded) => {
    return {
      id: userDecoded.userId,
      fullName: userDecoded.sub,
      role: userDecoded.role,
      email: userDecoded.email,
    } as User;
  };

  useEffect(() => {
    const token = storage.get('TOKEN');

    if (token) {
      const userDecoded: AccessTokenDecoded = jwtDecode(token ?? '');
      const currentUser = convertToUser(userDecoded);
      setUser(currentUser);
    }
  }, []);

  useEffect(() => {
    if (!data) return;

    storage.set('TOKEN', data.token);
    const userDecoded: AccessTokenDecoded = jwtDecode(data?.token ?? '');
    const currentUser = convertToUser(userDecoded);
    setUser(currentUser);
  }, [isSuccess, data]);

  const login = useCallback(
    (userForm: UserFormData) => {
      const { username, password } = userForm;
      const userDTO: UserDTO = {
        username,
        password,
      };

      loginAccount(userDTO);
    },
    [loginAccount],
  );

  const logout = () => {
    storage.remove('TOKEN');
    setUser(null);
  };

  const isAdmin = useMemo(() => user?.role === Role.ADMIN, [user]);

  const value = useMemo(
    () => ({ user, login, logout, isError, isAdmin }),
    [user, isError, login, isAdmin],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
