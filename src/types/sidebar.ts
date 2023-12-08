import { ReactNode } from 'react';

import { Path } from '~/constants';

export type SidebarItem = {
  name: string;
  path: Path;
  icon?: ReactNode;
  children?: SidebarItem[];
};
