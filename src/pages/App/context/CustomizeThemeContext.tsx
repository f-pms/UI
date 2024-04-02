import { createContext, ReactNode, useMemo, useState } from 'react';

import { ColorScheme } from '~/constants';
import { getCustomizeTheme, ThemeProvider } from '~/libs/mui';
import { FontFamily } from '~/libs/mui/theme/typography';
import { storage } from '~/utils';

export type CustomizeThemeContextType = {
  themeColor: ColorScheme;
  onThemeColorChange: (colorScheme: ColorScheme) => void;
  fontFamily: FontFamily;
  onFontFamilyChange: (fontFamily: FontFamily) => void;
};

export const CustomizeThemeContext = createContext<CustomizeThemeContextType>({
  themeColor: 'green',
  onThemeColorChange: () => {},
  fontFamily: 'inter',
  onFontFamilyChange: () => {},
});

export interface ICustomizeThemeProviderProps {
  children: ReactNode;
}

export function CustomizeThemeProvider({
  children,
}: ICustomizeThemeProviderProps) {
  const [themeColor, setThemeColor] = useState<ColorScheme>(() => {
    return (storage.get('COLOR_SCHEME') ?? 'green') as ColorScheme;
  });
  const [fontFamily, setFontFamily] = useState<FontFamily>(() => {
    return (storage.get('FONT_FAMILY') ?? 'inter') as FontFamily;
  });

  const onThemeColorChange = (colorScheme: ColorScheme) => {
    storage.set('COLOR_SCHEME', colorScheme);
    setThemeColor(colorScheme);
  };

  const onFontFamilyChange = (fontFamily: FontFamily) => {
    storage.set('FONT_FAMILY', fontFamily);
    setFontFamily(fontFamily);
  };

  const value = useMemo(
    () => ({
      themeColor,
      onThemeColorChange,
      fontFamily,
      onFontFamilyChange,
    }),
    [themeColor, fontFamily],
  );
  const theme = useMemo(
    () => getCustomizeTheme(themeColor, fontFamily),
    [themeColor, fontFamily],
  );

  return (
    <CustomizeThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomizeThemeContext.Provider>
  );
}
