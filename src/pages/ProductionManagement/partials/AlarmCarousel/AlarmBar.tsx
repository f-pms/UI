import { useState } from 'react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

import { AlarmHistory } from '~/types';

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

export interface IAlarmBarProps {
  alarm: AlarmHistory;
}

export default function AlarmBar({ alarm }: IAlarmBarProps) {
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
              <Typography variant='body2'>
                {alarm.alarmCondition.actions.length
                  ? alarm.alarmCondition.actions[0]?.message
                  : ''}
              </Typography>
            </AlertTitle>
            <Typography variant='caption'>
              {format(
                new Date(alarm.triggeredAt),
                'EEEE, dd/MM/yyyy HH:mm:ss',
                {
                  locale: vi,
                },
              )}
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
