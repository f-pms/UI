import { useContext } from 'react';

import { Path } from '~/constants';

import { AuthContext } from '~/pages/Auth/context/AuthContext';

import { Checkbox, RouteLink, TextField } from '~/components';
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

export function LoginForm(props: Readonly<ILoginFormProps>) {
  const { onCallbackUrl } = props;
  const { login, register } = useContext(AuthContext);

  const handleSubmitUser = () => {
    login();
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
          <TextField
            autoFocus
            fullWidth
            required
            autoComplete='email'
            id='email'
            label='Email Address'
            margin='normal'
            name='email'
          />
          <TextField
            fullWidth
            required
            autoComplete='current-password'
            id='password'
            label='Password'
            margin='normal'
            name='password'
            type='password'
          />
          <FormControlLabel
            control={<Checkbox color='primary' name={''} value='remember' />}
            label='Remember me'
          />
          <Button
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            type='button'
            variant='contained'
            onClick={handleSubmitUser}
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
