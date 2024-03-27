import * as yup from 'yup';

export type UserFormData = {
  username: string;
  password: string;
};

export const defaultUserFormData: UserFormData = {
  username: '',
  password: '',
};

export const userValidationSchema = yup.object({
  username: yup.string().required('Tên đăng nhập không được phép để trống'),
  password: yup.string().required('Mật khẩu không được phép để trống'),
});
