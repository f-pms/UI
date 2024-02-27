import { SyntheticEvent, useEffect, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { buttonClasses, tabClasses } from '@mui/base';
import { alpha } from '@mui/material';
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
      <TabsList>
        <CustomTab value={AlarmSeverity.URGENT}>
          <Typography variant='subtitle2'>Khẩn cấp</Typography>
        </CustomTab>
        <CustomTab value={AlarmSeverity.HIGH}>
          <Typography variant='subtitle2'>Quan trọng</Typography>
        </CustomTab>
        <CustomTab value={AlarmSeverity.LOW}>
          <Typography variant='subtitle2'>Thông báo</Typography>
        </CustomTab>
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

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CustomTab = styled(Tab)(({ theme }) => ({
  [`&.${tabClasses.selected}`]: {
    backgroundColor: alpha(theme.palette.primary.light, 0.18),
    color: '#09090b',
    '& > h6': {
      fontWeight: 600,
    },
  },
}));

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
