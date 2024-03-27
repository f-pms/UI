import { NonIndexRouteObject } from 'react-router-dom';

export interface PublicRouteObject {
  isRestricted?: boolean;
  layout?: React.ReactNode;
}
export interface PrivateRouteObject {
  roles?: string[];
  layout?: React.ReactNode;
  children?: (PrivateRouteObject & PrivateRouteObject & NonIndexRouteObject)[];
}
