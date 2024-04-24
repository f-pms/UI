import { createTheme, PaletteOptions } from '@mui/material';

import { COLOR_SCHEME, ColorScheme } from '~/constants';

const theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});

export const getPaletteColor = (color: ColorScheme) => {
  const palette: PaletteOptions = {
    primary: theme.palette.augmentColor({
      color: {
        main: COLOR_SCHEME[color].primary,
      },
      name: 'primary',
    }),
    secondary: theme.palette.augmentColor({
      color: {
        main: COLOR_SCHEME[color].secondary,
      },
      name: 'secondary',
    }),
    text: {
      primary: '#52525b',
      strong: '#09090b',
    },
    green: theme.palette.augmentColor({
      color: {
        main: COLOR_SCHEME.green.primary,
      },
      name: 'green',
    }),
    blue: theme.palette.augmentColor({
      color: {
        main: COLOR_SCHEME.blue.primary,
      },
      name: 'blue',
    }),
    orange: theme.palette.augmentColor({
      color: {
        main: COLOR_SCHEME.orange.primary,
      },
      name: 'orange',
    }),
    violet: theme.palette.augmentColor({
      color: {
        main: COLOR_SCHEME.violet.primary,
      },
      name: 'violet',
    }),
    red: theme.palette.augmentColor({
      color: {
        main: COLOR_SCHEME.red.primary,
      },
      name: 'red',
    }),
    yellow: theme.palette.augmentColor({
      color: {
        main: COLOR_SCHEME.yellow.primary,
      },
      name: 'yellow',
    }),
    slate: theme.palette.augmentColor({
      color: {
        main: COLOR_SCHEME.slate.primary,
      },
      name: 'slate',
    }),
    stone: theme.palette.augmentColor({
      color: {
        main: COLOR_SCHEME.stone.primary,
      },
      name: 'stone',
    }),
    gray: theme.palette.augmentColor({
      color: {
        main: COLOR_SCHEME.gray.primary,
      },
      name: 'gray',
    }),
    neutral: theme.palette.augmentColor({
      color: {
        main: COLOR_SCHEME.neutral.primary,
      },
      name: 'neutral',
    }),
    rose: theme.palette.augmentColor({
      color: {
        main: COLOR_SCHEME.rose.primary,
      },
      name: 'rose',
    }),
    zinc: theme.palette.augmentColor({
      color: {
        main: COLOR_SCHEME.zinc.primary,
      },
      name: 'zinc',
    }),
  };
  return palette;
};
