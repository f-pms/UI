import { create } from 'zustand';

import { Client, StompSubscription } from '@stomp/stompjs';

type State = {
  isConnected: boolean;
  client: Client | null;
  topicRef: StompSubscription | null;
  setClient: (client: Client | null) => void;
  setTopicRef: (topicRef: StompSubscription | null) => void;
};

export const useWebSocketStore = create<State>((set) => ({
  isConnected: false,
  client: null,
  topicRef: null,
  setClient: (client) => set({ client }),
  setTopicRef: (topicRef) => set({ topicRef }),
}));

export function useWebSocket() {
  const client = useWebSocketStore((state) => state.client);
  const setClient = useWebSocketStore((state) => state.setClient);

  if (!client) {
    const newClient = new Client({
      brokerURL: 'ws://localhost:8080/websocket',
    });

    setClient(newClient);
  }

  return { client };
}
