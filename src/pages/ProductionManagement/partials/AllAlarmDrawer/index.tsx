import { Box, Drawer } from '~/components/MuiComponents';

export interface IAllAlarmDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function AllAlarmDrawer(props: IAllAlarmDrawerProps) {
  const { open, onClose } = props;
  return (
    <Drawer anchor='right' open={open} onClose={onClose}>
      <Box sx={{ width: 340 }}>Hello</Box>
    </Drawer>
  );
}
