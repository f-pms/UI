import { useContext } from 'react';

import { SettingItem } from '~/layouts/partials/Header/helpers/settingItems';

import { AuthContext } from '~/pages/Auth/context/AuthContext';

import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from '~/components/MuiComponents';

export interface IUserSettingItemProps {
  setting: SettingItem;
  handleCloseUserMenu: (path: string) => void;
}

export function UserSettingItem(props: IUserSettingItemProps) {
  const { setting, handleCloseUserMenu } = props;
  const { user } = useContext(AuthContext);

  return (
    <MenuItem
      sx={{
        px: 2,
        py: 1,
      }}
      onClick={() => {
        let path = setting.path;
        if (setting.path?.includes(':userId')) {
          path = path?.replace(':userId', String(user?.id ?? ''));
        }
        handleCloseUserMenu(path ?? '');
      }}
    >
      <ListItemIcon>{setting.icon}</ListItemIcon>
      <ListItemText>
        <Typography variant='body2'>{setting.label}</Typography>
      </ListItemText>
    </MenuItem>
  );
}
