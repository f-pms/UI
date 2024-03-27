import { ReactNode } from 'react';

import { Path } from '~/constants';
import { Role } from '~/types/user';

export type SidebarItem = {
  name: string;
  path: Path;
  icon?: ReactNode;
  children?: SidebarItem[];
  requiredRoles?: Role[];
};
