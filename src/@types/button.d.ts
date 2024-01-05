import '@mui/material/Button';
import '@mui/material/IconButton';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    blue: true;
    green: true;
    orange: true;
    violet: true;
    red: true;
    yellow: true;
    slate: true;
    stone: true;
    neutral: true;
    rose: true;
    zinc: true;
    gray: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    blue: true;
    green: true;
    orange: true;
    violet: true;
    red: true;
    yellow: true;
    slate: true;
    stone: true;
    neutral: true;
    rose: true;
    zinc: true;
    gray: true;
  }
}
