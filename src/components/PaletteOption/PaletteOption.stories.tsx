// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

import { COLOR_SCHEME } from '~/constants';

import { Stack, Typography } from '~/components/MuiComponents';

import { PaletteOption } from '.';

const meta: Meta<typeof PaletteOption> = {
  title: 'Theme/PaletteOption',
  component: PaletteOption,
  decorators: [
    (Story) => (
      <center>
        <Story />
      </center>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PaletteOption>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
const colors = Object.keys(COLOR_SCHEME) as Array<keyof typeof COLOR_SCHEME>;

export const Primary: Story = {
  render: () => (
    <Stack spacing={2}>
      {colors.map((color) => (
        <Stack key={color}>
          <Typography align='left' variant='body1'>
            theme.palette.{color}
          </Typography>
          <PaletteOption color={color} />
        </Stack>
      ))}
    </Stack>
  ),
};
