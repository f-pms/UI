import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import _ from 'lodash';

import { ColorScheme } from '~/constants';
import { AlarmHistory, AlarmSeverity } from '~/types/alarm';

import { getBlueprintName } from '~/pages/ProductionManagement/helpers/getBlueprintName';
import { useAlarmSeverity } from '~/pages/ProductionManagement/hooks/useAlarmSeverity';

import { SoftChip } from '~/components';
import {
  ErrorOutlineOutlinedIcon,
  NotificationImportantOutlinedIcon,
  ReportProblemOutlinedIcon,
} from '~/components/Icons';
import {
  Box,
  Divider,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '~/components/MuiComponents';

export interface IAlarmListItemProps {
  alarm: AlarmHistory;
}

export default function AlarmListItem({ alarm }: IAlarmListItemProps) {
  const { color, icon } = useAlarmSeverity(alarm.condition.severity);

  return (
    <>
      <ListItemButton>
        <ListItemAvatar>
          <SoftChip color={color as ColorScheme} icon={icon} />
        </ListItemAvatar>
        <ListItemText
          primary={`${getBlueprintName(alarm.blueprint?.name)} - ${
            alarm.condition.sensorConfiguration.address
          }`}
          primaryTypographyProps={{ fontWeight: 'bold' }}
          secondary={
            <Box>
              <Typography variant='body2'>
                {alarm.condition.actions.length
                  ? alarm.condition.actions[0]?.message
                  : ''}
              </Typography>
              <Typography
                align='right'
                component='p'
                fontStyle='italic'
                variant='caption'
              >
                {format(
                  new Date(alarm.triggeredAt),
                  'EEEE, dd/MM/yyyy HH:mm:ss',
                  {
                    locale: vi,
                  },
                )}
              </Typography>
            </Box>
          }
        />
      </ListItemButton>
      <Divider variant='fullWidth' />
    </>
  );
}
