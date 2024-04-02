import { Dispatch, useContext } from 'react';
import _ from 'lodash';

import { Path } from '~/constants';
import { SETTING_ITEMS } from '~/layouts/partials/Header/helpers/settingItems';
import { ThemeCustomization } from '~/layouts/partials/Header/ThemeCustomization';
import { UserSettingItem } from '~/layouts/partials/Header/UserSettingItem';
import { useNavigate } from '~/libs/react-router-dom';
import { translateUserRole } from '~/utils';

import { AuthContext } from '~/pages/Auth/context/AuthContext';

import { SoftButton } from '~/components';
import { ExitToAppOutlinedIcon } from '~/components/Icons';
import {
  Avatar,
  Box,
  Menu,
  Stack,
  Tooltip,
  Typography,
} from '~/components/MuiComponents';

export interface IUserSettingMenuProps {
  anchorElUser: null | HTMLElement;
  setAnchorElUser: Dispatch<React.SetStateAction<HTMLElement | null>>;
}

export function UserSettingMenu(props: IUserSettingMenuProps) {
  const { anchorElUser, setAnchorElUser } = props;
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);

  const handleCloseUserMenu = (path: string) => {
    setAnchorElUser(null);
    if (path) navigate(path);
  };

  const handleLogout = () => {
    logout();
    navigate(Path.SIGN_IN);
  };

  return (
    <Menu
      keepMounted
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id='menu-appbar'
      open={Boolean(anchorElUser)}
      sx={{ mt: '42px' }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={handleCloseUserMenu}
    >
      <Stack
        alignItems='center'
        direction='row'
        justifyContent='space-between'
        sx={{ width: 300, p: 2 }}
      >
        <Stack alignItems='center' direction='row' spacing={1}>
          <Avatar>{user?.fullName[0].toUpperCase()}</Avatar>
          <Box sx={{ ml: 6 }}>
            <Typography variant='body1'>
              {_.startCase(user?.fullName)}
            </Typography>
            <Typography variant='caption'>
              {translateUserRole(user?.role)}
            </Typography>
          </Box>
        </Stack>
        <Tooltip title='Đăng xuất'>
          <SoftButton color={'primary'} onClick={handleLogout}>
            <ExitToAppOutlinedIcon fontSize='small' />
          </SoftButton>
        </Tooltip>
      </Stack>
      <UserSettingItem
        key={SETTING_ITEMS[0].label}
        handleCloseUserMenu={handleCloseUserMenu}
        setting={SETTING_ITEMS[0]}
      />
      <ThemeCustomization setAnchorElUser={setAnchorElUser} />
      <UserSettingItem
        key={SETTING_ITEMS[2].label}
        handleCloseUserMenu={handleLogout}
        setting={SETTING_ITEMS[2]}
      />
    </Menu>
  );
}
