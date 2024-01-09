import { Path, PATH_LABEL } from '~/constants';
import { useTheme } from '~/libs/mui';
import { useMatches, useNavigate } from '~/libs/react-router-dom';

import { NavigateNextIcon } from '~/components/Icons';
import { Breadcrumbs, Link, Typography } from '~/components/MuiComponents';

export default function HeaderBreadcrumbs() {
  const matches = useMatches();
  const navigate = useNavigate();
  const theme = useTheme();

  function handleClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string,
  ) {
    event.preventDefault();
    navigate(path);
  }

  const breadcrumbs = matches.slice(1).map((match, index) => {
    const isLast = index === matches.slice(1).length - 1;
    return !isLast ? (
      <Link
        key={match.pathname}
        color='inherit'
        href={match.pathname}
        underline='hover'
        onClick={(e) => handleClick(e, match.pathname)}
      >
        <Typography variant='subtitle2'>
          {PATH_LABEL[match.pathname as Path]}
        </Typography>
      </Link>
    ) : (
      <Typography
        key={match.pathname}
        color={theme.palette.primary.main}
        variant='subtitle2'
      >
        {PATH_LABEL[match.pathname as Path]}
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
