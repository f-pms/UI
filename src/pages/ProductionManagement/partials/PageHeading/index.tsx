import { useCallback, useContext } from 'react';
import { toast } from 'react-toastify';

import { Path, PATH_LABEL } from '~/constants';
import { useLocation } from '~/libs/react-router-dom';

import { AuthContext } from '~/pages/Auth/context/AuthContext';
import { BlueprintsContext } from '~/pages/ProductionManagement/context/BlueprintContext';

import { SectionHeading } from '~/components';
import {
  CancelIcon,
  CenterFocusStrongOutlinedIcon,
  SettingsIcon,
} from '~/components/Icons';
import { Box, Button, Typography } from '~/components/MuiComponents';

export interface IPageHeadingProps {
  scrollToDiagram: () => void;
}

export default function PageHeading({ scrollToDiagram }: IPageHeadingProps) {
  const location = useLocation();
  const { isEditMode, updateIsEditMode } = useContext(BlueprintsContext);
  const { isAdmin } = useContext(AuthContext);

  const handleTurnOnEditMode = useCallback(() => {
    updateIsEditMode(true);
    toast.info(
      <Typography variant='body2'>
        Đã bật chế độ thiết lập!
        <br />
        Di chuyển chuột lên các số để tiến hành thiết lập.
      </Typography>,
    );
  }, [updateIsEditMode]);

  return (
    <Box px={4} py={2}>
      <SectionHeading
        actions={
          <Box display='flex' justifyContent='space-between'>
            {isAdmin && (
              <>
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
                    onClick={handleTurnOnEditMode}
                  >
                    Bật chế độ thiết lập
                  </Button>
                )}
              </>
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
