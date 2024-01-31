import { useEffect } from 'react';

import { useMonitoringStore } from '~/stores/useMonitoringStore';
import {
  MAX_RETRIES_COUNT,
  useMonitoringWebSocketStore,
} from '~/stores/useMonitoringWebSocketStore';

export default (tabValue: number, channel: string) => {
  const { connectingStateTrigger, isError, retries, resetRetries, ...ws } =
    useMonitoringWebSocketStore((state) => state);
  const { updateFigures } = useMonitoringStore((state) => state);

  useEffect(() => {
    if (isError && retries > MAX_RETRIES_COUNT) {
      ws.disconnect();
      resetRetries();
    } else if (!isError) {
      resetRetries();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, retries]);

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
};
