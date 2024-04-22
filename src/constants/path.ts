export enum Path {
  // LandingPage (public)
  LANDING_PAGE = '/landing-page',

  // Auth (protected)
  SIGN_IN = '/sign-in',

  // Home
  ROOT = '/',

  // Users
  USER_LIST = '/users',
  USER_PROFILE = '/users/:userId',

  // Production
  PRODUCTION_MONITORING = '/monitoring',

  // Alarm
  ALARM = '/alarm',
  ALARM_HISTORY = '/alarm/history',
  ALARM_CONFIG = '/alarm/config',

  REPORT = '/report',
  STATISTIC_REPORT = '/report/statistic',
  HISTORICAL_REPORT = '/report/history',
  HISTORICAL_REPORT_DETAILS = '/report/history/:reportId',
  HISTORICAL_REPORT_STATISTIC = '/report/history/:reportId/statistic',

  // Errors
  NOT_FOUND = '/not-found',
  FORBIDDEN = '/forbidden',
}

export const PATH_LABEL: Record<Path, string> = {
  [Path.ROOT]: 'F-PMS',
  [Path.LANDING_PAGE]: 'Landing Page',
  [Path.SIGN_IN]: 'Đăng nhập',
  [Path.NOT_FOUND]: 'Not Found',
  [Path.FORBIDDEN]: 'Forbidden',
  [Path.USER_LIST]: 'Quản lý người dùng',
  [Path.USER_PROFILE]: 'Thông tin người dùng',
  [Path.PRODUCTION_MONITORING]: 'Giám Sát',
  [Path.ALARM]: 'Cảnh báo',
  [Path.ALARM_HISTORY]: 'Lịch sử cảnh báo',
  [Path.ALARM_CONFIG]: 'Cấu hình cảnh báo',
  [Path.REPORT]: 'Báo cáo',
  [Path.STATISTIC_REPORT]: 'Báo cáo thống kê',
  [Path.HISTORICAL_REPORT]: 'Lịch sử báo cáo',
  [Path.HISTORICAL_REPORT_DETAILS]: 'Chi tiết báo cáo',
  [Path.HISTORICAL_REPORT_STATISTIC]: 'Thống kê',
};
