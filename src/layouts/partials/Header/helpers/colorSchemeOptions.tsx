import { ColorScheme } from '~/constants';

export type ColorSchemeOption = {
  label: string;
  value: ColorScheme;
};

export const COLOR_SCHEME_OPTIONS: ColorSchemeOption[] = [
  {
    label: 'Mặc định',
    value: 'blue',
  },
  {
    label: 'Chủ đề 1',
    value: 'zinc',
  },
  {
    label: 'Chủ đề 2',
    value: 'red',
  },
  {
    label: 'Chủ đề 3',
    value: 'green',
  },
  {
    label: 'Chủ đề 4',
    value: 'orange',
  },

  {
    label: 'Chủ đề 5',
    value: 'violet',
  },
];
