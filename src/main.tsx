import ReactDOM from 'react-dom/client';
import { Slide, ToastContainer } from 'react-toastify';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppRouter from '~/router';

import { AuthProvider } from '~/pages/Auth/context/AuthContext';

import 'react-toastify/dist/ReactToastify.css';
const queryClient = new QueryClient();

async function enableMocking() {
  if (import.meta.env.VITE_NODE_ENV !== 'mocking') {
    return;
  }
}

enableMocking().then(() => {
  return ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </QueryClientProvider>
      </LocalizationProvider>
      <ToastContainer position='bottom-right' transition={Slide} />
    </>,
  );
});
