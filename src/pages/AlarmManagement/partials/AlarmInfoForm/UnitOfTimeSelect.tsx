import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';

export enum UnitOfTime {
  Second = 'Second',
  Minute = 'Minute',
}

export interface IUnitOfTimeSelectProps {
  unit: UnitOfTime;
  handleUnitChange: (event: SelectChangeEvent) => void;
}

export function UnitOfTimeSelect(props: IUnitOfTimeSelectProps) {
  const { unit, handleUnitChange } = props;
  return (
    <FormControl variant='standard'>
      <Select
        defaultValue={UnitOfTime.Second}
        size='small'
        sx={{
          fontSize: '14px',
          '& > .MuiSvgIcon-root': {
            display: 'none',
          },
          '& > .MuiSelect-select': {
            pr: '0px !important',
          },
        }}
        value={unit}
        onChange={handleUnitChange}
      >
        <MenuItem value={UnitOfTime.Second}>
          <Typography variant='body2'>(giây)</Typography>
        </MenuItem>
        <MenuItem value={UnitOfTime.Minute}>
          <Typography variant='body2'>(phút)</Typography>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
