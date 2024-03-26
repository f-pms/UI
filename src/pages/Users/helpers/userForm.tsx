import { mixed, object, ObjectSchema, string } from 'yup';

import { Role, User } from '~/types';

export interface UserDTO extends Omit<User, 'id'> {}

export const userSchema: ObjectSchema<UserDTO> = object({
  name: string()
    .min(2, 'Tên tối thiểu có 2 kí tự')
    .max(50, 'Tên tối đa có 50 kí tự')
    .required('Tên không được để trống'),
  username: string().required('Tên đăng nhập không được để trống'),
  password: string().required('Mật khẩu không được để trống'),
  email: string()
    .email('Email không hợp lệ')
    .max(320, 'Email tối đa có 320 kí tự')
    .required('Email không được để trống'),
  role: mixed<Role>()
    .required('Vai trò không được để trống')
    .oneOf(Object.values(Role)),
});

export const defaultUser: UserDTO = {
  name: '',
  username: '',
  password: '',
  email: '',
  role: Role.USER,
};
