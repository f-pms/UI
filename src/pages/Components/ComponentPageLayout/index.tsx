import { useEffect } from 'react';

import { Path } from '~/constants';
import { Outlet, useLocation, useNavigate } from '~/libs/react-router-dom';

export function ComponentPageLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == Path.COMPONENTS) {
      navigate(Path.COMPONENTS_CALENDAR);
    }
  }, [location.pathname, navigate]);

  return (
    <div>
      <h1>ComponentPages</h1>
      <Outlet />
    </div>
  );
}
