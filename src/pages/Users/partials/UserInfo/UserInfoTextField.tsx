import { useEffect, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { toast } from 'react-toastify';

import {
  Box,
  Button,
  FormHelperText,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';

import { UserDTO } from '~/services/user/mutation/useCreateUser';
import { useUpdateUser } from '~/services/user/mutation/useUpdateUser';
import { User } from '~/types';
import { displayErrorMessage } from '~/utils/errorMessage';

import { userSchema } from '~/pages/Users/helpers/userForm';

import { EditOutlinedIcon } from '~/components/Icons';

export interface IUserInfoTextFieldProps {
  name: keyof UserDTO;
  label: string;
  disableEdit?: boolean;
  userInfo?: User;
  refetchUserInfo: () => void;
}

export function UserInfoTextField(props: IUserInfoTextFieldProps) {
  const { name, label, disableEdit = false, userInfo, refetchUserInfo } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState<FieldError>();

  const {
    mutate: updateUser,
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
    error: updateError,
  } = useUpdateUser();

  const handleEdit = () => {
    setIsEdit(true);
    setError(undefined);
    setValue(userInfo?.[name] ?? '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(undefined);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!userInfo?.id) return;
      await userSchema.validateAt(name, { [name]: value });

      updateUser({ id: userInfo.id, payload: { [name]: value } });
    } catch (error) {
      setError(error as FieldError);
    }
  };

  useEffect(() => {
    if (isUpdateError) {
      toast.error(displayErrorMessage(updateError));
    }
  }, [isUpdateError, updateError]);

  useEffect(() => {
    if (isUpdateSuccess) {
      toast.success('Cập nhật thông tin người dùng thành công');
      setIsEdit(false);
      refetchUserInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdateSuccess]);

  let actions;

  if (disableEdit) {
    actions = null;
  } else if (isEdit) {
    actions = (
      <Stack direction='row' spacing={1}>
        <Button
          color='inherit'
          size='small'
          variant='outlined'
          onClick={() => setIsEdit(false)}
        >
          Hủy
        </Button>
        <Button size='small' type='submit' variant='outlined'>
          Xong
        </Button>
      </Stack>
    );
  } else {
    actions = (
      <Button
        size='small'
        startIcon={<EditOutlinedIcon />}
        variant='text'
        onClick={handleEdit}
      >
        Chỉnh sửa
      </Button>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        alignItems='center'
        direction='row'
        px={2}
        py={2}
        spacing={2}
        width='100%'
      >
        <Typography variant='body2' width={240}>
          {label}
        </Typography>
        {isEdit && !disableEdit ? (
          <Box style={{ flex: 1 }}>
            <OutlinedInput
              name={name}
              size='small'
              sx={{ fontSize: '14px', mt: 1, width: '300px' }}
              value={value}
              onChange={handleChange}
            />
            <FormHelperText error={!!error} sx={{ ml: 0 }}>
              {error?.message}
            </FormHelperText>
          </Box>
        ) : (
          <Typography style={{ flex: 1 }} variant='body2'>
            {userInfo?.[name]}
          </Typography>
        )}
        {actions}
      </Stack>
    </form>
  );
}
