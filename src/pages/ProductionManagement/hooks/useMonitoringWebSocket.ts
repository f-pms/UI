import { useEffect, useRef } from 'react';

import { IMessage } from '@stomp/stompjs';

import {
  FigureValuesType,
  useMonitoringStore,
} from '~/stores/useMonitoringStore';
import { useWebsocketStore } from '~/stores/useWebsocketStore';

import { TabItem } from '~/pages/ProductionManagement/helpers/diagrams';

export const useMonitoringWebsocket = (tabInfo: TabItem) => {
  const { connectingStateTrigger, unsubscribe, subscribe, isConnected } =
    useWebsocketStore((state) => state);
  const { updateFigures } = useMonitoringStore((state) => state);

  // This ref is used to keep track of the current channel.
  const channelRef = useRef<string>('');

  // This function is called when a message is received on the WebSocket.
  const subscribeCallback = (message: IMessage) => {
    const figureValues = JSON.parse(message.body) as FigureValuesType;
    updateFigures(figureValues);
  };

  // This function is used to change the channel of the WebSocket.
  // If the old and new channels are the same, it does nothing.
  // Otherwise, it unsubscribes from the old channel (if it exists) and subscribes to the new one (if it exists).
  const changeChannel = (oldChannel: string, newChannel: string) => {
    if (connectingStateTrigger && isConnected()) {
      if (oldChannel === newChannel) return;
      if (oldChannel) unsubscribe(oldChannel);
      if (newChannel) subscribe(newChannel, subscribeCallback);
    }
  };

  // This effect runs when the tabInfo changes.
  // If the channel in the tabInfo is not null and the WebSocket is connected, it changes the channel to the one in the tabInfo.
  useEffect(() => {
    if (!tabInfo.channel || !isConnected()) return;
    changeChannel(channelRef.current, tabInfo.channel);
    channelRef.current = tabInfo.channel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected(), tabInfo.channel]);
};
