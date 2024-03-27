import { ReactNode } from 'react';

import { Path, Role } from '~/constants';

export type SidebarItem = {
  name: string;
  path: Path;
  icon?: ReactNode;
  children?: SidebarItem[];
  requiredRoles?: Role[];
};
