export interface PublicRouteObject {
  isRestricted?: boolean;
  layout?: React.ReactNode;
}
export interface PrivateRouteObject {
  roles: string[];
  layout?: React.ReactNode;
}
