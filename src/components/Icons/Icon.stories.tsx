// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

import {
  ArrowDropDownIcon,
  ArrowDropUpIcon,
  CenterFocusStrongOutlinedIcon,
  CloudUploadIcon,
  CottageOutlinedIcon,
  DashboardOutlinedIcon,
  ExitToAppOutlinedIcon,
  ExpandMoreOutlinedIcon,
  FormatColorFillOutlinedIcon,
  FormatIndentDecreaseOutlinedIcon,
  FormatIndentIncreaseOutlinedIcon,
  GoogleIcon,
  HandymanOutlinedIcon,
  HighlightOffOutlinedIcon,
  LockOutlinedIcon,
  MenuOutlinedIcon,
  MoreVertOutlinedIcon,
  NavigateBeforeIcon,
  NavigateNextIcon,
  PersonOutlineOutlinedIcon,
  PieChartOutlinedIcon,
  SettingsSuggestOutlinedIcon,
  TextFormatOutlinedIcon,
  WebOutlinedIcon,
} from '~/components/Icons';
import { Stack } from '~/components/MuiComponents';

const meta: Meta<typeof Stack> = {
  title: 'Utils/Icons',
  component: Stack,
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
type Story = StoryObj<typeof Stack>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Stack useFlexGap direction='row' flexWrap='wrap' spacing={5}>
      <ArrowDropDownIcon />
      <ArrowDropUpIcon />
      <ArrowDropUpIcon />
      <CloudUploadIcon />
      <CottageOutlinedIcon />
      <DashboardOutlinedIcon />
      <ExitToAppOutlinedIcon />
      <ExpandMoreOutlinedIcon />
      <FormatColorFillOutlinedIcon />
      <FormatIndentDecreaseOutlinedIcon />
      <FormatIndentIncreaseOutlinedIcon />
      <GoogleIcon />
      <HandymanOutlinedIcon />
      <HighlightOffOutlinedIcon />
      <LockOutlinedIcon />
      <MenuOutlinedIcon />
      <MoreVertOutlinedIcon />
      <NavigateBeforeIcon />
      <NavigateNextIcon />
      <PersonOutlineOutlinedIcon />
      <PieChartOutlinedIcon />
      <SettingsSuggestOutlinedIcon />
      <TextFormatOutlinedIcon />
      <WebOutlinedIcon />
      <CenterFocusStrongOutlinedIcon />
    </Stack>
  ),
};
