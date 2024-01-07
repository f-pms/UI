import { useEffect } from 'react';

import { Path } from '~/constants';
import { Outlet, useLocation, useNavigate } from '~/libs/react-router-dom';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == Path.PRODUCTION) {
      navigate(Path.PRODUCTION_MONITORING);
    }
  }, [location.pathname, navigate]);

  return <Outlet />;
}
