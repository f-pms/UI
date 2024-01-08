import { create } from 'zustand';
import { combine } from 'zustand/middleware';

import { Client, IMessage, StompSubscription } from '@stomp/stompjs';

import {
  FigureValuesType,
  useMonitoringStore,
} from '~/stores/useMonitoringStore';

const websocketUrl = import.meta.env.VITE_WEBSOCKET_URL as string;

type State = {
  isConnected: boolean;
  topics: Map<string, StompSubscription>;
  connect: () => void;
  disconnect: () => void;
  subscribe: (topic: string) => void;
  subscribeOnly: (topic: string) => void;
  isSubscribed: (topic: string) => boolean;
  unsubscribe: (topic: string) => void;
};

export const useWebSocketStore = create<State>(
  combine(
    {
      isConnected: false,
      topics: new Map<string, StompSubscription>(),
    },
    (set, get) => {
      const client = new Client({
        brokerURL: websocketUrl,
        onConnect: () => {
          set({ isConnected: true });
        },
        onDisconnect: () => {
          set({
            isConnected: false,
            topics: new Map<string, StompSubscription>(),
          });
        },
      });

      const updateMonitoringStore = useMonitoringStore.getState().updateFigures;
      const subscribeCallback = (message: IMessage) => {
        const figureValues = JSON.parse(message.body) as FigureValuesType;
        updateMonitoringStore(figureValues);
      };

      return {
        connect: () => {
          client.activate();
        },
        disconnect: () => {
          client.deactivate();
        },
        subscribe: (topic: string) => {
          const subscription = client.subscribe(
            '/topic/' + topic,
            subscribeCallback,
          );
          set((state) => ({
            topics: new Map(state.topics.set(topic, subscription)),
          }));
        },
        subscribeOnly: (topic: string) => {
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
            };
          });
        },
        isSubscribed: (topic: string) => {
          const subscription = get().topics.get(topic);
          return !!subscription;
        },
        unsubscribe: (topic: string) => {
          const subscription = get().topics.get(topic);
          if (!subscription) return;

          subscription.unsubscribe();
          set((state) => {
            const topics = new Map(state.topics);
            topics.delete(topic);
            return { topics };
          });
        },
      };
    },
  ),
);
