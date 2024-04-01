import { Path, PATH_LABEL } from '~/constants';

import {
  ExitToAppOutlinedIcon,
  PersonOutlineOutlinedIcon,
  SettingsSuggestOutlinedIcon,
} from '~/components/Icons';

export type SettingItem = {
  label: string;
  path?: string;
  icon?: React.ReactNode;
};
export const SETTING_ITEMS = [
  {
    label: PATH_LABEL[Path.USER_PROFILE],
    path: Path.USER_PROFILE,
    icon: <PersonOutlineOutlinedIcon fontSize='small' />,
  },
  {
    label: 'Tùy chỉnh giao diện',
    icon: <SettingsSuggestOutlinedIcon fontSize='small' />,
  },
  {
    label: 'Đăng xuất',
    icon: <ExitToAppOutlinedIcon fontSize='small' />,
  },
];
