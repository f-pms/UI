import { useState } from 'react';

import { UserSettingMenu } from '~/layouts/partials/Header/UserSettingMenu';

import { MoreVertOutlinedIcon } from '~/components/Icons';
import { Avatar, IconButton, Tooltip } from '~/components/MuiComponents';

export default function UserSettings() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <>
      <Tooltip title='Open settings'>
        <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
          <Avatar
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
                fontSize: '14px',
                width: '34px',
                height: '34px',
              },
            }}
          />
          <MoreVertOutlinedIcon sx={{ display: { xs: 'block', md: 'none' } }} />
        </IconButton>
      </Tooltip>

      <UserSettingMenu
        anchorElUser={anchorElUser}
        setAnchorElUser={setAnchorElUser}
      />
    </>
  );
}
