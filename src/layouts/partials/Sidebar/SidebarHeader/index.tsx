import { AppBar, Typography } from '~/components/MuiComponents';

export default function SidebarHeader() {
  return (
    <AppBar
      position='sticky'
      sx={{
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Typography
        noWrap
        sx={{
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          lineHeight: '64px',
        }}
        variant='h6'
      >
        PMS
      </Typography>
    </AppBar>
  );
}
