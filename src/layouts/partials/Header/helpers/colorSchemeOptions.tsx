import { ColorScheme } from '~/libs/mui/theme/palette';

export type ColorSchemeOption = {
  label: string;
  value: ColorScheme;
};

export const COLOR_SCHEME_OPTIONS: ColorSchemeOption[] = [
  {
    label: 'Default',
    value: 'blue',
  },
  {
    label: 'Theme 1',
    value: 'purple',
  },
  {
    label: 'Theme 2',
    value: 'green',
  },
  {
    label: 'Theme 3',
    value: 'orange',
  },
];
