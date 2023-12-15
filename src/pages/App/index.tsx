import { useEffect } from 'react';

import { Path } from '~/constants';
import { CssBaseline } from '~/libs/mui';
import { Outlet, useLocation, useNavigate } from '~/libs/react-router-dom';
import { useWebSocketStore } from '~/stores/useWebSocket';

import { CustomizeThemeProvider } from '~/pages/App/context/CustomizeThemeContext';

export function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const ws = useWebSocketStore((state) => state);

  useEffect(() => {
    if (location.pathname == Path.ROOT) {
      navigate(Path.HOME);
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    ws.connect();

    return () => {
      ws.disconnect();
    };
  }, []);

  return (
    <CustomizeThemeProvider>
      <CssBaseline />
      <Outlet />
    </CustomizeThemeProvider>
  );
}
