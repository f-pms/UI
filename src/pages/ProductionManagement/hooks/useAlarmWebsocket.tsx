import { useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';

import { IMessage } from '@stomp/stompjs';

import { useQueryAlarmHistories } from '~/services/alarm-history/queries/useQueryAlarmHistories';
import { useWebsocketStore } from '~/stores/useWebsocketStore';
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
  const { connectingStateTrigger, isConnected, subscribe } =
    useWebsocketStore();
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
    if (connectingStateTrigger && isConnected()) {
      subscribe('alarm', subscribeCallback);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectingStateTrigger, isConnected]);
};
