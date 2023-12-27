import { useEffect, useMemo } from 'react';

import { Path, PATH_LABEL } from '~/constants';
import { Outlet, useLocation, useNavigate } from '~/libs/react-router-dom';

import { SectionHeading } from '~/components';
import { Divider, Stack } from '~/components/MuiComponents';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == Path.PRODUCTION) {
      navigate(Path.PRODUCTION_MONITORING);
    }
  }, [location.pathname, navigate]);

  const headings = useMemo(() => {
    return {
      header: PATH_LABEL[location.pathname as Path],
      description:
        'Giám sát tình trạng kết nối, nhiệt độ và thông số kĩ thuật của các cụm, trạm, máy,...',
    };
  }, [location.pathname]);

  return <Outlet />;
}
