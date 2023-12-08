import { Box, ButtonBase, ButtonProps, useTheme } from '~/libs/mui';

interface ICustomBorderButtonProps extends Omit<ButtonProps, 'color'> {
  disableBorder?: boolean;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

export function CustomBorderButton(props: ICustomBorderButtonProps) {
  const { disableBorder = false, children, ...rest } = props;
  const theme = useTheme();
  return (
    <ButtonBase
      disableRipple
      {...rest}
      sx={{
        position: 'relative',
        overflow: 'visible',
        width: '100%',
        height: '100%',
        minWidth: '32px',
        maxWidth: '100%',

        borderRadius: 'unset',
        boxSizing: 'border-box',
        boxShadow: disableBorder
          ? 'unset'
          : `inset 0 0 0 2px ${theme.palette[props.color || 'primary'].main}`,

        '&:before, &:after': {
          display: disableBorder ? 'none' : 'block',
          content: '""',
          position: 'absolute',
          background: '#fff',
        },

        '&:before': {
          width: 'calc(100%)',
          height: 'calc(100% - 16px)',
          top: '8px',
          left: '0',
        },

        '&:after': {
          width: 'calc(100% - 16px)',
          height: 'calc(100%)',
          top: '0',
          left: '8px',
        },

        '&:hover': {
          cursor: 'pointer',
        },
      }}
    >
      <Box
        sx={{
          zIndex: 1,
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </Box>
    </ButtonBase>
  );
}
