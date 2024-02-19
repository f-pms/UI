import { SelectChangeEvent } from '@mui/material';

import { FormControl, MenuItem, Select } from '~/components/MuiComponents';

export enum TypeCondition {
  RANGE = 'Range',
  LESS_THAN = 'LessThan',
  GREATER_THAN = 'GreaterThan',
}

export interface ITypeConditionSelectProps {
  typeCondition: TypeCondition;
  handleChange: (event: SelectChangeEvent) => void;
}

export function TypeConditionSelect(props: ITypeConditionSelectProps) {
  const { typeCondition, handleChange } = props;
  return (
    <FormControl sx={{ m: 1, width: '100%' }}>
      <Select
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        size='small'
        sx={{ fontSize: '14px' }}
        value={typeCondition}
        onChange={handleChange}
      >
        <MenuItem sx={{ fontSize: '14px' }} value={TypeCondition.RANGE}>
          Trong khoảng
        </MenuItem>
        <MenuItem sx={{ fontSize: '14px' }} value={TypeCondition.GREATER_THAN}>
          Lớn hơn hoặc bằng
        </MenuItem>
        <MenuItem sx={{ fontSize: '14px' }} value={TypeCondition.LESS_THAN}>
          Nhỏ hơn hoặc bằng
        </MenuItem>
      </Select>
    </FormControl>
  );
}
