import { createTheme } from '@mui/material';

import { ColorScheme, getPaletteColor } from '~/libs/mui/theme/palette';
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
          },
        },
      },
    },
  });
};
