import { useState } from 'react';

import { useTheme } from '@mui/material';

import { SwipeableViews } from '~/libs/react-swipeable-views';
import { FigureInfoType } from '~/services/blueprint/queries/useQueryBlueprintById';

import AddressUpdateAdvanceForm from '~/pages/ProductionManagement/partials/AddressUpdateForm/AddressUpdateAdvanceForm';
import AddressUpdateBasicForm from '~/pages/ProductionManagement/partials/AddressUpdateForm/AddressUpdateBasicForm';

import { CustomTabPanel } from '~/components/CustomTabPanel';
import { AppBar, Box, Dialog, Tab, Tabs } from '~/components/MuiComponents';

interface AddressUpdateFormProps {
  figureInfo: FigureInfoType | undefined;
  open: boolean;
  handleClose: () => void;
}

export default function AddressUpdateForm({
  figureInfo,
  open,
  handleClose,
}: AddressUpdateFormProps) {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setTabIndex(index);
  };

  const handleCloseDialog = () => {
    setTabIndex(0);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <Box width={400}>
        <AppBar position='static'>
          <Tabs
            aria-label='full width tabs example'
            indicatorColor='secondary'
            textColor='inherit'
            value={tabIndex}
            variant='fullWidth'
            onChange={handleChange}
          >
            <Tab label='Cơ bản' {...a11yProps(0)} />
            <Tab label='Nâng cao' {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={tabIndex}
          onChangeIndex={handleChangeIndex}
        >
          <CustomTabPanel dir={theme.direction} index={0} value={tabIndex}>
            <AddressUpdateBasicForm
              figureInfo={figureInfo}
              handleClose={handleClose}
            />
          </CustomTabPanel>
          <CustomTabPanel dir={theme.direction} index={1} value={tabIndex}>
            <AddressUpdateAdvanceForm
              figureInfo={figureInfo}
              handleClose={handleClose}
            />
          </CustomTabPanel>
        </SwipeableViews>
      </Box>
    </Dialog>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
