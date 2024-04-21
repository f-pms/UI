import { useContext, useState } from 'react';

import { FigureInfoType } from '~/services/blueprint/queries/useQueryBlueprintById';

import { BlueprintsContext } from '~/pages/ProductionManagement/context/BlueprintContext';
import { OpenUpdateFigureInfoDialogProps } from '~/pages/ProductionManagement/partials/Diagrams/partials/Figures';

import {
  ContentCopyRoundedIcon,
  EditRoundedIcon,
  LibraryAddCheckRoundedIcon,
} from '~/components/Icons';
import {
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '~/components/MuiComponents';

interface FigureProps {
  figureInfo: FigureInfoType;
  figureValue: string;
  openUpdateFigureInfoDialog: (props: OpenUpdateFigureInfoDialogProps) => void;
}

export function Figure({
  figureInfo,
  figureValue,
  openUpdateFigureInfoDialog,
}: FigureProps) {
  const { x, y, db, offset, dataType } = figureInfo;
  const { isEditMode } = useContext(BlueprintsContext);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const transformString = `translate(${x} ${y})`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`%DB${db}:${offset}:${dataType}`);
    setIsCopied(true);
  };

  if (!figureValue) {
    figureValue = 'xx.xx';
  }

  return !isEditMode ? (
    <text transform={transformString}>
      <tspan x='0' y='0'>
        {figureValue}
      </tspan>
    </text>
  ) : (
    <Tooltip
      arrow
      placement='right-start'
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -4],
              },
            },
          ],
        },
      }}
      title={
        <Stack alignItems='center' justifyContent='center' margin={0.5}>
          <Typography variant='caption'>
            Data Block: {db} <br />
            Offset: {offset} <br />
            Kiểu Dữ Liệu: {dataType}
          </Typography>
          <Stack direction='row' justifyContent='space-evenly' marginTop={0.5}>
            <IconButton
              color='secondary'
              size='small'
              sx={{ marginLeft: 0.5 }}
              onClick={() => openUpdateFigureInfoDialog(figureInfo)}
            >
              <EditRoundedIcon fontSize='small' />
            </IconButton>
            <IconButton
              color='secondary'
              size='small'
              sx={{ marginLeft: 0.5 }}
              onClick={copyToClipboard}
            >
              {!isCopied ? (
                <ContentCopyRoundedIcon fontSize='small' />
              ) : (
                <LibraryAddCheckRoundedIcon fontSize='small' />
              )}
            </IconButton>
          </Stack>
        </Stack>
      }
      onOpen={() => setIsCopied(false)}
    >
      <text style={{ cursor: 'pointer' }} transform={transformString}>
        <tspan x='0' y='0'>
          {figureValue}
        </tspan>
      </text>
    </Tooltip>
  );
}
