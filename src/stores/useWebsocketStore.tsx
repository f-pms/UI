import { create } from 'zustand';
import { combine } from 'zustand/middleware';

import { Client, IFrame, IMessage, StompSubscription } from '@stomp/stompjs';

import { storage } from '~/utils';

const websocketUrl = import.meta.env.VITE_WEBSOCKET_URL as string;
export const MAX_RETRIES_COUNT = 6;

type State = {
  isReady: boolean;
  isError: boolean;
  topics: Map<string, StompSubscription>;
  connectingStateTrigger: boolean;
  retries: number;
  resetRetries: () => void;
  isConnected: () => boolean;
  connect: () => void;
  disconnect: () => void;
  reset: () => void;
  subscribe: (
    topic: string,
    subscribeCallback: (message: IMessage) => void,
  ) => void;
  isSubscribed: (topic: string) => boolean;
  unsubscribe: (topic: string) => void;
  unsubscribeAll: () => void;
};

type GlobalThis = typeof globalThis & {
  client: Client;
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
    const handleRetry = () => {
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
    };

    const onConnect = () => {
      set({
        ...defaultStoreValue,
        connectingStateTrigger: true,
      });
    };

    const onStompError = (error: IFrame) => {
      console.error(
        'Websocket connection is corrupted!',
        error.headers.message,
      );
      handleRetry();
    };

    const onWebSocketError = (error: Error) => {
      console.error('Websocket connection cannot be established!', error);
      handleRetry();
    };

    const init = () => {
      const token = storage.get('TOKEN');
      return new Client({
        brokerURL: websocketUrl,
        reconnectDelay: 3000,
        connectHeaders: {
          Authorization: `Bearer ${token}`,
        },
        onConnect,
        onStompError,
        onWebSocketError,
        onDisconnect: () => {
          set(defaultStoreValue);
        },
      });
    };

    (globalThis as GlobalThis).client = init();

    return {
      resetRetries: () => {
        set({ retries: 0 });
      },
      isConnected: () => {
        return (globalThis as GlobalThis).client.connected;
      },
      connect: () => {
        (globalThis as GlobalThis).client.activate();
      },
      disconnect: () => {
        (globalThis as GlobalThis).client.deactivate();
      },
      reset: () => {
        (globalThis as GlobalThis).client.deactivate();
        (globalThis as GlobalThis).client = init();
        (globalThis as GlobalThis).client.activate();
      },
      subscribe: (
        topic: string,
        subscribeCallback: (message: IMessage) => void,
      ) => {
        if (!(globalThis as GlobalThis).client.connected) {
          console.error('Websocket is not connected!');
          return;
        }

        const subscription = (globalThis as GlobalThis).client.subscribe(
          '/topic/' + topic,
          subscribeCallback,
        );

        set((_) => {
          return {
            topics: new Map([...get().topics, [topic, subscription]]),
            isReady: true,
          };
        });
      },
      isSubscribed: (topic: string) => {
        const subscription = get().topics.get(topic);
        return !!subscription;
      },
      unsubscribe: (topic: string) => {
        const subscription = get().topics.get(topic);
        if (subscription) {
          subscription.unsubscribe();
          set((_) => {
            const topics = new Map(get().topics);
            topics.delete(topic);
            return { topics };
          });
        }
      },
      unsubscribeAll: () => {
        get().topics.forEach((subscription) => {
          subscription.unsubscribe();
        });
        set({
          topics: new Map(),
          isReady: false,
        });
      },
    };
  }),
);
