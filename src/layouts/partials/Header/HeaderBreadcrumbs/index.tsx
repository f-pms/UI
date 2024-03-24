import { Path, PATH_LABEL } from '~/constants';
import { useTheme } from '~/libs/mui';
import { Params, useLocation, useMatches } from '~/libs/react-router-dom';

import { NavigateNextIcon } from '~/components/Icons';
import { Breadcrumbs, Link, Typography } from '~/components/MuiComponents';

export default function HeaderBreadcrumbs() {
  const matches = useMatches();
  const location = useLocation();
  const theme = useTheme();

  const params = matches[0].params;
  const paths = Object.keys(PATH_LABEL).filter((path) =>
    path.includes(matches[1].pathname),
  );

  function buildURL(baseURL: string, params: Params<string>) {
    return Object.entries(params).reduce((url, [key, value]) => {
      return url.replace(`:${key}`, value ?? '');
    }, baseURL);
  }
  const pathWithLabels = paths.map((path) => ({
    label: PATH_LABEL[path as Path],
    pathname: Object.keys(params) ? buildURL(path, params) : path,
  }));

  let path = '';
  const pathSegments = location.pathname.split('/').slice(1);
  const pathLength = pathSegments.length;

  const breadcrumbs = pathSegments.map((match, index) => {
    const isLast = index === pathLength - 1;
    path += `/${match}`;
    const pathWithLabel = pathWithLabels.find((p) => p.pathname === path);
    return !isLast ? (
      <Link key={path} color='inherit' href={path} underline='hover'>
        <Typography variant='subtitle2'>{pathWithLabel?.label}</Typography>
      </Link>
    ) : (
      <Typography
        key={path}
        color={theme.palette.primary.main}
        variant='subtitle2'
      >
        {pathWithLabel?.label}
      </Typography>
    );
  });

  return (
    <Breadcrumbs
      aria-label='breadcrumb'
      separator={<NavigateNextIcon fontSize='small' />}
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
}
