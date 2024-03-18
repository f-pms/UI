import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography, useTheme } from '@mui/material';

import { Shift } from '~/types';

import { SHIFT_OPTIONS } from '~/pages/Report/helpers/shiftOption';

import { BaseTabs } from '~/components/BaseMuiComponents';
import { CustomTab, CustomTabsList } from '~/components/CustomTabs';

export interface ISiftTabsProps {}

export function SiftTabs() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [tab, setTab] = useState<Shift>(SHIFT_OPTIONS[0].value);

  const handleChange = (
    _: SyntheticEvent<Element, Event> | null,
    value: string | number | null,
  ) => {
    setTab(value as Shift);
    navigate({
      search: `?shift=${value}`,
    });
  };

  return (
    <BaseTabs value={tab} onChange={handleChange}>
      <CustomTabsList>
        {SHIFT_OPTIONS.map((option) => (
          <CustomTab key={option.value} theme={theme} value={option.value}>
            <Typography variant='subtitle2'>{option.label}</Typography>
          </CustomTab>
        ))}
      </CustomTabsList>
    </BaseTabs>
  );
}
