import React from 'react';
import ReactDOM from 'react-dom/client';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppRouter from '~/router';

import { AuthProvider } from '~/pages/Auth/context/AuthContext';

import './index.css';
const queryClient = new QueryClient();

async function enableMocking() {
  if (import.meta.env.VITE_NODE_ENV !== 'mocking') {
    return;
  }

  const { worker } = await import('~/libs/mock-server-worker');

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </QueryClientProvider>
      </LocalizationProvider>
    </React.StrictMode>,
  );
});
