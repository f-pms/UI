import Copyright from '~/layouts/partials/Copyright';

import { Box, Typography } from '~/components/MuiComponents';

export function Footer() {
  return (
    <Box component='footer' sx={{ bgcolor: 'grey.100', p: 1 }}>
      <Typography
        align='center'
        color='text.secondary'
        component='p'
        variant='subtitle1'
      >
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </Box>
  );
}
