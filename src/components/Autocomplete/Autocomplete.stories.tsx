import { TextField } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { Autocomplete } from '.';

const options = [
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' },
  { id: 4, label: 'Option 4' },
  { id: 5, label: 'Optiony 5' },
];

const meta: Meta<typeof Autocomplete> = {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  args: {
    options,
    name: 'autocomplete',
    renderInput: (params) => (
      <TextField
        {...params}
        label='Autocomplete'
        size='small'
        variant='outlined'
      />
    ),
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
type Story = StoryObj<typeof Autocomplete>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => <Autocomplete {...args} />,
};
