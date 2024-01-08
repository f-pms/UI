import { useEffect } from 'react';

import { useMonitoringStore } from '~/stores/useMonitoringStore';
import { useWebSocketStore } from '~/stores/useWebSocketStore';

export default (tabValue: number, channel: string) => {
  const { isConnected: isWebsocketConnected, ...ws } = useWebSocketStore(
    (state) => state,
  );
  const { updateFigures } = useMonitoringStore((state) => state);

  useEffect(() => {
    if (isWebsocketConnected) {
      ws.subscribeOnly(channel);
      updateFigures({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWebsocketConnected, tabValue]);

  useEffect(() => {
    ws.connect();

    return () => {
      ws.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...ws,
  };
};
