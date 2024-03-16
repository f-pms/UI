import { Checkbox, Radio, RadioGroup } from '@mui/material';

import { DateRangePicker } from '~/components/DateRangePicker';
import { FilterAltOutlinedIcon } from '~/components/Icons';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '~/components/MuiComponents';

export interface IHistoricalReportFilterProps {}

export function HistoricalReportFilter() {
  return (
    <Box sx={{ width: '320px' }}>
      <FormControl component='fieldset' sx={{ mb: 1 }} variant='standard'>
        <Typography
          color='text.strong'
          sx={{ fontWeight: 'bold' }}
          variant='subtitle2'
        >
          Loại chỉ số điện:
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name='gilad' />}
            label={
              <Typography variant='body2'>Chỉ số điện chế biến dăm</Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox name='jason' />}
            label={
              <Typography variant='body2'>
                Chỉ số điện bán thành phần
              </Typography>
            }
          />
        </FormGroup>
      </FormControl>
      <Divider />
      <Box sx={{ my: 2 }}>
        <Typography
          color='text.strong'
          sx={{ fontWeight: 'bold', mb: 1 }}
          variant='subtitle2'
        >
          Khoảng thời gian báo cáo:
        </Typography>
        <DateRangePicker />
      </Box>
      <Divider />
      <FormControl sx={{ my: 2 }}>
        <Typography
          color='text.strong'
          sx={{ fontWeight: 'bold' }}
          variant='subtitle2'
        >
          Sắp xếp theo:
        </Typography>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'
        >
          <FormControlLabel
            control={<Radio />}
            label={<Typography variant='body2'>Loại chỉ số điện</Typography>}
            value='female'
          />
          <FormControlLabel
            control={<Radio />}
            label={
              <Typography variant='body2'>Thời gian xuất báo cáo</Typography>
            }
            value='male'
          />
        </RadioGroup>
      </FormControl>
      <Divider />
      <FormControl sx={{ my: 2 }}>
        <Typography
          color='text.strong'
          sx={{ fontWeight: 'bold' }}
          variant='subtitle2'
        >
          Thứ tự sắp xếp:
        </Typography>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'
        >
          <FormControlLabel
            control={<Radio />}
            label={<Typography variant='body2'>Sắp xếp tăng dần</Typography>}
            value='female'
          />
          <FormControlLabel
            control={<Radio />}
            label={<Typography variant='body2'>Sắp xếp giảm dần</Typography>}
            value='male'
          />
        </RadioGroup>
      </FormControl>
      <Stack alignItems='center' direction='row' justifyContent='space-between'>
        <Button variant='outlined'>Xóa</Button>
        <Button startIcon={<FilterAltOutlinedIcon />} variant='contained'>
          Lọc báo cáo
        </Button>
      </Stack>
    </Box>
  );
}
