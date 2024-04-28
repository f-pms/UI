import { mixed, object, ObjectSchema, string } from 'yup';

import { UserDTO } from '~/services/user/mutation/useCreateUser';
import { Role } from '~/types';

export const userSchema: ObjectSchema<UserDTO> = object({
  fullName: string()
    .min(2, 'Tên tối thiểu có 2 kí tự')
    .max(50, 'Tên tối đa có 50 kí tự')
    .required('Tên không được để trống'),
  username: string()
    .min(2, 'Tên đăng nhập tối thiểu có 2 kí tự')
    .max(16, 'Tên đăng nhập tối đa có 16 kí tự')
    .required('Tên đăng nhập không được để trống')
    .matches(/^\w+$/, 'Tên đăng nhập chỉ chứa kí tự chữ, số và dấu gạch dưới'),
  password: string()
    .min(8, 'Mật khẩu không hợp lệ')
    .max(16, 'Mật khẩu không hợp lệ')
    .required('Mật khẩu không được để trống'),
  email: string()
    .email('Email không hợp lệ')
    .max(320, 'Email tối đa có 320 kí tự')
    .required('Email không được để trống'),
  role: mixed<Role>()
    .required('Vai trò không được để trống')
    .oneOf(Object.values(Role)),
});

export const defaultUser: UserDTO = {
  fullName: '',
  username: '',
  password: '',
  email: '',
  role: Role.USER,
};
