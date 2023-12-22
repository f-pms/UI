// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

import { SoftButton } from '.';

const meta: Meta<typeof SoftButton> = {
  title: 'Buttons/Elevated',
  component: SoftButton,
  tags: ['autodocs'],
  args: {
    children: 'Elevated Button',
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
type Story = StoryObj<typeof SoftButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => <SoftButton {...args} />,
};
