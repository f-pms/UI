import { Sidebar as SideBarPro } from 'react-pro-sidebar';

import SidebarHeader from '~/layouts/partials/Sidebar/SidebarHeader';
import SidebarMenu from '~/layouts/partials/Sidebar/SidebarMenu';
import { useTheme } from '~/libs/mui';

interface ISideBarProps {
  collapsed: boolean;
  broken: boolean;
  toggled: boolean;
  setBroken: (broken: boolean) => void;
  setToggled: (toggled: boolean) => void;
}

export function SideBar(props: ISideBarProps) {
  const theme = useTheme();
  const { broken, toggled, collapsed, setBroken, setToggled } = props;
  return (
    <SideBarPro
      backgroundColor='#fff'
      collapsed={!broken ? collapsed : false}
      customBreakPoint={`${theme.breakpoints.values.md}px`}
      rootStyles={{
        '.ps-sidebar-container::-webkit-scrollbar': {
          width: '0',
        },
      }}
      toggled={broken ? toggled : false}
      onBackdropClick={() => setToggled(false)}
      onBreakPoint={setBroken}
    >
      <SidebarHeader />
      <SidebarMenu collapsed={collapsed} />
    </SideBarPro>
  );
}
