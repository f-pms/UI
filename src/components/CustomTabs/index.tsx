import { buttonClasses, tabClasses } from '@mui/base';
import { alpha, Theme } from '@mui/material';
import { styled } from '@mui/system';

import { BaseTab, BaseTabsList } from '~/components/BaseMuiComponents';

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

export const CustomTab = styled(Tab)(({ theme }: { theme: Theme }) => ({
  [`&.${tabClasses.selected}`]: {
    backgroundColor: alpha(theme.palette.primary.main, 0.18),
    color: theme.palette.primary.main,
    '& > h6': {
      fontWeight: 600,
    },
  },
}));

export const CustomTabsList = styled(BaseTabsList)`
  min-width: 400px;
  background-color: rgb(244, 244, 245, 0.8);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;
