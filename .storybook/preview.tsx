import React from 'react';
import type { Preview } from '@storybook/react';
import { CssBaseline, ThemeProvider, getCustomizeTheme } from '../src/libs/mui';

const theme = getCustomizeTheme('blue', 'inter');

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
