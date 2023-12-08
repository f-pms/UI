import { Path, Role } from '~/constants';
import { DefaultLayout } from '~/layouts';
import { RouteObject } from '~/libs/react-router-dom';
import { PrivateRouteObject } from '~/types';

import {
  CalendarPage,
  ChartPage,
  ComponentPageLayout,
  TablePage,
} from '~/pages/Components';
import { DashboardPage } from '~/pages/DashboardPage';
import { HomePage } from '~/pages/HomePage';
import { UserListPage, UserProfilePage } from '~/pages/Users';

export const privateRoutes: (PrivateRouteObject & RouteObject)[] = [
  {
    index: true,
    path: Path.HOME,
    element: <HomePage />,
    layout: <DefaultLayout />,
    roles: [Role.ADMIN, Role.USER],
  },
  {
    path: Path.COMPONENTS,
    element: <ComponentPageLayout />,
    layout: <DefaultLayout />,
    roles: [Role.ADMIN, Role.USER],
    children: [
      {
        path: 'calendar',
        element: <CalendarPage />,
      },
      {
        path: 'chart',
        element: <ChartPage />,
      },
      {
        path: 'table',
        element: <TablePage />,
      },
    ],
  },
  {
    path: Path.DASHBOARD,
    element: <DashboardPage />,
    roles: [Role.ADMIN],
    layout: <DefaultLayout />,
  },
  {
    path: Path.USER_LIST,
    element: <UserListPage />,
    roles: [Role.ADMIN],
    layout: <DefaultLayout />,
  },
  {
    path: Path.USER_PROFILE,
    element: <UserProfilePage />,
    roles: [Role.ADMIN, Role.USER],
    layout: <DefaultLayout />,
  },
];
