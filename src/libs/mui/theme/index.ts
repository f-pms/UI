import { createTheme } from '@mui/material';

import { ColorScheme } from '~/constants';
import { getPaletteColor } from '~/libs/mui/theme/palette';
import { FontFamily, getFontFamily } from '~/libs/mui/theme/typography';

export const getCustomizeTheme = (
  color: ColorScheme,
  fontFamily: FontFamily,
) => {
  const theme = createTheme({
    // Theme customization goes here as usual, including tonalOffset and/or
    // contrastThreshold as the augmentColor() function relies on these
  });

  return createTheme(theme, {
    palette: getPaletteColor(color, theme),
    typography: getFontFamily(fontFamily),
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            minWidth: 0,
          },
        },
      },
      MuiModal: {
        styleOverrides: {
          root: {
            '& .MuiBackdrop-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(4px)',
            },
            '& .MuiBackdrop-invisible': {
              backgroundColor: 'transparent',
              backdropFilter: 'none',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 600,
          },
        },
      },
    },
  });
};
