import { useEffect, useRef } from 'react';

import { IMessage } from '@stomp/stompjs';

import {
  FigureValuesType,
  useMonitoringStore,
} from '~/stores/useMonitoringStore';
import {
  MAX_RETRIES_COUNT,
  useWebsocketStore,
} from '~/stores/useWebsocketStore';

import useBlueprints from '~/pages/ProductionManagement/hooks/useBlueprints';

export const useMonitoringWebsocket = () => {
  const {
    connectingStateTrigger,
    isError,
    retries,
    resetRetries,
    connect,
    disconnect,
    unsubscribe,
    subscribe,
    isConnected,
  } = useWebsocketStore((state) => state);
  const { updateFigures } = useMonitoringStore((state) => state);

  const subscribeCallback = (message: IMessage) => {
    const figureValues = JSON.parse(message.body) as FigureValuesType;
    updateFigures(figureValues);
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
    if (!isConnected()) {
      connect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeChannel = (oldChannel: string, newChannel: string) => {
    if (connectingStateTrigger && isConnected()) {
      if (oldChannel === newChannel) return;
      if (oldChannel) unsubscribe(oldChannel);
      if (newChannel) subscribe(newChannel, subscribeCallback);
    }
  };

  return {
    changeChannel,
  };
};
