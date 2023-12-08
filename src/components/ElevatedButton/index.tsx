import { alpha, Button, ButtonProps, useTheme } from '@mui/material';

interface IElevatedButtonProps extends Omit<ButtonProps, 'variant' | 'color'> {
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

export function ElevatedButton(props: IElevatedButtonProps) {
  const { color = 'primary' } = props;
  const theme = useTheme();

  const bgrColor = alpha(
    theme.palette[color].light,
    theme.palette.action.focusOpacity,
  );
  return (
    <Button
      sx={{
        minWidth: 0,
        backgroundColor: bgrColor,
        '&:hover': {
          backgroundColor: bgrColor,
        },
      }}
      {...props}
    />
  );
}
