import { Path, PATH_LABEL } from '~/constants';
import { SidebarItem } from '~/types/sidebar';

import { HandymanOutlinedIcon } from '~/components/Icons';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    name: PATH_LABEL[Path.PRODUCTION],
    icon: <HandymanOutlinedIcon sx={{ fontSize: '22px' }} />,
    path: Path.PRODUCTION,
    children: [
      {
        name: PATH_LABEL[Path.PRODUCTION_MONITORING],
        path: Path.PRODUCTION_MONITORING,
      },
    ],
  },
  // {
  //   name: PATH_LABEL[Path.DASHBOARD],
  //   icon: <CottageOutlinedIcon sx={{ fontSize: '20px' }} />,
  //   path: Path.DASHBOARD,
  // },
  // {
  //   name: PATH_LABEL[Path.HOME],
  //   icon: <DashboardOutlinedIcon sx={{ fontSize: '20px' }} />,
  //   path: Path.HOME,
  // },
  // {
  //   name: PATH_LABEL[Path.COMPONENTS],
  //   icon: <HandymanOutlinedIcon sx={{ fontSize: '20px' }} />,
  //   path: Path.COMPONENTS,
  //   children: [
  //     {
  //       name: PATH_LABEL[Path.COMPONENTS_CALENDAR],
  //       path: Path.COMPONENTS_CALENDAR,
  //     },
  //     {
  //       name: PATH_LABEL[Path.COMPONENTS_CHART],
  //       path: Path.COMPONENTS_CHART,
  //     },
  //     {
  //       name: PATH_LABEL[Path.COMPONENTS_TABLE],
  //       path: Path.COMPONENTS_TABLE,
  //     },
  //   ],
  // },
];
