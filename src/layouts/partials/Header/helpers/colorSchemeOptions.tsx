import { ColorScheme } from '~/constants';

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
    value: 'zinc',
  },
  {
    label: 'Theme 2',
    value: 'red',
  },
  {
    label: 'Theme 3',
    value: 'green',
  },
  {
    label: 'Theme 4',
    value: 'orange',
  },

  {
    label: 'Theme 5',
    value: 'violet',
  },
];
