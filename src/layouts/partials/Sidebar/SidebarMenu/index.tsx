import { SIDEBAR_ITEMS } from '~/layouts/partials/Sidebar/helpers/items';
import { alpha, useTheme } from '~/libs/mui';
import { Menu, MenuItem, SubMenu } from '~/libs/react-pro-sidebar';
import { Link, useLocation } from '~/libs/react-router-dom';

export interface ISidebarMenuProps {
  collapsed: boolean;
}

export default function SidebarMenu({ collapsed }: ISidebarMenuProps) {
  const theme = useTheme();
  const location = useLocation();

  const itemBackgroundColor = alpha(
    theme.palette.primary.light,
    theme.palette.action.focusOpacity,
  );

  const itemBackgroundHover = alpha(
    theme.palette.primary.light,
    theme.palette.action.hoverOpacity,
  );

  return (
    <Menu
      closeOnClick
      menuItemStyles={{
        button: ({ isSubmenu, open }) => {
          const isHighlighted = !isSubmenu || (isSubmenu && !open) || collapsed;
          return {
            color: theme.palette.text.primary,
            fontSize: theme.typography.body2.fontSize,
            [`&.ps-active`]: {
              backgroundColor: isHighlighted ? itemBackgroundColor : '#fff',
              color: isHighlighted ? theme.palette.primary.main : 'unset',
              fontWeight: isHighlighted ? 700 : 400,
              borderRight: isHighlighted ? '2px solid' : 'none',
            },
            [`&.ps-menu-button:hover`]: {
              backgroundColor: itemBackgroundHover,
            },
            [`&.ps-active:hover`]: {
              backgroundColor: isHighlighted
                ? itemBackgroundColor
                : itemBackgroundHover,
            },
          };
        },
      }}
    >
      {SIDEBAR_ITEMS.map((item) => {
        return item.children ? (
          <SubMenu
            key={item.path}
            active={location.pathname.startsWith(item.path)}
            icon={item.icon}
            label={item.name}
          >
            {item.children.map((child) => {
              return (
                <MenuItem
                  key={child.path}
                  active={location.pathname == child.path}
                  component={<Link to={child.path} />}
                >
                  {child.name}
                </MenuItem>
              );
            })}
          </SubMenu>
        ) : (
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
