// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

import {
  AddCircleOutlineOutlinedIcon,
  ArrowDropDownIcon,
  ArrowDropUpIcon,
  ArrowForwardIcon,
  ArrowRightAltIcon,
  CenterFocusStrongOutlinedIcon,
  CloudUploadIcon,
  CottageOutlinedIcon,
  DashboardOutlinedIcon,
  DateRangeIcon,
  ElectricMeterOutlinedIcon,
  ErrorOutlineOutlinedIcon,
  ExitToAppOutlinedIcon,
  ExpandMoreOutlinedIcon,
  FactoryOutlinedIcon,
  FileDownloadOutlinedIcon,
  FilterAltOutlinedIcon,
  FormatColorFillOutlinedIcon,
  FormatIndentDecreaseOutlinedIcon,
  FormatIndentIncreaseOutlinedIcon,
  FullscreenExitOutlinedIcon,
  FullscreenOutlinedIcon,
  GoogleIcon,
  HandymanOutlinedIcon,
  HighlightOffOutlinedIcon,
  HistoryOutlinedIcon,
  LockOutlinedIcon,
  MenuOutlinedIcon,
  MonitorOutlinedIcon,
  MoreVertOutlinedIcon,
  NavigateBeforeIcon,
  NavigateNextIcon,
  NotificationImportantOutlinedIcon,
  PersonOutlineOutlinedIcon,
  PieChartOutlinedIcon,
  ReportProblemOutlinedIcon,
  SettingsInputComponentOutlinedIcon,
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
      <AddCircleOutlineOutlinedIcon />
      <ArrowDropDownIcon />
      <ArrowDropUpIcon />
      <ArrowForwardIcon />
      <ArrowRightAltIcon />
      <CenterFocusStrongOutlinedIcon />
      <CloudUploadIcon />
      <CottageOutlinedIcon />
      <DashboardOutlinedIcon />
      <DateRangeIcon />
      <ElectricMeterOutlinedIcon />
      <ErrorOutlineOutlinedIcon />
      <ExitToAppOutlinedIcon />
      <ExpandMoreOutlinedIcon />
      <FactoryOutlinedIcon />
      <FileDownloadOutlinedIcon />
      <FormatColorFillOutlinedIcon />
      <FormatIndentDecreaseOutlinedIcon />
      <FormatIndentIncreaseOutlinedIcon />
      <FullscreenExitOutlinedIcon />
      <FullscreenOutlinedIcon />
      <GoogleIcon />
      <HandymanOutlinedIcon />
      <HighlightOffOutlinedIcon />
      <HistoryOutlinedIcon />
      <LockOutlinedIcon />
      <MenuOutlinedIcon />
      <MonitorOutlinedIcon />
      <MoreVertOutlinedIcon />
      <NavigateBeforeIcon />
      <NavigateNextIcon />
      <NotificationImportantOutlinedIcon />
      <PersonOutlineOutlinedIcon />
      <PieChartOutlinedIcon />
      <ReportProblemOutlinedIcon />
      <SettingsInputComponentOutlinedIcon />
      <SettingsSuggestOutlinedIcon />
      <TextFormatOutlinedIcon />
      <WebOutlinedIcon />
      <FilterAltOutlinedIcon />
    </Stack>
  ),
};
