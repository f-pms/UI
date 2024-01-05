import { alpha, useTheme } from '~/libs/mui';
import { Color } from '~/types';

export const useSoftColor = (color: Color) => {
  const theme = useTheme();

  const bgrColor = alpha(
    theme.palette[color]!.light,
    theme.palette.action.focusOpacity,
  );

  const bgrHoverColor = alpha(
    theme.palette[color]!.dark,
    theme.palette.action.focusOpacity,
  );

  return {
    bgrColor,
    bgrHoverColor,
  };
};
