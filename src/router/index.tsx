import { Path } from '~/constants';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from '~/libs/react-router-dom';
import { layout } from '~/router/layout';
import { privateRouteLoader, publicRouteLoader } from '~/router/loaders';
import { privateRoutes } from '~/router/routes/privateRoutes';
import { publicRoutes } from '~/router/routes/publicRoutes';

import { App } from '~/pages/App';
import { FallbackPage } from '~/pages/Errors';

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: Path.ROOT,
      element: <App />,
      ErrorBoundary: FallbackPage,
      children: [
        ...publicRoutes.map((route) => ({
          ...route,
          loader: () => publicRouteLoader(route.isRestricted),
          element: layout(route.layout, route.element),
        })),
        ...privateRoutes.map((route) => ({
          ...route,
          loader: () => privateRouteLoader(route.roles, route.path),
          element: layout(route.layout, route.element),
        })),
        {
          path: '*',
          loader: () => redirect(Path.NOT_FOUND),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
