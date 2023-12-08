import { Path } from '~/constants';
import { HeaderOnlyLayout } from '~/layouts';
import { RouteObject } from '~/libs/react-router-dom';
import { PublicRouteObject } from '~/types';

import { SignInPage, SignUpPage } from '~/pages/Auth';
import { ForbiddenPage, NotFoundPage } from '~/pages/Errors';
import { LandingPage } from '~/pages/LandingPage';

export const publicRoutes: (PublicRouteObject & RouteObject)[] = [
  {
    path: Path.LANDING_PAGE,
    element: <LandingPage />,
    layout: <HeaderOnlyLayout />,
  },
  {
    path: Path.SIGN_IN,
    element: <SignInPage />,
    isRestricted: true,
  },
  {
    path: Path.SIGN_UP,
    element: <SignUpPage />,
    isRestricted: true,
  },
  {
    path: Path.FORBIDDEN,
    element: <ForbiddenPage />,
  },
  {
    path: Path.NOT_FOUND,
    element: <NotFoundPage />,
  },
];
