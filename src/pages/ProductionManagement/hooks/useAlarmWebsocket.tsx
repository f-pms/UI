import { useEffect, useState } from 'react';
import { isError } from 'lodash';
import { enqueueSnackbar } from 'notistack';

import { IMessage } from '@stomp/stompjs';

import {
  MAX_RETRIES_COUNT,
  useWebsocketStore,
} from '~/stores/useWebsocketStore';
import { AlarmSeverity } from '~/types';

import AlarmToast from '~/pages/ProductionManagement/partials/AlarmToast';

export const useAlarmWebsocket = () => {
  const { subscribeOnly, ...ws } = useWebsocketStore();
  const [alarmMessage, setAlarmMessage] = useState<string>();

  const subscribeCallback = (message: IMessage) => {
    enqueueSnackbar(
      <AlarmToast
        alarm={{
          id: 1,
          severity: AlarmSeverity.URGENT,
          name: message.command,
          time: new Date(),
        }}
      />,
      {
        preventDuplicate: false,
      },
    );
  };

  const subscribeOnlyAlarm = () => {
    subscribeOnly('alarm', subscribeCallback);
  };

  useEffect(() => {
    if (ws.isError && ws.retries > MAX_RETRIES_COUNT) {
      ws.disconnect();
      ws.resetRetries();
    } else if (!isError) {
      ws.resetRetries();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, ws.retries]);

  useEffect(() => {
    if (ws.connectingStateTrigger && ws.isConnected()) {
      subscribeOnlyAlarm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ws.isConnected, ws.connectingStateTrigger]);

  useEffect(() => {
    ws.connect();
    setAlarmMessage('');

    return () => {
      ws.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    alarmMessage,
    subscribeOnlyAlarm,
    ...ws,
  };
};
