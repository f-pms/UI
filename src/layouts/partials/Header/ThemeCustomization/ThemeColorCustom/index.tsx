import { COLOR_SCHEME } from '~/constants';
import { ColorSchemeOption } from '~/layouts/partials/Header/helpers/colorSchemeOptions';
import { alpha, useTheme } from '~/libs/mui';

import useCustomizeTheme from '~/pages/App/hooks/useCustomizeTheme';

import { WebOutlinedIcon } from '~/components/Icons';
import { Box, Paper, Stack, Typography } from '~/components/MuiComponents';

export interface IThemeColorCustomProps {
  option: ColorSchemeOption;
}

export function ThemeColorCustom({ option }: Readonly<IThemeColorCustomProps>) {
  const theme = useTheme();
  const { themeColor, onThemeColorChange } = useCustomizeTheme();

  const color = COLOR_SCHEME[option.value].primary;
  const bgColor = alpha(color, theme.palette.action.focusOpacity);
  const isColorActive = option.value === themeColor;

  const onColorSchemeClick = () => {
    onThemeColorChange(option.value);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        '&:hover': {
          cursor: 'pointer',
          transform: 'translateY(-1px)',
          transition: 'all .2s ease-in-out',
          backgroundColor: bgColor,
        },
        bgcolor: isColorActive ? bgColor : 'white',
      }}
      onClick={onColorSchemeClick}
    >
      <Stack alignItems='center'>
        <Box
          sx={{
            p: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: bgColor,
            borderRadius: 1,
          }}
        >
          <WebOutlinedIcon fontSize='large' sx={{ color: color }} />
        </Box>
        <Typography sx={{ mt: 1, color: color }} variant='caption'>
          {option.label}
        </Typography>
      </Stack>
    </Paper>
  );
}
