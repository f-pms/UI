import { create } from 'zustand';
import { combine } from 'zustand/middleware';

import { Client, IMessage, StompSubscription } from '@stomp/stompjs';

import {
  FigureValuesType,
  useMonitoringStore,
} from '~/stores/useMonitoringStore';
import { storage } from '~/utils';

const websocketUrl = import.meta.env.VITE_WEBSOCKET_URL as string;
export const MAX_RETRIES_COUNT = 6;

type State = {
  topics: Map<string, StompSubscription>;
  connectingStateTrigger: boolean;
  isReady: boolean;
  isError: boolean;
  retries: number;
  resetRetries: () => void;
  isConnected: () => boolean;
  connect: () => void;
  disconnect: () => void;
  subscribeOnly: (topic: string) => void;
  isSubscribed: (topic: string) => boolean;
};

const defaultStoreValue = {
  topics: new Map<string, StompSubscription>(),
  connectingStateTrigger: false,
  isReady: false,
  isError: false,
  retries: 0,
};

export const useMonitoringWebSocketStore = create<State>(
  combine(defaultStoreValue, (set, get) => {
    const token = storage.get('TOKEN');

    const client = new Client({
      brokerURL: websocketUrl,
      reconnectDelay: 4000,
      connectHeaders:{
        "Authorization":`Bearer ${token}`
      },
      onConnect: () => {
        set({
          ...defaultStoreValue,
          connectingStateTrigger: true,
        });
      },
      onStompError: () => {
        console.error('Websocket connection is corrupted!');
        if (get().retries + 1 > MAX_RETRIES_COUNT) {
          set({
            connectingStateTrigger: false,
            isReady: false,
            isError: true,
          });
        } else {
          set({
            connectingStateTrigger: false,
            isReady: false,
            retries: get().retries + 1,
          });
        }
      },
      onWebSocketError: (error) => {
        console.error('Websocket connection cannot be established!', error.headers.message);
        if (get().retries + 1 > MAX_RETRIES_COUNT) {
          set({
            connectingStateTrigger: false,
            isReady: false,
            isError: true,
          });
        } else {
          set({
            connectingStateTrigger: false,
            isReady: false,
            retries: get().retries + 1,
          });
        }
      },
      onDisconnect: () => {
        set(defaultStoreValue);
      },
    });

    const updateMonitoringStore = useMonitoringStore.getState().updateFigures;
    const subscribeCallback = (message: IMessage) => {
      const figureValues = JSON.parse(message.body) as FigureValuesType;
      updateMonitoringStore(figureValues);
    };

    return {
      resetRetries: () => {
        set({ retries: 0 });
      },
      isConnected: () => {
        return client.connected;
      },
      connect: () => {
        client.activate();
      },
      disconnect: () => {
        client.deactivate();
      },
      subscribeOnly: (topic: string) => {
        set({ isReady: false });

        const topics = get().topics;
        topics.forEach((topic) => {
          topic.unsubscribe();
        });

        const subscription = client.subscribe(
          '/topic/' + topic,
          subscribeCallback,
        );

        set((_) => {
          const temp = new Map();
          return {
            topics: new Map(temp.set(topic, subscription)),
            isReady: true,
          };
        });
      },
      isSubscribed: (topic: string) => {
        const subscription = get().topics.get(topic);
        return !!subscription;
      },
    };
  }),
);
