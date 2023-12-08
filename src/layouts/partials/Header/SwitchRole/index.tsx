import * as React from 'react';

import { SelectChangeEvent } from '~/libs/mui';

import { FormControl, MenuItem, Select } from '~/components/MuiComponents';

export default function SwitchRole() {
  const [age, setAge] = React.useState('1');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl size='small' sx={{ mr: 2, minWidth: 120, fontSize: '8px' }}>
      <Select
        id='switch-role'
        sx={{ fontSize: '0.8rem' }}
        value={age}
        onChange={handleChange}
      >
        <MenuItem sx={{ fontSize: '0.8rem' }} value={1}>
          Lê Xuân Đại (Quản lí)
        </MenuItem>
        <MenuItem sx={{ fontSize: '0.8rem' }} value={2}>
          Lê Xuân Đại (Giám sát)
        </MenuItem>
        <MenuItem sx={{ fontSize: '0.8rem' }} value={3}>
          Lê Xuân Đại (Thợ máy)
        </MenuItem>
      </Select>
    </FormControl>
  );
}
