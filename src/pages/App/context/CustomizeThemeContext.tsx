import { createContext, ReactNode, useMemo, useState } from 'react';

import { getCustomizeTheme, ThemeProvider } from '~/libs/mui';
import { ColorScheme } from '~/libs/mui/theme/palette';
import { FontFamily } from '~/libs/mui/theme/typography';
import { storage } from '~/utils';

export type CustomizeThemeContextType = {
  colorScheme: ColorScheme;
  onColorSchemeChange: (colorScheme: ColorScheme) => void;
  fontFamily: FontFamily;
  onFontFamilyChange: (fontFamily: FontFamily) => void;
};

export const CustomizeThemeContext = createContext<CustomizeThemeContextType>({
  colorScheme: 'blue',
  onColorSchemeChange: () => {},
  fontFamily: 'inter',
  onFontFamilyChange: () => {},
});

export interface ICustomizeThemeProviderProps {
  children: ReactNode;
}

export function CustomizeThemeProvider({
  children,
}: ICustomizeThemeProviderProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    return (storage.get('COLOR_SCHEME') || 'blue') as ColorScheme;
  });
  const [fontFamily, setFontFamily] = useState<FontFamily>(() => {
    return (storage.get('FONT_FAMILY') || 'roboto') as FontFamily;
  });

  const onColorSchemeChange = (colorScheme: ColorScheme) => {
    storage.set('COLOR_SCHEME', colorScheme);
    setColorScheme(colorScheme);
  };

  const onFontFamilyChange = (fontFamily: FontFamily) => {
    storage.set('FONT_FAMILY', fontFamily);
    setFontFamily(fontFamily);
  };

  const value = useMemo(
    () => ({
      colorScheme,
      onColorSchemeChange,
      fontFamily,
      onFontFamilyChange,
    }),
    [colorScheme, fontFamily],
  );
  const theme = useMemo(
    () => getCustomizeTheme(colorScheme, fontFamily),
    [colorScheme, fontFamily],
  );

  return (
    <CustomizeThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomizeThemeContext.Provider>
  );
}
