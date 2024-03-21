import { ReactNode } from 'react';

import { Stack, StackProps, Typography } from '@mui/material';

type ChartContainerProp = StackProps & {
  title: string;
  children: ReactNode;
};

const ChartContainer = ({ title, children, ...props }: ChartContainerProp) => {
  return (
    <Stack
      alignItems='center'
      justifyContent={'space-between'}
      padding={2}
      {...props}
      sx={{
        border: ' 1px solid #00000033',
        boxShadow: '0px 4px 4px 0px #00000040',
      }}
    >
      <Typography
        color='black'
        sx={{
          fontWeight: 'bold',
        }}
        variant='h6'
      >
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

export default ChartContainer;
