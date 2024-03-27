import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';

import { Path } from '~/constants';

import { AuthContext } from '~/pages/Auth/context/AuthContext';
import {
  defaultUserFormData,
  UserFormData,
  userValidationSchema,
} from '~/pages/Auth/helpers/loginForm';

import { InputWithLabel } from '~/components';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from '~/components/MuiComponents';

interface ILoginFormProps {
  onCallbackUrl: (url: string) => void;
}

export function LoginForm(props: ILoginFormProps) {
  const { onCallbackUrl } = props;
  const { login, isError, user } = useContext(AuthContext);
  const [errorState, setErrorState] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<UserFormData>({
    defaultValues: defaultUserFormData,
    resolver: yupResolver(userValidationSchema),
  });

  const handleSubmitUser = (formData: UserFormData) => {
    login(formData);
    onCallbackUrl(Path.PRODUCTION_MONITORING);
  };

  useEffect(() => {
    setErrorState(isError);
  }, [isError]);

  const watchedUsername = watch('username');
  const watchedPassword = watch('password');

  useEffect(() => {
    setErrorState(false);
  }, [watchedUsername, watchedPassword]);

  useEffect(() => {
    if (user) {
      onCallbackUrl(Path.PRODUCTION_MONITORING);
    }
  }, [user, onCallbackUrl]);

  return (
    <Container
      component='main'
      maxWidth='xl'
      sx={{
        height: '100vh !important',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <Grid container alignItems='center' justifyContent='space-between'>
        <Grid item xs={7}>
          <Box
            alt='login background'
            component='img'
            src={'/login_background.png'}
            sx={{
              width: '100%',
            }}
          />
        </Grid>
        <Grid item lg={5} md={4}>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100% !important',
            }}
          >
            <Typography
              color={'black'}
              marginBottom={6}
              sx={{
                fontWeight: 600,
              }}
              variant='h3'
            >
              Đăng nhập
            </Typography>
            <Box component='form' sx={{ mt: 1 }} width={400}>
              <Stack gap={2}>
                <InputWithLabel
                  autoFocus
                  fullWidth
                  control={control}
                  error={errors.username}
                  name='username'
                  placeholder='Tên đăng nhập'
                  size='medium'
                  type='text'
                />
                <InputWithLabel
                  fullWidth
                  control={control}
                  error={errors.password}
                  name='password'
                  placeholder='Mật khẩu'
                  size='medium'
                  type='password'
                />
              </Stack>

              {errorState && (
                <Typography
                  color={'error'}
                  sx={{ marginBlock: 1.5 }}
                  textAlign={'center'}
                >
                  Đăng nhập thất bại
                </Typography>
              )}
              <Button
                fullWidth
                sx={{ mt: 3, mb: 2, paddingBlock: 1.5 }}
                type='button'
                variant='contained'
                onClick={handleSubmit(handleSubmitUser)}
              >
                Đăng nhập
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
