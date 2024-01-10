import { useEffect } from 'react';

import { useMonitoringStore } from '~/stores/useMonitoringStore';
import { useWebSocketStore } from '~/stores/useWebSocketStore';

export default (tabValue: number, channel: string) => {
  const { connectingStateTrigger, ...ws } = useWebSocketStore((state) => state);
  const { updateFigures } = useMonitoringStore((state) => state);

  useEffect(() => {
    if (connectingStateTrigger && ws.isConnected()) {
      ws.subscribeOnly(channel);
      updateFigures({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectingStateTrigger, tabValue]);

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
