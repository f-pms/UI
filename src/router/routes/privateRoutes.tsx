import { Path } from '~/constants';
import { DefaultLayout } from '~/layouts';
import { RouteObject } from '~/libs/react-router-dom';
import { PrivateRouteObject, Role } from '~/types';

import {
  AlarmConfigPage,
  AlarmHistoryPage,
  AlarmManagementLayout,
} from '~/pages/AlarmManagement';
import MonitoringPage, {
  ProductionPageLayout,
} from '~/pages/ProductionManagement';
import {
  HistoricalReportDetailsPage,
  HistoricalReportListPage,
  ReportPageWrapper,
  StatisticReportDetailsPage,
  StatisticReportPage,
} from '~/pages/Report';
import { UserListPage, UserProfilePage } from '~/pages/Users';

export const privateRoutes: (PrivateRouteObject & RouteObject)[] = [
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
    ],
  },
  {
    path: Path.ALARM,
    element: <AlarmManagementLayout />,
    layout: <DefaultLayout />,
    roles: [Role.ADMIN],
    children: [
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
        path: 'history',
        element: <HistoricalReportListPage />,
      },
      {
        path: 'history/:reportId',
        element: <HistoricalReportDetailsPage />,
      },
      {
        path: 'history/:reportId/statistic',
        element: <StatisticReportDetailsPage />,
      },
      {
        path: 'statistic',
        element: <StatisticReportPage />,
      },
    ],
  },
  {
    path: Path.USER_LIST,
    element: <UserListPage />,
    roles: [Role.ADMIN],
    layout: <DefaultLayout />,
    children: [
      {
        path: ':userId',
        element: <UserProfilePage />,
      },
    ],
  },
  {
    path: Path.USER_PROFILE,
    element: <UserProfilePage />,
    roles: [Role.ADMIN, Role.USER],
    layout: <DefaultLayout />,
  },
];
