import * as React from 'react';
import { Link } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Path } from '~/constants';
import withCallbackUrl, { ICallbackProps } from '~/hocs/withCallbackUrl';

import { AuthContext } from '~/pages/Auth/context/AuthContext';

function Copyright<T>(props: Readonly<T>) {
  return (
    <Typography
      align='center'
      color='text.secondary'
      variant='body2'
      {...props}
    >
      {'Copyright © '}
      <Typography color='inherit'>Your Website</Typography>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

type ISignUpProps = ICallbackProps;

function SignUp(props: Readonly<ISignUpProps>) {
  const { login, register } = React.useContext(AuthContext);
  const { handleCallback = () => {} } = props;
  const handleSubmitUser = () => {
    login();
    handleCallback(Path.HOME);
  };
  const handleSubmitAdmin = () => {
    register();
    handleCallback(Path.DASHBOARD);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
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
            Sign up
          </Typography>
          <Box noValidate component='form' sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <TextField
                  autoFocus
                  fullWidth
                  required
                  autoComplete='given-name'
                  id='firstName'
                  label='First Name'
                  name='firstName'
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  required
                  autoComplete='family-name'
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  autoComplete='email'
                  id='email'
                  label='Email Address'
                  name='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  autoComplete='new-password'
                  id='password'
                  label='Password'
                  name='password'
                  type='password'
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox color='primary' value='allowExtraEmails' />
                  }
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              type='button'
              variant='contained'
              onClick={handleSubmitUser}
            >
              Sign Up as User
            </Button>
            <Button
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              type='button'
              variant='contained'
              onClick={handleSubmitAdmin}
            >
              Sign Up as Admin
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link to={Path.SIGN_IN}>Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
export const SignUpPage = withCallbackUrl(SignUp);
