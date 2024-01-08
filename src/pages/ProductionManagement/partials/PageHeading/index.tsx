import { Path, PATH_LABEL } from '~/constants';
import { useLocation } from '~/libs/react-router-dom';

import { SectionHeading } from '~/components';
import { CenterFocusStrongOutlinedIcon } from '~/components/Icons';
import { Button } from '~/components/MuiComponents';

export interface IPageHeadingProps {
  scrollIntoView: () => void;
}

export default function PageHeading({ scrollIntoView }: IPageHeadingProps) {
  const location = useLocation();
  return (
    <SectionHeading
      actions={
        <Button
          startIcon={<CenterFocusStrongOutlinedIcon />}
          variant='contained'
          onClick={scrollIntoView}
        >
          Theo dõi mạch điện
        </Button>
      }
      description='Giám sát tình trạng kết nối, nhiệt độ và thông số kĩ thuật của các cụm, trạm, máy,...'
      divider={false}
      header={PATH_LABEL[location.pathname as Path]}
    />
  );
}
