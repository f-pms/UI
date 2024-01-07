import HeaderBreadcrumbs from '~/layouts/partials/Header/HeaderBreadcrumbs';
import SwitchRole from '~/layouts/partials/Header/SwitchRole';
import ToggleSidebarButton from '~/layouts/partials/Header/ToggleSidebarButton';
import UserSettings from '~/layouts/partials/Header/UserSettings';

import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
} from '~/components/MuiComponents';

interface IHeaderProps {
  broken: boolean;
  onToggled: () => void;
  collapsed: boolean;
  onCollapsed: () => void;
}
export function Header(props: IHeaderProps) {
  return (
    <AppBar position='sticky' sx={{ zIndex: 999 }}>
      <Container disableGutters maxWidth={false}>
        <Toolbar sx={{ backgroundColor: '#fff' }}>
          <Stack alignItems='center' direction='row'>
            <ToggleSidebarButton {...props} />
          </Stack>

          <Box sx={{ flexGrow: 1 }}>
            <HeaderBreadcrumbs />
          </Box>

          <Stack
            alignItems='center'
            direction='row'
            sx={{ flexGrow: 0, display: { sx: 'none' } }}
          >
            <SwitchRole />
            <UserSettings />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
