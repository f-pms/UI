import * as React from 'react';

export interface ICustomTabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
  style?: React.CSSProperties;
}

export function CustomTabPanel(props: ICustomTabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role='tabpanel'
      {...other}
    >
      {value === index && children}
    </div>
  );
}

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
