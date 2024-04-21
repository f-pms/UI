import { toast } from 'react-toastify';

import { Path } from '~/constants/path';
import { jwtDecode } from '~/libs/jwt-decode';
import { redirect } from '~/libs/react-router-dom';
import { AccessTokenDecoded, Role } from '~/types';
import { storage } from '~/utils';

// This function is used to check if the user is authorized to access a private route
export const privateRouteLoader = (roles: string[], pathname = '') => {
  const token = storage.get('TOKEN');

  // If there is no token, redirect the user to the sign in page
  if (!token) {
    return redirect(`${Path.SIGN_IN}?callback=${pathname}`);
  }

  // Decode the token to get the user information
  const user: AccessTokenDecoded = jwtDecode(token);
  // If the user is not authorized to access the route, redirect them to the forbidden page
  if (user && !roles.includes(user.role)) {
    toast.info('Trang không tồn tại.');
    return redirect(Path.PRODUCTION_MONITORING);
  }

  // If the user is authorized, return null
  return null;
};

// This function is used to check if the user is authorized to access a public route
export const publicRouteLoader = (isRestricted = false) => {
  const token = storage.get('TOKEN');

  // If the token exists and the route is restricted, redirect the user to the appropriate page based on their role
  if (token && isRestricted) {
    const user: AccessTokenDecoded = jwtDecode(token);
    if (user.role === Role.ADMIN) return redirect(Path.PRODUCTION_MONITORING);
    if (user.role === Role.USER) return redirect(Path.PRODUCTION_MONITORING);
  }

  // If the user is authorized, return null
  return null;
};
