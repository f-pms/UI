// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

import { SoftChip } from '.';

const meta: Meta<typeof SoftChip> = {
  title: 'Data Display/SoftChip',
  component: SoftChip,
  tags: ['autodocs'],
  args: {
    label: 'chip',
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
type Story = StoryObj<typeof SoftChip>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => <SoftChip {...args} />,
};
