import { ReactNode, useState } from 'react';

import { Header } from '~/layouts/partials/Header';
import Loading from '~/layouts/partials/Loading';
import { SideBar } from '~/layouts/partials/Sidebar';

import { Box, Container, Stack } from '~/components/MuiComponents';

export interface IDefaultLayoutProps {
  children?: ReactNode;
  isSideBarDisabled?: boolean;
}

export function DefaultLayout({
  children,
  isSideBarDisabled = false,
}: IDefaultLayoutProps) {
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(
    window.matchMedia('(max-width: 900px)').matches,
  );
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          height: 'calc(100vh)',
          position: 'relative',
        }}
      >
        <Loading />
        <Stack direction='row' sx={{ height: '100%' }}>
          {!isSideBarDisabled && (
            <SideBar
              broken={broken}
              collapsed={collapsed}
              setBroken={setBroken}
              setToggled={setToggled}
              toggled={toggled}
            />
          )}
          <Stack
            component='main'
            sx={{ height: 'auto', overflow: 'auto', flex: 1 }}
          >
            <Header
              broken={broken}
              collapsed={collapsed}
              onCollapsed={() => setCollapsed(!collapsed)}
              onToggled={() => setToggled(!toggled)}
            />
            <Box sx={{ flex: 1 }}>{children}</Box>
            {/* <Footer /> */}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
