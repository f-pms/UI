import { create } from 'zustand';
import { combine } from 'zustand/middleware';

import { Client, IMessage, StompSubscription } from '@stomp/stompjs';

type State = {
  isConnected: boolean;
  topics: Map<string, StompSubscription>;
  connect: () => void;
  disconnect: () => void;
  subscribe: (topic: string, callback: (message: IMessage) => void) => void;
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
        brokerURL: 'ws://localhost:8080/websocket',
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

      return {
        connect: () => {
          client.activate();
        },
        disconnect: () => {
          client.deactivate();
        },
        subscribe: (topic: string, callback: (message: IMessage) => void) => {
          const subscription = client.subscribe(topic, callback);
          set((state) => ({
            topics: new Map(state.topics.set(topic, subscription)),
          }));
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
