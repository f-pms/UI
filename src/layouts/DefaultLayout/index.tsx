import { ReactNode, useState } from 'react';

import { Footer } from '~/layouts/partials/Footer';
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
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ height: 'calc(100vh)', position: 'relative' }}
      >
        <Loading />
        <Stack
          direction='row'
          sx={{ height: '100%' }}
          // sx={{ height: 'calc(100% - 73.5px)', marginTop: '5px' }}
        >
          {!isSideBarDisabled && (
            <SideBar
              broken={broken}
              collapsed={collapsed}
              setBroken={setBroken}
              setToggled={setToggled}
              toggled={toggled}
            />
          )}
          <Box
            component='main'
            sx={{ height: 'auto', overflow: 'auto', flex: 1 }}
          >
            <Header
              broken={broken}
              collapsed={collapsed}
              onCollapsed={() => setCollapsed(!collapsed)}
              onToggled={() => setToggled(!toggled)}
            />
            <Box sx={{ p: '24px', minHeight: 'calc(100% - 130px)' }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </Stack>
      </Container>
    </>
  );
}
