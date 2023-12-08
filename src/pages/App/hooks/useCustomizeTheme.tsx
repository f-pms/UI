import { useContext } from 'react';

import { CustomizeThemeContext } from '~/pages/App/context/CustomizeThemeContext';

const useCustomizeTheme = () => {
  const context = useContext(CustomizeThemeContext);

  if (context === undefined) {
    throw new Error(
      'useCustomizeTheme must be used within a CustomizeThemeContext',
    );
  }
  return context;
};

export default useCustomizeTheme;
