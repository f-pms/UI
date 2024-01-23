import { useContext } from 'react';

import { Path, PATH_LABEL } from '~/constants';
import { useLocation } from '~/libs/react-router-dom';

import { BlueprintsContext } from '~/pages/ProductionManagement/context/BlueprintContext';

import { SectionHeading } from '~/components';
import {
  CancelIcon,
  CenterFocusStrongOutlinedIcon,
  SettingsIcon,
} from '~/components/Icons';
import { Box, Button } from '~/components/MuiComponents';

export interface IPageHeadingProps {
  scrollToDiagram: () => void;
}

export default function PageHeading({ scrollToDiagram }: IPageHeadingProps) {
  const location = useLocation();
  const { isEditMode, updateIsEditMode } = useContext(BlueprintsContext);

  return (
    <Box>
      <SectionHeading
        actions={
          <Box display='flex' justifyContent='space-between'>
            {isEditMode ? (
              <Button
                color='secondary'
                startIcon={<CancelIcon />}
                variant='contained'
                onClick={() => updateIsEditMode(false)}
              >
                Tắt chế độ thiết lập
              </Button>
            ) : (
              <Button
                startIcon={<SettingsIcon />}
                variant='contained'
                onClick={() => updateIsEditMode(true)}
              >
                Bật chế độ thiết lập
              </Button>
            )}
            <Button
              startIcon={<CenterFocusStrongOutlinedIcon />}
              sx={{ marginX: 2 }}
              variant='contained'
              onClick={scrollToDiagram}
            >
              Theo dõi mạch điện
            </Button>
          </Box>
        }
        description='Giám sát tình trạng kết nối, nhiệt độ và thông số kĩ thuật của các cụm, trạm, máy,...'
        divider={false}
        header={PATH_LABEL[location.pathname as Path]}
      />
    </Box>
  );
}
