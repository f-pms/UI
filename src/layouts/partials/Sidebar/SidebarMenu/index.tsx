import { useContext } from 'react';

import { Role } from '~/constants';
import { useSoftColor } from '~/hooks';
import { SIDEBAR_ITEMS } from '~/layouts/partials/Sidebar/helpers/items';
import { useTheme } from '~/libs/mui';
import { Menu, MenuItem, SubMenu } from '~/libs/react-pro-sidebar';
import { Link, useLocation } from '~/libs/react-router-dom';
import { SidebarItem } from '~/types';

import { AuthContext } from '~/pages/Auth/context/AuthContext';

export interface ISidebarMenuProps {
  collapsed: boolean;
}

export default function SidebarMenu({ collapsed }: ISidebarMenuProps) {
  const theme = useTheme();
  const location = useLocation();
  const { bgrColor, bgrHoverColor } = useSoftColor('primary');
  const { user } = useContext(AuthContext);

  const validateSidebarItem = (item: SidebarItem) => {
    if (item.requiredRoles) {
      return item.requiredRoles?.includes(user?.role ?? Role.USER);
    }

    return true;
  };

  return (
    <Menu
      closeOnClick
      menuItemStyles={{
        button: ({ isSubmenu, open }) => {
          const isHighlighted = !isSubmenu || (isSubmenu && !open) || collapsed;
          return {
            color: theme.palette.text.strong,
            fontSize: theme.typography.body2.fontSize,
            [`&.ps-active`]: {
              backgroundColor: isHighlighted ? bgrColor : '#fff',
              color: isHighlighted ? theme.palette.primary.main : 'unset',
              fontWeight: isHighlighted ? 700 : 500,
              borderRight: isHighlighted ? '2px solid' : 'none',
            },
            [`&>.ps-menu-icon`]: {
              color: theme.palette.text.primary,
            },
            [`&>.ps-menu-icon.ps-active`]: {
              color: isHighlighted ? theme.palette.primary.main : 'unset',
            },
            [`&.ps-menu-button:hover`]: {
              backgroundColor: bgrHoverColor,
              color: theme.palette.primary.main,
              [`&>.ps-menu-icon`]: {
                color: theme.palette.primary.main,
              },
            },
            [`&.ps-active:hover`]: {
              backgroundColor: isHighlighted ? bgrColor : bgrHoverColor,
            },
          };
        },
      }}
    >
      {SIDEBAR_ITEMS.map((item) => {
        if (item.children) {
          return (
            <SubMenu
              key={item.path}
              active={location.pathname.startsWith(item.path)}
              icon={item.icon}
              label={item.name}
            >
              {item.children.map((child) => {
                if (!validateSidebarItem(child)) {
                  return;
                }

                return (
                  <MenuItem
                    key={child.path}
                    active={location.pathname == child.path}
                    component={<Link to={child.path} />}
                    icon={child.icon}
                  >
                    {child.name}
                  </MenuItem>
                );
              })}
            </SubMenu>
          );
        }

        if (!validateSidebarItem(item)) {
          return;
        }

        return (
          <MenuItem
            key={item.path}
            active={location.pathname == item.path}
            component={<Link to={item.path} />}
            icon={item.icon}
          >
            {item.name}
          </MenuItem>
        );
      })}
    </Menu>
  );
}
