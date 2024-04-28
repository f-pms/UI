import { SelectChangeEvent } from '@mui/material';

import { DataTypeEnum } from '~/services/blueprint';

import {
  FormControl,
  MenuItem,
  Select,
  Typography,
} from '~/components/MuiComponents';

const dataTypeOptions = [
  {
    value: DataTypeEnum.REAL,
    label: DataTypeEnum.REAL,
  },
  {
    value: DataTypeEnum.INT,
    label: DataTypeEnum.INT,
  },
];

export interface DataTypeSelectProps {
  dataType: DataTypeEnum;
  handleChange: (event: SelectChangeEvent) => void;
}

export default function DataTypeSelect(props: DataTypeSelectProps) {
  const { dataType, handleChange } = props;

  return (
    <FormControl sx={{ width: '100%' }}>
      <Typography variant='body2'>Kiểu dữ liệu</Typography>
      <Select
        displayEmpty
        size='small'
        sx={{ fontSize: '14px' }}
        value={dataType}
        onChange={handleChange}
      >
        {dataTypeOptions.map((option) => (
          <MenuItem
            key={option.value}
            sx={{ fontSize: '14px' }}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
