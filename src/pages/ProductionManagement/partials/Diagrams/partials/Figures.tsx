import { useContext, useState } from 'react';

import { FigureInfoType } from '~/services/blueprint/queries/useQueryBlueprintById';
import { FigureValuesType } from '~/stores/useMonitoringStore';

import { BlueprintsContext } from '~/pages/ProductionManagement/context/BlueprintContext';

import {
  ContentCopyRoundedIcon,
  LibraryAddCheckRoundedIcon,
} from '~/components/Icons';
import { Box, IconButton, Tooltip } from '~/components/MuiComponents';

export interface FiguresProps {
  figuresCoordinateList: FigureInfoType[];
  figureValues: FigureValuesType;
}

export function Figures({ figuresCoordinateList, figureValues }: FiguresProps) {
  return (
    <g>
      {figuresCoordinateList.map(({ address, x, y }) => (
        <Figure
          key={address + x + y}
          address={address}
          horizontalCoordinate={x}
          value={figureValues[address]}
          verticalCoordinate={y}
        />
      ))}
    </g>
  );
}

interface FigureProps {
  horizontalCoordinate: number;
  verticalCoordinate: number;
  address: string;
  value: string;
}

function Figure({
  horizontalCoordinate,
  verticalCoordinate,
  address,
  value,
}: FigureProps) {
  const { isEditMode } = useContext(BlueprintsContext);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const transformString = `translate(${horizontalCoordinate} ${verticalCoordinate})`;

  const handleOnCopyToClipboard = () => {
    navigator.clipboard.writeText(address);
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
        <Box
          alignItems='center'
          display='flex'
          justifyContent='center'
          marginLeft={0.5}
          marginY={0.5}
        >
          Address: {address}
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
        </Box>
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
