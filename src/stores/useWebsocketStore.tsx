import { create } from 'zustand';
import { combine } from 'zustand/middleware';

import { Client, IMessage, StompSubscription } from '@stomp/stompjs';
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
  subscribeOnly: (
    topic: string,
    subscribeCallback: (message: IMessage) => void,
  ) => void;
  isSubscribed: (topic: string) => boolean;
};

const defaultStoreValue = {
  topics: new Map<string, StompSubscription>(),
  connectingStateTrigger: false,
  isReady: false,
  isError: false,
  retries: 0,
};

export const useWebsocketStore = create<State>(
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
      onStompError: (error) => {
        console.error('Websocket connection is corrupted!', error.headers.message);
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
        console.error('Websocket connection cannot be established!', error);
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
      subscribeOnly: (
        topic: string,
        subscribeCallback: (message: IMessage) => void,
      ) => {
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
