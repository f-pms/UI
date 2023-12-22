import { Chip, ChipProps } from '@mui/material';

import { useSoftColor } from '~/hooks';
import { Color } from '~/types';

export interface ISoftChipProps extends Omit<ChipProps, 'variant' | 'color'> {
  color?: Color;
  shape?: 'square' | 'rounded';
}

export function SoftChip(props: ISoftChipProps) {
  const { color = 'primary', shape = 'rounded' } = props;
  const { bgrColor } = useSoftColor(color);

  return (
    <Chip
      sx={(theme) => ({
        minWidth: props.label ? 'unset' : '48px',
        minHeight: props.label ? 'unset' : '48px',
        borderRadius: shape === 'square' ? '4px' : '16px',
        backgroundColor: bgrColor,
        color: theme.palette[color].main,
        '& .MuiChip-label': {
          padding: props.label ? '0 12px' : '0',
        },
        '& .MuiChip-icon': {
          color: theme.palette[color].main,
          marginLeft: props.label ? '6px' : '0',
          marginRight: props.label ? '-5px' : '0',
        },
      })}
      {...props}
    />
  );
}
