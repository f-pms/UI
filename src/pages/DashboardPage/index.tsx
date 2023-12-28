import { useState } from 'react';

import { Button } from '@mui/material';

import { Station } from '~/constants/station';
import { useWebSocketStore } from '~/stores/useWebSocketStore';

export function DashboardPage() {
  const ws = useWebSocketStore((state) => state);
  const [data, setData] = useState<{
    temperature: number;
    isConnected: boolean;
    voltage: number;
  }>();

  /* useEffect(() => {
    if (!ws.isConnected) {
      ws.connect();
    }
    
    return () => {
      ws.unsubscribe('/topic/tr30');
    };
  }, []); */

  return (
    <div>
      <h1>Dashboard Page</h1>
      <Button
        variant='contained'
        onClick={() => {
          ws.subscribe(Station.TR30, (message) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const body = JSON.parse(message.body);
            setData(body);
          });
        }}
      >
        Subscribe
      </Button>
      <Button
        sx={{ marginLeft: '20px' }}
        variant='contained'
        onClick={() => {
          ws.unsubscribe(Station.TR30);
        }}
      >
        Unsubscribe
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
