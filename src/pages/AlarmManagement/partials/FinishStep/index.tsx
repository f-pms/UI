import { Box, Typography } from '~/components/MuiComponents';

export interface IFinishStepProps {}

export function FinishStep() {
  return (
    <Box sx={{ width: '600px' }}>
      <Typography variant='body2'>
        Kiểm tra toàn bộ thông tin cảnh báo và bấm{' '}
        <b>&quot;Tạo cảnh báo&quot;</b> để hoàn thành.
      </Typography>
    </Box>
  );
}
