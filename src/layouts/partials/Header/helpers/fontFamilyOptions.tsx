import { FontFamily } from '~/libs/mui/theme/typography';

export type FontFamilyOption = {
  label: string;
  value: FontFamily;
};

export const FONT_FAMILY_OPTIONS: FontFamilyOption[] = [
  {
    label: 'Inter',
    value: 'inter',
  },
  {
    label: 'Roboto',
    value: 'robotoCondensed',
  },
  {
    label: 'OpenSans',
    value: 'openSans',
  },
];
