import { useContext, useState } from 'react';

import { BlueprintsContext } from '~/pages/ProductionManagement/context/BlueprintContext';

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
  horizontalCoordinate: number;
  verticalCoordinate: number;
  db: number;
  offset: number;
  dataType: string;
  value: string;
}

export function Figure({
  horizontalCoordinate,
  verticalCoordinate,
  db,
  offset,
  dataType,
  value,
}: FigureProps) {
  const { isEditMode } = useContext(BlueprintsContext);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const transformString = `translate(${horizontalCoordinate} ${verticalCoordinate})`;

  const handleOnCopyToClipboard = () => {
    navigator.clipboard.writeText(
      `Datablock: ${db}\nOffset: ${offset}\nData type: ${dataType}`,
    );
    setIsCopied(true);
  };

  return !isEditMode ? (
    <text transform={transformString}>
      <tspan x='0' y='0'>
        {value}
      </tspan>
    </text>
  ) : (
    <Tooltip
      arrow
      placement='right-start'
      title={
        <Stack alignItems='center' justifyContent='center' margin={0.5}>
          <Typography variant='caption'>
            Datablock: {db} <br />
            Offset: {offset} <br />
            Data type: {dataType}
          </Typography>
          <Stack direction='row' justifyContent='space-evenly' marginTop={0.5}>
            <IconButton
              color='secondary'
              size='small'
              sx={{ marginLeft: 0.5 }}
              onClick={handleOnCopyToClipboard}
            >
              <EditRoundedIcon fontSize='small' />
            </IconButton>
            <IconButton
              color='secondary'
              size='small'
              sx={{ marginLeft: 0.5 }}
              onClick={handleOnCopyToClipboard}
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
          {value}
        </tspan>
      </text>
    </Tooltip>
  );
}
