import { useState } from 'react';
import { FieldError, useFormContext } from 'react-hook-form';

import {
  Box,
  Button,
  FormHelperText,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';

import { UserDTO, userSchema } from '~/pages/Users/helpers/userForm';

import { EditOutlinedIcon } from '~/components/Icons';

export interface IUserInfoTextFieldProps {
  isEdit: { [Key in keyof UserDTO]: boolean };
  setIsEdit: React.Dispatch<
    React.SetStateAction<{ [Key in keyof UserDTO]: boolean }>
  >;
  name: keyof UserDTO;
  label: string;
  disableEdit?: boolean;
}

export function UserInfoTextField(props: IUserInfoTextFieldProps) {
  const { isEdit, setIsEdit, name, label, disableEdit = false } = props;
  const { getValues, setValue: setValueForm } = useFormContext<UserDTO>();
  const [value, setValue] = useState<string>(() => getValues(name));
  const [error, setError] = useState<FieldError>();

  const handleEdit = (key: keyof UserDTO) => {
    setIsEdit((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  const handleSave = async (key: keyof UserDTO) => {
    try {
      await userSchema.validateAt(key, { [key]: value });
      setIsEdit((prev) => ({
        ...prev,
        [key]: false,
      }));
      setValueForm(name, value);
    } catch (error) {
      setError(error as FieldError);
    }
  };

  const handleCancel = (key: keyof UserDTO) => {
    setIsEdit((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  let button;

  if (disableEdit) {
    button = null;
  } else if (isEdit[name]) {
    button = (
      <Stack direction='row' spacing={1}>
        <Button
          color='inherit'
          size='small'
          variant='outlined'
          onClick={() => handleCancel(name)}
        >
          Hủy
        </Button>
        <Button
          size='small'
          variant='outlined'
          onClick={() => handleSave(name)}
        >
          Xong
        </Button>
      </Stack>
    );
  } else {
    button = (
      <Button
        size='small'
        startIcon={<EditOutlinedIcon />}
        variant='text'
        onClick={() => handleEdit(name)}
      >
        Chỉnh sửa
      </Button>
    );
  }

  return (
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
      {isEdit[name] && !disableEdit ? (
        <Box style={{ flex: 1 }}>
          <OutlinedInput
            name={name}
            size='small'
            sx={{ fontSize: '14px', mt: 1, width: '300px' }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <FormHelperText error={!!error} sx={{ ml: 0 }}>
            {error?.message}
          </FormHelperText>
        </Box>
      ) : (
        <Typography style={{ flex: 1 }} variant='body2'>
          {getValues(name)}
        </Typography>
      )}
      {button}
    </Stack>
  );
}
