import { useState } from 'react';

import AllAlarmDrawer from '~/pages/ProductionManagement/partials/AllAlarmDrawer';

import { ArrowRightAltIcon } from '~/components/Icons';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Stack,
  Typography,
} from '~/components/MuiComponents';

export interface IAlarmBarProps {}

export default function AlarmBar() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Alert
        severity='error'
        sx={{
          '& > .MuiAlert-message': {
            flex: 1,
          },
        }}
      >
        <Stack direction='row' justifyContent='space-between' sx={{ flex: 1 }}>
          <Box>
            <AlertTitle>
              <Typography variant='body2'>Cảnh báo CosP TR42</Typography>
            </AlertTitle>
            <Typography variant='caption'>
              Thứ 5, 03/07/2024 10:52:10.865
            </Typography>
          </Box>
          <Button
            color='error'
            endIcon={<ArrowRightAltIcon />}
            size='small'
            variant='text'
            onClick={() => setOpened(!opened)}
          >
            <Typography variant='body2'>Xem tất cả</Typography>
          </Button>
        </Stack>
      </Alert>
      <AllAlarmDrawer open={opened} onClose={() => setOpened(false)} />
    </>
  );
}
