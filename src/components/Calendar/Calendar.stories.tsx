// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from '.';

const meta: Meta<typeof Calendar> = {
  title: 'Utils/Calendar',
  component: Calendar,
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
type Story = StoryObj<typeof Calendar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Calendar />,
};
