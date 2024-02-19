import { useState } from 'react';

import {
  Checkbox,
  InputAdornment,
  ListItemText,
  SelectChangeEvent,
  Typography,
} from '@mui/material';

import { SoftChip } from '~/components';
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
} from '~/components/MuiComponents';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export interface IUserMultiSelectProps {}

export function UserMultiSelect() {
  const [personNames, setPersonNames] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personNames>) => {
    const {
      target: { value },
    } = event;
    setPersonNames(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <FormControl sx={{ mt: 2, width: '100%' }}>
      <Typography
        color='text.strong'
        sx={{ fontWeight: 'bold' }}
        variant='subtitle2'
      >
        Chọn danh sách người nhận
      </Typography>
      <Typography variant='body2'>
        Những người có trong danh sách sẽ nhận được cảnh báo qua email khi{' '}
        <b>&quot;Gửi cảnh báo qua email&quot;</b> được chọn
      </Typography>
      <Select
        multiple
        MenuProps={MenuProps}
        endAdornment={
          <InputAdornment position='end'>
            <SoftChip
              label={`${personNames.length} đã chọn`}
              shape='square'
              size='small'
              style={{ marginRight: '16px' }}
            />
          </InputAdornment>
        }
        input={
          <OutlinedInput
            inputProps={{ 'aria-label': 'Without label' }}
            size='small'
            sx={{ fontSize: '14px', mt: 1 }}
          />
        }
        renderValue={(selected) => selected.join(', ')}
        value={personNames}
        onChange={handleChange}
      >
        {names.map((name) => (
          <MenuItem key={name} sx={{ py: 0 }} value={name}>
            <Checkbox checked={personNames.indexOf(name) > -1} />
            <ListItemText
              primary={<Typography variant='body2'>{name}</Typography>}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
