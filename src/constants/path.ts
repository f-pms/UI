export enum Path {
  // LandingPage (public)
  LANDING_PAGE = '/landing-page',

  // Auth (protected)
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',

  // Home
  ROOT = '/',
  HOME = '/home',
  DASHBOARD = '/dashboard',
  COMPONENTS = '/components',
  COMPONENTS_CALENDAR = '/components/calendar',
  COMPONENTS_CHART = '/components/chart',
  COMPONENTS_TABLE = '/components/table',
  USER_LIST = '/user-list',
  USER_PROFILE = '/user-profile',

  // Production
  PRODUCTION = '/production',
  PRODUCTION_MONITORING = '/production/monitoring',

  // Errors
  NOT_FOUND = '/not-found',
  FORBIDDEN = '/forbidden',
}

export const PATH_LABEL: Record<Path, string> = {
  [Path.ROOT]: 'F-PMS',
  [Path.LANDING_PAGE]: 'Landing Page',
  [Path.SIGN_IN]: 'Sign In',
  [Path.SIGN_UP]: 'Sign Up',
  [Path.HOME]: 'Home',
  [Path.DASHBOARD]: 'Dashboard',
  [Path.COMPONENTS]: 'Components',
  [Path.COMPONENTS_CALENDAR]: 'Calendar',
  [Path.COMPONENTS_TABLE]: 'Table',
  [Path.COMPONENTS_CHART]: 'Chart',
  [Path.NOT_FOUND]: 'Not Found',
  [Path.FORBIDDEN]: 'Forbidden',
  [Path.USER_LIST]: 'User List',
  [Path.USER_PROFILE]: 'User Profile',
  [Path.PRODUCTION]: 'Quản lý sản xuất',
  [Path.PRODUCTION_MONITORING]: 'Giám sát',
};
