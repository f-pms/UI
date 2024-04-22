import { useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';

import { IMessage } from '@stomp/stompjs';

import { useQueryAlarmHistories } from '~/services/alarm-history/queries/useQueryAlarmHistories';
import { useWebsocketStore } from '~/stores/useWebsocketStore';
import { AlarmHistoryStatus, AlarmSeverity, AlarmWebsocket } from '~/types';

import AlarmToast from '~/pages/ProductionManagement/partials/AlarmToast';

export const useAlarmWebsocket = () => {
  // useQueryAlarmHistories is a custom hook for fetching alarm histories with a specific status
  const { refetch } = useQueryAlarmHistories(
    {
      status: AlarmHistoryStatus.SENT,
    },
    {
      enabled: false,
    },
  );
  const { connectingStateTrigger, isConnected, subscribe } =
    useWebsocketStore();

  // subscribeCallback is a function that will be called when a message is received from the WebSocket
  const subscribeCallback = (message: IMessage) => {
    // Refetch the alarm histories
    refetch();

    // If the alarm event is solved, don't show a toast notification, just refetch the data
    const body = JSON.parse(message.body) as AlarmWebsocket;
    if (Object.keys(body).length === 0) return;

    // Show a toast notification with the alarm details
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
        autoHideDuration: 10000,
      },
    );
  };

  // useEffect hook to subscribe to the 'alarm' topic on the WebSocket when the connection state changes
  useEffect(() => {
    if (connectingStateTrigger && isConnected()) {
      subscribe('alarm', subscribeCallback);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectingStateTrigger, isConnected]);
};
