import { useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';

import { IMessage } from '@stomp/stompjs';

import { useQueryAlarmHistories } from '~/services/alarm-history/queries/useQueryAlarmHistories';
import {
  MAX_RETRIES_COUNT,
  useWebsocketStore,
} from '~/stores/useWebsocketStore';
import { AlarmHistoryStatus, AlarmSeverity, AlarmWebsocket } from '~/types';

import AlarmToast from '~/pages/ProductionManagement/partials/AlarmToast';

export const useAlarmWebsocket = () => {
  const { refetch } = useQueryAlarmHistories(
    {
      status: AlarmHistoryStatus.SENT,
    },
    {
      enabled: false,
    },
  );
  const {
    retries,
    isError,
    connectingStateTrigger,
    connect,
    disconnect,
    isConnected,
    resetRetries,
    subscribe,
    unsubscribe,
  } = useWebsocketStore();

  const subscribeCallback = (message: IMessage) => {
    refetch();
    const body = JSON.parse(message.body) as AlarmWebsocket;

    // solved alarm event will not show toast, only refetch data
    if (Object.keys(body).length === 0) return;

    enqueueSnackbar(
      <AlarmToast
        alarm={{
          severity: AlarmSeverity.URGENT,
          message: body.message,
          triggeredAt: body.triggeredAt,
        }}
      />,
      {
        preventDuplicate: false,
      },
    );
  };

  useEffect(() => {
    if (isError && retries > MAX_RETRIES_COUNT) {
      disconnect();
      resetRetries();
    } else if (!isError) {
      resetRetries();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, retries]);

  useEffect(() => {
    if (connectingStateTrigger && isConnected()) {
      subscribe('alarm', subscribeCallback);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectingStateTrigger, isConnected]);

  useEffect(() => {
    if (!isConnected()) {
      connect();
    }

    return () => {
      unsubscribe('alarm');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
