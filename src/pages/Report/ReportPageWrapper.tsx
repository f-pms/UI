import { useEffect } from 'react';

import { Path } from '~/constants';
import { Outlet, useLocation, useNavigate } from '~/libs/react-router-dom';

export function ReportPageWrapper() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == Path.REPORT) {
      navigate(Path.HISTORICAL_REPORT);
    }
  }, [location.pathname, navigate]);

  return <Outlet />;
}
