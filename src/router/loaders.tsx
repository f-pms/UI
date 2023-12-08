import { Path } from '~/constants/path';
import { Role } from '~/constants/role';
import { jwtDecode } from '~/libs/jwt-decode';
import { redirect } from '~/libs/react-router-dom';
import { AccessTokenDecoded } from '~/types';
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
    return redirect(Path.FORBIDDEN);
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
    if (user.role === Role.ADMIN) return redirect(Path.DASHBOARD);
    if (user.role === Role.USER) return redirect(Path.HOME);
  }

  // If the user is authorized, return null
  return null;
};
