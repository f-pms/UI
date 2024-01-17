import { useState } from 'react';

import DrawerHeader from '~/pages/ProductionManagement/partials/AllAlarmDrawer/DrawerHeader';
import DrawerTabs from '~/pages/ProductionManagement/partials/AllAlarmDrawer/DrawerTabs';
import TabPanel from '~/pages/ProductionManagement/partials/AllAlarmDrawer/TabPanel';

import { Box, Drawer } from '~/components/MuiComponents';

export interface IAllAlarmDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function AllAlarmDrawer(props: IAllAlarmDrawerProps) {
  const { open, onClose } = props;
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <Drawer anchor='right' open={open} onClose={onClose}>
      <Box sx={{ width: 432 }}>
        <DrawerHeader onClose={onClose} />
        <DrawerTabs handleChange={handleChange} tabValue={tabValue} />
        <TabPanel tabValue={tabValue} />
      </Box>
    </Drawer>
  );
}
