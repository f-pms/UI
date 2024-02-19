import { Path, PATH_LABEL } from '~/constants';
import { SidebarItem } from '~/types/sidebar';

import {
  DashboardOutlinedIcon,
  FactoryOutlinedIcon,
  HandymanOutlinedIcon,
  HistoryOutlinedIcon,
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
        icon: <HistoryOutlinedIcon sx={{ fontSize: '20px' }} />,
      },
      {
        name: PATH_LABEL[Path.ALARM_CONFIG],
        path: Path.ALARM_CONFIG,
        icon: <SettingsInputComponentOutlinedIcon sx={{ fontSize: '20px' }} />,
      },
    ],
  },
  {
    name: PATH_LABEL[Path.HOME],
    icon: <DashboardOutlinedIcon sx={{ fontSize: '20px' }} />,
    path: Path.HOME,
  },
  {
    name: PATH_LABEL[Path.COMPONENTS],
    icon: <HandymanOutlinedIcon sx={{ fontSize: '20px' }} />,
    path: Path.COMPONENTS,
    children: [
      {
        name: PATH_LABEL[Path.COMPONENTS_CALENDAR],
        path: Path.COMPONENTS_CALENDAR,
      },
      {
        name: PATH_LABEL[Path.COMPONENTS_CHART],
        path: Path.COMPONENTS_CHART,
      },
      {
        name: PATH_LABEL[Path.COMPONENTS_TABLE],
        path: Path.COMPONENTS_TABLE,
      },
    ],
  },
];
