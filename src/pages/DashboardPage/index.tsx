import { useRef, useState } from 'react';

import { Button } from '@mui/material';
import { Client, StompSubscription } from '@stomp/stompjs';

export function DashboardPage() {
  const [data, setData] = useState({
    temperature: null,
    isConnected: null,
    voltage: null,
  });

  const subscriptionRef = useRef<StompSubscription | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const client = new Client({
    brokerURL: 'ws://localhost:8080/websocket',
    onConnect: () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      subscriptionRef.current = client.subscribe('/topic/tr30', (message) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const body = JSON.parse(message.body);
        // console.log(`Received: ${message.body}`);
        setData(body);
      });

      // client.publish({ destination: '/topic/test01', body: 'First Message' });
    },
  });

  const unsubscribe = () => {
    if (subscriptionRef.current) {
      subscriptionRef.current.unsubscribe();
      subscriptionRef.current = null;
    }
    client.deactivate();
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
      <Button variant='contained' onClick={() => client.activate()}>
        Connect
      </Button>
      <Button
        sx={{ marginLeft: '20px' }}
        variant='contained'
        onClick={() => {
          unsubscribe();
        }}
      >
        Disconnect
      </Button>

      <h2>TR30 Station Data</h2>
      {data && (
        <div>
          <p>Temperature: {data.temperature}</p>
          <p>Is Connected: {data.isConnected ? 'Yes' : 'No'}</p>
          <p>Voltage: {data.voltage}</p>
        </div>
      )}
    </div>
  );
}
