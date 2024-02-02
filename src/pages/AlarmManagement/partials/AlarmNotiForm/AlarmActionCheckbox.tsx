import { Checkbox } from '@mui/material';

import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
} from '~/components/MuiComponents';

export interface IAlarmActionCheckboxProps {}

export function AlarmActionCheckbox() {
  return (
    <FormControl sx={{ width: '100%', mt: 4 }} variant='outlined'>
      <Typography
        color='text.strong'
        sx={{ fontWeight: 'bold' }}
        variant='subtitle2'
      >
        Chọn phương thức thông báo
      </Typography>
      {/* <Typography variant='body2'>
        Cho phép chọn nhiều phương thức thông báo
      </Typography> */}
      <FormGroup
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <FormControlLabel
          control={<Checkbox defaultChecked name={''} />}
          label={
            <Typography variant='body2'>
              Hiện cảnh báo ở trang <b>&quot;Giám sát&quot;</b>
            </Typography>
          }
        />
        <FormControlLabel
          control={<Checkbox name={''} />}
          label={
            <Typography variant='body2'>Gửi cảnh báo qua email</Typography>
          }
          sx={{ mr: 0 }}
        />
      </FormGroup>
    </FormControl>
  );
}
