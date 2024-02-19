import { createTheme } from '@mui/material';

import { ColorScheme } from '~/constants';
import { getPaletteColor } from '~/libs/mui/theme/palette';
import { FontFamily, getFontFamily } from '~/libs/mui/theme/typography';

export const getCustomizeTheme = (
  color: ColorScheme,
  fontFamily: FontFamily,
) => {
  return createTheme({
    palette: getPaletteColor(color),
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
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontSize: '0.875rem',
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            fontSize: '0.875rem',
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            fontSize: '0.875rem',
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: '0.875rem',
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: '0.875rem',
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontSize: '0.875rem',
          },
        },
      },
    },
  });
};
