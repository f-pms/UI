import { FontFamilyOption } from '~/layouts/partials/Header/helpers/fontFamilyOptions';
import { FONT_FAMILIES } from '~/libs/mui/theme/typography';

import useCustomizeTheme from '~/pages/App/hooks/useCustomizeTheme';

import { Paper, Stack, Typography } from '~/components/MuiComponents';

export interface IFontFamilyCustomProps {
  option: FontFamilyOption;
}

export function FontFamilyCustom({ option }: IFontFamilyCustomProps) {
  const { fontFamily, onFontFamilyChange } = useCustomizeTheme();

  const isFontFamilyActive = option.value === fontFamily;
  const fontFamilyValue = FONT_FAMILIES[option.value];

  const onFontFamilyClick = () => {
    onFontFamilyChange(option.value);
  };

  return (
    <Paper
      elevation={3}
      sx={(theme) => ({
        boxSizing: 'border-box',
        width: 90,
        height: 90,
        '&:hover': {
          cursor: 'pointer',
          transform: 'translateY(-1px)',
          transition: 'all .2s ease-in-out',
        },
        border: `2px solid ${
          isFontFamilyActive ? theme.palette.primary.light : 'transparent'
        }}`,
      })}
      onClick={onFontFamilyClick}
    >
      <Stack
        alignItems='center'
        justifyContent='center'
        sx={{ height: '100%', width: '100%' }}
      >
        <Typography
          sx={{ fontWeight: 'bold', fontFamily: fontFamilyValue }}
          variant='body2'
        >
          Aa
        </Typography>
        <Typography sx={{ fontFamily: fontFamilyValue }} variant='caption'>
          {option.label}
        </Typography>
      </Stack>
    </Paper>
  );
}
