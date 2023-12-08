import { PaletteOptions } from '@mui/material';
import { blue, green, orange, purple } from '@mui/material/colors';

export const COLOR_SCHEME = { blue, purple, orange, green };
export type ColorScheme = keyof typeof COLOR_SCHEME;
export const COLOR_SHADE = 600;

export const getPaletteColor = (color: ColorScheme) => {
  const palette: PaletteOptions = {
    primary: {
      main: COLOR_SCHEME[color][COLOR_SHADE],
    },
  };
  return palette;
};
