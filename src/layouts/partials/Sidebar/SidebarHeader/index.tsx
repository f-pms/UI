import { AppBar, Box, Stack, Typography } from '~/components/MuiComponents';

export interface ISidebarHeaderProps {
  collapsed?: boolean;
}
export default function SidebarHeader(props: ISidebarHeaderProps) {
  return (
    <AppBar
      position='sticky'
      sx={{
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Stack
        alignItems='center'
        direction='row'
        height='64px'
        justifyContent='center'
        spacing={1}
      >
        <Box
          alt='logo'
          component='img'
          src={'/logo.png'}
          sx={{
            width: 'auto',
            height: '24px',
          }}
        />
        {props?.collapsed ? null : (
          <Typography
            noWrap
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: '24px',
            }}
          >
            RMS
          </Typography>
        )}
      </Stack>
    </AppBar>
  );
}
