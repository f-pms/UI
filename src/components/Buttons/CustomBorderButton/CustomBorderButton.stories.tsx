// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

import { Stack, Typography } from '~/components/MuiComponents';

import { CustomBorderButton } from '.';

const meta: Meta<typeof CustomBorderButton> = {
  title: 'Buttons/CustomBorder',
  component: CustomBorderButton,
  tags: ['autodocs'],
  args: {
    children: (
      <Stack
        alignItems='center'
        justifyContent='center'
        sx={{ height: '100%' }}
      >
        <Typography variant='body2'>Custom Border Button</Typography>
      </Stack>
    ),
    style: { width: '200px', height: '50px' },
  },
  decorators: [
    (Story) => (
      <center>
        <Story />
      </center>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CustomBorderButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => <CustomBorderButton {...args} />,
};
