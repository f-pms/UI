import {
  FormatIndentDecreaseOutlinedIcon,
  FormatIndentIncreaseOutlinedIcon,
  MenuOutlinedIcon,
} from '~/components/Icons';
import { IconButton } from '~/components/MuiComponents';

export interface IToggleSidebarButtonProps {
  broken: boolean;
  onToggled: () => void;
  collapsed: boolean;
  onCollapsed: () => void;
}

export default function ToggleSidebarButton(
  props: Readonly<IToggleSidebarButtonProps>,
) {
  const { broken, onToggled, collapsed, onCollapsed } = props;
  const handleSidebar = () => {
    if (broken) {
      onToggled();
    } else {
      onCollapsed();
    }
  };

  return (
    <IconButton size='small' sx={{ mr: 1 }} onClick={handleSidebar}>
      {broken ? (
        <MenuOutlinedIcon />
      ) : collapsed ? (
        <FormatIndentIncreaseOutlinedIcon sx={{ fontSize: '22px' }} />
      ) : (
        <FormatIndentDecreaseOutlinedIcon sx={{ fontSize: '22px' }} />
      )}
    </IconButton>
  );
}
