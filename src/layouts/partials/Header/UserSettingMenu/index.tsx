import { Dispatch, useContext, useMemo } from 'react';

import { Path } from '~/constants';
import { SETTING_ITEMS } from '~/layouts/partials/Header/helpers/settingItems';
import { ThemeCustomization } from '~/layouts/partials/Header/ThemeCustomization';
import { UserSettingItem } from '~/layouts/partials/Header/UserSettingItem';
import { useNavigate } from '~/libs/react-router-dom';
import { Role } from '~/types';

import { AuthContext } from '~/pages/Auth/context/AuthContext';

import { SoftButton } from '~/components';
import { ExitToAppOutlinedIcon } from '~/components/Icons';
import {
  Avatar,
  Box,
  Menu,
  Stack,
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

  const translateUserRole = useMemo(() => {
    if (user?.role === Role.ADMIN) {
      return 'Quản lý';
    }
    return 'Giám sát viên';
  }, [user?.role]);

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
          <Avatar>H</Avatar>
          <Box sx={{ ml: 6 }}>
            <Typography variant='body1'>{user?.fullName}</Typography>
            <Typography variant='caption'>{translateUserRole}</Typography>
          </Box>
        </Stack>
        <SoftButton color={'primary'}>
          <ExitToAppOutlinedIcon fontSize='small' />
        </SoftButton>
      </Stack>
      <UserSettingItem
        key={SETTING_ITEMS[0].label}
        handleCloseUserMenu={handleCloseUserMenu}
        setting={SETTING_ITEMS[0]}
      />
      <ThemeCustomization setAnchorElUser={setAnchorElUser} />
      <UserSettingItem
        key={SETTING_ITEMS[2].label}
        handleCloseUserMenu={() => {
          logout();
          navigate(Path.SIGN_IN);
        }}
        setting={SETTING_ITEMS[2]}
      />
    </Menu>
  );
}
