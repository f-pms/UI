import { Path, PATH_LABEL } from '~/constants';
import { Role } from '~/types';
import { SidebarItem } from '~/types/sidebar';

import {
  ArticleOutlinedIcon,
  FactoryOutlinedIcon,
  GroupOutlinedIcon,
  InsertChartOutlinedIcon,
  ManageSearchOutlinedIcon,
  MonitorOutlinedIcon,
  NotificationImportantOutlinedIcon,
  SettingsInputComponentOutlinedIcon,
} from '~/components/Icons';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    name: PATH_LABEL[Path.PRODUCTION],
    icon: <FactoryOutlinedIcon sx={{ fontSize: '20px' }} />,
    path: Path.PRODUCTION,
    children: [
      {
        name: PATH_LABEL[Path.PRODUCTION_MONITORING],
        path: Path.PRODUCTION_MONITORING,
        icon: <MonitorOutlinedIcon sx={{ fontSize: '20px' }} />,
      },
    ],
  },
  {
    name: PATH_LABEL[Path.ALARM],
    icon: <NotificationImportantOutlinedIcon sx={{ fontSize: '20px' }} />,
    path: Path.ALARM,
    children: [
      {
        name: PATH_LABEL[Path.ALARM_HISTORY],
        path: Path.ALARM_HISTORY,
        icon: <ManageSearchOutlinedIcon sx={{ fontSize: '20px' }} />,
      },
      {
        name: PATH_LABEL[Path.ALARM_CONFIG],
        path: Path.ALARM_CONFIG,
        icon: <SettingsInputComponentOutlinedIcon sx={{ fontSize: '20px' }} />,
        requiredRoles: [Role.ADMIN],
      },
    ],
  },
  {
    name: PATH_LABEL[Path.REPORT],
    icon: <ArticleOutlinedIcon sx={{ fontSize: '20px' }} />,
    path: Path.REPORT,
    children: [
      {
        name: PATH_LABEL[Path.HISTORICAL_REPORT],
        path: Path.HISTORICAL_REPORT,
        icon: <ManageSearchOutlinedIcon sx={{ fontSize: '20px' }} />,
      },
      {
        name: PATH_LABEL[Path.STATISTIC_REPORT],
        path: Path.STATISTIC_REPORT,
        icon: <InsertChartOutlinedIcon sx={{ fontSize: '20px' }} />,
      },
    ],
  },
  {
    name: PATH_LABEL[Path.USER_LIST],
    icon: <GroupOutlinedIcon sx={{ fontSize: '20px' }} />,
    path: Path.USER_LIST,
  },
];
