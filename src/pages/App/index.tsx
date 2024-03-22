import { useEffect } from 'react';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';

import { Path } from '~/constants';
import { CssBaseline, styled } from '~/libs/mui';
import { Outlet, useLocation, useNavigate } from '~/libs/react-router-dom';

import { CustomizeThemeProvider } from '~/pages/App/context/CustomizeThemeContext';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartDataLabels,
  Title,
);

export function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == Path.ROOT) {
      navigate(Path.PRODUCTION_MONITORING);
    }
  }, [location.pathname, navigate]);

  const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    '&.notistack-MuiContent-default': {
      backgroundColor: 'transparent',
      minWidth: '380px',
      padding: 0,
      '& > .go946087465': {
        padding: 0,
      },
    },
  }));

  return (
    <SnackbarProvider
      Components={{
        default: StyledMaterialDesignContent,
      }}
      autoHideDuration={5000}
    >
      <CustomizeThemeProvider>
        <CssBaseline />
        <Outlet />
      </CustomizeThemeProvider>
    </SnackbarProvider>
  );
}
