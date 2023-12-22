import '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Palette {
    blue: Palette['primary'];
    green: Palette['primary'];
    orange: Palette['primary'];
    violet: Palette['primary'];
    red: Palette['primary'];
    yellow: Palette['primary'];
    slate: Palette['primary'];
    stone: Palette['primary'];
    neutral: Palette['primary'];
    rose: Palette['primary'];
    zinc: Palette['primary'];
    gray: Palette['primary'];
  }

  interface PaletteOptions {
    blue?: PaletteOptions['primary'];
    green: PaletteOptions['primary'];
    orange: PaletteOptions['primary'];
    violet: PaletteOptions['primary'];
    red: PaletteOptions['primary'];
    yellow: PaletteOptions['primary'];
    slate: PaletteOptions['primary'];
    stone: PaletteOptions['primary'];
    neutral: PaletteOptions['primary'];
    rose: PaletteOptions['primary'];
    zinc: PaletteOptions['primary'];
    gray: PaletteOptions['primary'];
  }
}
