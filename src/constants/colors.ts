export type ColorScheme = keyof typeof COLOR_SCHEME;

export const COLOR_SCHEME = {
  blue: {
    name: 'blue',
    primary: 'hsl(221.2, 83.2%, 53.3%)',
    secondary: 'hsl(210, 40%, 96.1%)',
  },
  green: {
    name: 'green',
    primary: 'hsl(142.1, 76.2%, 36.3%)',
    secondary: 'hsl(240, 4.8%, 95.9%)',
  },
  orange: {
    name: 'orange',
    primary: 'hsl(24.6, 95%, 53.1%)',
    secondary: 'hsl(60, 4.8%, 95.9%)',
  },
  violet: {
    name: 'violet',
    primary: '#7c3aed',
    secondary: 'hsl(220, 14.3%, 95.9%)',
  },
  red: {
    name: 'red',
    primary: 'hsl( 0, 72.2%, 50.6%)',
    secondary: 'hsl(0, 0%, 96.1%)',
  },
  yellow: {
    name: 'yellow',
    primary: 'hsl(47.9, 95.8%, 53.1%)',
    secondary: 'hsl(60, 4.8%, 95.9%)',
  },
  slate: {
    name: 'slate',
    primary: 'hsl(222.2, 47.4%, 11.2%)',
    secondary: 'hsl(210, 40%, 96.1%)',
  },
  stone: {
    name: 'stone',
    primary: 'hsl(24, 9.8%, 10%)',
    secondary: 'hsl(60, 4.8%, 95.9%)',
  },
  gray: {
    name: 'gray',
    primary: 'hsl(220.9, 39.3%, 11%)',
    secondary: 'hsl(220, 14.3%, 95.9%)',
  },
  neutral: {
    name: 'neutral',
    primary: 'hsl(0, 0%, 9%)',
    secondary: 'hsl(0, 0%, 96.1%)',
  },
  rose: {
    name: 'rose',
    primary: 'hsl(346.8, 77.2%, 49.8%)',
    secondary: 'hsl(240, 4.8%, 95.9%)',
  },
  zinc: {
    name: 'black',
    primary: 'hsl(240, 5.9%, 10%)',
    secondary: 'hsl(240, 4.8%, 95.9%)',
  },
};
