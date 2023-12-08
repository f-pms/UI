import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '.';

const meta: Meta<typeof TextField> = {
  title: 'Inputs/TextField',
  component: TextField,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <center>
        <Story />
      </center>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextField>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => <TextField {...args} />,
};
