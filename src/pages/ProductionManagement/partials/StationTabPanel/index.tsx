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

export const StationTabPanel = React.forwardRef<
  HTMLDivElement,
  IStationTabPanelProps
>(function StationTabPanel({ value }: IStationTabPanelProps, ref) {
  const [expanded, setExpanded] = React.useState(false);
  const paperStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: expanded ? '100vh' : 'calc(100vh - 64px)',
    maxHeight: expanded ? '100vh' : '1024px',

    position: expanded ? 'absolute' : 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: expanded ? 1000 : 'unset',
  };

  return (
    <Paper ref={ref} elevation={0} sx={paperStyles} variant='elevation'>
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
            style={{
              height: '100%',
              paddingBottom: '8px',
            }}
            value={value}
          >
            {tab.panel}
          </CustomTabPanel>
        ))}
      </Stack>
    </Paper>
  );
});
