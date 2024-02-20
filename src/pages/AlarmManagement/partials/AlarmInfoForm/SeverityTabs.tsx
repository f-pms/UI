import { SyntheticEvent, useEffect, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { buttonClasses, tabClasses } from '@mui/base';
import { styled } from '@mui/system';

import { AlarmSeverity } from '~/types/alarm';

import {
  BaseTab,
  BaseTabs,
  BaseTabsList,
} from '~/components/BaseMuiComponents';
import { Typography } from '~/components/MuiComponents';
export interface ISeverityTabsProps {}

export function SeverityTabs() {
  const { setValue, watch } = useFormContext();
  const [tab, setTab] = useState<AlarmSeverity>(AlarmSeverity.CRITICAL);

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
      <TabsList>
        <Tab value={AlarmSeverity.CRITICAL}>
          <Typography variant='subtitle2'>Khẩn cấp</Typography>
        </Tab>
        <Tab value={AlarmSeverity.IMPORTANT}>
          <Typography variant='subtitle2'>Quan trọng</Typography>
        </Tab>
        <Tab value={AlarmSeverity.WARNING}>
          <Typography variant='subtitle2'>Thông báo</Typography>
        </Tab>
      </TabsList>
    </BaseTabs>
  );
}

const Tab = styled(BaseTab)`
  color: #52525b;
  cursor: pointer;
  background-color: transparent;
  width: 100%;
  padding: 6px;
  margin: 6px;
  border: none;
  border-radius: 2px;
  display: flex;
  justify-content: center;

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  &:focus {
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: #09090b;

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    & > h6 {
      font-weight: bold;
    }
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(BaseTabsList)`
  min-width: 400px;
  background-color: #f4f4f5;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;
