import { useEffect } from 'react';

import {
  MAX_RETRIES_COUNT,
  useWebsocketStore,
} from '~/stores/useWebsocketStore';

export const useConnectWebsocket = () => {
  const { isError, retries, resetRetries, connect, disconnect, isConnected } =
    useWebsocketStore((state) => state);

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
    return () => {
      if (isConnected()) {
        disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
