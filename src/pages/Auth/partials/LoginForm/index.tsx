import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { Path } from '~/constants';

import { AuthContext } from '~/pages/Auth/context/AuthContext';
import {
  defaultUserFormData,
  UserFormData,
  userValidationSchema,
} from '~/pages/Auth/helpers/loginForm';

import { Checkbox, InputWithLabel, RouteLink, TextField } from '~/components';
import { LockOutlinedIcon } from '~/components/Icons';
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  Typography,
} from '~/components/MuiComponents';

interface ILoginFormProps {
  onCallbackUrl: (url: string) => void;
}

export function LoginForm(props: ILoginFormProps) {
  const { onCallbackUrl } = props;
  const { login, register } = useContext(AuthContext);
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
    getValues,
    trigger,
  } = useForm<UserFormData>({
    defaultValues: defaultUserFormData,
    resolver: yupResolver(userValidationSchema),
  });
  const handleSubmitUser = (formData: UserFormData) => {
    login(formData);
    onCallbackUrl(Path.HOME);
  };
  const handleSubmitAdmin = () => {
    register();
    onCallbackUrl(Path.HOME);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box component='form' sx={{ mt: 1 }}>
          <InputWithLabel
            autoFocus
            fullWidth
            control={control}
            error={errors.username}
            name='username'
            placeholder='Tên đăng nhập'
            type='text'
          />
          <InputWithLabel
            autoFocus
            fullWidth
            control={control}
            error={errors.password}
            name='password'
            placeholder='Mật khẩu'
            type='password'
          />
          <FormControlLabel
            control={
              <Controller
                control={control}
                name='remember'
                render={({ field }) => (
                  <Checkbox {...field} value={watch('remember')} />
                )}
              />
            }
            label={'Ghi nhớ tên đăng nhập'}
          />
          <Button
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            type='button'
            variant='contained'
            onClick={handleSubmit(handleSubmitUser)}
          >
            Sign In as User
          </Button>
          <Button
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            type='button'
            variant='contained'
            onClick={handleSubmitAdmin}
          >
            Sign In as Admin
          </Button>
          <Grid container>
            <Grid item xs>
              <RouteLink to={Path.SIGN_IN}>Forgot password?</RouteLink>
            </Grid>
            <Grid item>
              <RouteLink to={Path.SIGN_UP}>
                {"Don't have an account? Sign Up"}
              </RouteLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
