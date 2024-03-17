import { Path, Role } from '~/constants';
import { DefaultLayout } from '~/layouts';
import { RouteObject } from '~/libs/react-router-dom';
import { PrivateRouteObject } from '~/types';

import {
  AlarmConfigPage,
  AlarmHistoryPage,
  AlarmManagementLayout,
} from '~/pages/AlarmManagement';
import {
  CalendarPage,
  ChartPage,
  ComponentPageLayout,
  TablePage,
} from '~/pages/Components';
import { DashboardPage } from '~/pages/DashboardPage';
import { HomePage } from '~/pages/HomePage';
import MonitoringPage, {
  ProductionPageLayout,
} from '~/pages/ProductionManagement';
import {
  HistoricalReportPage,
  ReportPageWrapper,
  StatisticReportPage,
} from '~/pages/Report';
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
    path: Path.PRODUCTION,
    element: <ProductionPageLayout />,
    layout: <DefaultLayout />,
    roles: [Role.ADMIN, Role.USER],
    children: [
      {
        path: 'monitoring',
        element: <MonitoringPage />,
      },
    ],
  },
  {
    path: Path.ALARM,
    element: <AlarmManagementLayout />,
    layout: <DefaultLayout />,
    roles: [Role.ADMIN, Role.USER],
    children: [
      {
        path: 'history',
        element: <AlarmHistoryPage />,
      },
      {
        path: 'config',
        element: <AlarmConfigPage />,
      },
    ],
  },
  {
    path: Path.REPORT,
    element: <ReportPageWrapper />,
    layout: <DefaultLayout />,
    roles: [Role.ADMIN, Role.USER],
    children: [
      {
        path: 'historical',
        element: <HistoricalReportPage />,
      },
      {
        path: 'statistic',
        element: <StatisticReportPage />,
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
