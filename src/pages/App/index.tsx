import { useEffect } from 'react';

import { Path } from '~/constants';
import { CssBaseline } from '~/libs/mui';
import { Outlet, useLocation, useNavigate } from '~/libs/react-router-dom';

import { CustomizeThemeProvider } from '~/pages/App/context/CustomizeThemeContext';

export function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == Path.ROOT) {
      navigate(Path.PRODUCTION_MONITORING);
    }
  }, [location.pathname, navigate]);

  return (
    <CustomizeThemeProvider>
      <CssBaseline />
      <Outlet />
    </CustomizeThemeProvider>
  );
}
