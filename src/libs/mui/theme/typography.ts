import { TypographyOptions } from '@mui/material/styles/createTypography';

export const FONT_FAMILIES = {
  inter: ['Inter', 'sans-serif'].join(','),
  robotoCondensed: ['"Roboto Condensed"', 'sans-serif'].join(','),
  openSans: ['"Open Sans"', 'sans-serif'].join(','),
};

export type FontFamily = keyof typeof FONT_FAMILIES;

export const getFontFamily = (fontFamily: FontFamily) => {
  const typography: TypographyOptions = {
    fontFamily: FONT_FAMILIES[fontFamily],
    fontSize: 14,
    fontWeightRegular: 500,
  };
  return typography;
};
