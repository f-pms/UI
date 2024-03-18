import { SyntheticEvent, useEffect, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { useTheme } from '@mui/material';

import { AlarmSeverity } from '~/types/alarm';

import { BaseTabs } from '~/components/BaseMuiComponents';
import { CustomTab, CustomTabsList } from '~/components/CustomTabs';
import { Typography } from '~/components/MuiComponents';
export interface ISeverityTabsProps {}

export function SeverityTabs() {
  const theme = useTheme();
  const { setValue, watch } = useFormContext();
  const [tab, setTab] = useState<AlarmSeverity>(AlarmSeverity.URGENT);

  const handleChange = (
    _: SyntheticEvent<Element, Event> | null,
    value: string | number | null,
  ) => {
    setTab(value as AlarmSeverity);
    setValue('info.severity', value as number);
  };

  const severity = useMemo(
    () => watch('info.severity'),
    [watch],
  ) as AlarmSeverity;

  useEffect(() => {
    if (severity) {
      setTab(severity);
    }
  }, [severity]);

  return (
    <BaseTabs value={tab} onChange={handleChange}>
      <CustomTabsList>
        <CustomTab theme={theme} value={AlarmSeverity.URGENT}>
          <Typography variant='subtitle2'>Khẩn cấp</Typography>
        </CustomTab>
        <CustomTab theme={theme} value={AlarmSeverity.HIGH}>
          <Typography variant='subtitle2'>Quan trọng</Typography>
        </CustomTab>
        <CustomTab theme={theme} value={AlarmSeverity.LOW}>
          <Typography variant='subtitle2'>Thông báo</Typography>
        </CustomTab>
      </CustomTabsList>
    </BaseTabs>
  );
}
