import { Color } from '~/types';

import { Box, Stack, Typography } from '~/components/MuiComponents';

export interface IPaletteOptionProps {
  color: Color;
}

export function PaletteOption({ color }: IPaletteOptionProps) {
  return (
    <Stack direction='row' spacing={2}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette[color].light,
          width: 100,
          height: 100,
          borderRadius: '4px',
        })}
      >
        <Typography
          sx={(theme) => ({
            lineHeight: '100px',
            color: theme.palette[color].contrastText,
          })}
          variant='caption'
        >
          Light
        </Typography>
      </Box>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette[color].main,
          width: 100,
          height: 100,
          borderRadius: '4px',
        })}
      >
        <Typography
          sx={(theme) => ({
            lineHeight: '100px',
            color: theme.palette[color].contrastText,
          })}
          variant='caption'
        >
          Main
        </Typography>
      </Box>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette[color].dark,
          width: 100,
          height: 100,
          borderRadius: '4px',
        })}
      >
        <Typography
          sx={(theme) => ({
            lineHeight: '100px',
            color: theme.palette[color].contrastText,
          })}
          variant='caption'
        >
          Dark
        </Typography>
      </Box>
    </Stack>
  );
}
