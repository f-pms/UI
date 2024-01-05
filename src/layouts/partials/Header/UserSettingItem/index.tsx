import { SettingItem } from '~/layouts/partials/Header/helpers/settingItems';

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

export function UserSettingItem(props: Readonly<IUserSettingItemProps>) {
  const { setting, handleCloseUserMenu } = props;

  return (
    <MenuItem
      sx={{
        px: 2,
        py: 1,
      }}
      onClick={() => handleCloseUserMenu(setting.path || '')}
    >
      <ListItemIcon>{setting.icon}</ListItemIcon>
      <ListItemText>
        <Typography variant='body2'>{setting.label}</Typography>
      </ListItemText>
    </MenuItem>
  );
}
