// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

import { ElevatedButton } from './';

const meta: Meta<typeof ElevatedButton> = {
  title: 'Button/Elevated',
  component: ElevatedButton,
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
type Story = StoryObj<typeof ElevatedButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => <ElevatedButton {...args} />,
};
