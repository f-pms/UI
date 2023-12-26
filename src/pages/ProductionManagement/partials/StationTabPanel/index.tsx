import * as React from 'react';

import { DIAGRAMS } from '~/pages/ProductionManagement/helpers/diagrams';

import { CustomTabPanel } from '~/components/CustomTabPanel';
import {
  FileDownloadOutlinedIcon,
  FullscreenExitOutlinedIcon,
  FullscreenOutlinedIcon,
} from '~/components/Icons';
import { IconButton, Paper, Stack } from '~/components/MuiComponents';

export interface IStationTabPanelProps {
  value: number;
}

export function StationTabPanel({ value }: IStationTabPanelProps) {
  const [expanded, setExpanded] = React.useState(false);
  const paperStyles = {
    position: expanded ? 'absolute' : 'relative',
    width: expanded ? '100vw' : '100%',
    height: expanded ? '100vh' : '100%',

    display: 'flex',
    flexDirection: 'column',
    my: expanded ? 0 : 2,
    p: 1,

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: expanded ? 1000 : 'unset',
  };

  return (
    <Paper sx={paperStyles} variant='outlined'>
      <Stack direction='row' justifyContent='flex-end'>
        <IconButton>
          <FileDownloadOutlinedIcon />
        </IconButton>
        <IconButton onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <FullscreenExitOutlinedIcon />
          ) : (
            <FullscreenOutlinedIcon />
          )}
        </IconButton>
      </Stack>
      <Stack
        alignItems='center'
        justifyContent='center'
        sx={{
          flex: 1,
        }}
      >
        {DIAGRAMS.map((tab) => (
          <CustomTabPanel
            key={tab.value}
            index={tab.value}
            style={{ height: '100%', width: '100%' }}
            value={value}
          >
            {tab.panel}
          </CustomTabPanel>
        ))}
      </Stack>
    </Paper>
  );
}
