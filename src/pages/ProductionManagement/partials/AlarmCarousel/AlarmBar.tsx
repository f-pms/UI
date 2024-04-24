import { useState } from 'react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import _ from 'lodash';

import { AlertColor } from '@mui/material';

import { ColorScheme } from '~/constants';
import { AlarmHistory } from '~/types';

import { getBlueprintName } from '~/pages/ProductionManagement/helpers/getBlueprintName';
import { useAlarmSeverity } from '~/pages/ProductionManagement/hooks/useAlarmSeverity';
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
  const { color, icon } = useAlarmSeverity(alarm.condition.severity);

  return (
    <>
      <Alert
        icon={icon}
        severity={color as AlertColor}
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
                <b>
                  {`${getBlueprintName(alarm.blueprint?.name)} - ${
                    alarm.condition.sensorConfiguration.address
                  }: `}
                </b>
                {alarm.condition.actions.length
                  ? alarm.condition.actions[0]?.message
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
            color={color as ColorScheme}
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
