import { Link, LinkProps } from '~/libs/react-router-dom';

export function RouteLink(props: Readonly<LinkProps>) {
  return <Link style={{ textDecoration: 'none' }} {...props} />;
}
