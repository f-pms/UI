import { Link } from '~/libs/react-router-dom';

import { Typography } from '~/components/MuiComponents';

export default function Copyright() {
  return (
    <Typography align='center' color='text.secondary' variant='body2'>
      {'Copyright © '}
      <Link color='inherit' to={'#'}>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
