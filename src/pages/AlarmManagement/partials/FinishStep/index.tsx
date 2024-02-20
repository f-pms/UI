import { useFormContext } from 'react-hook-form';

import { AlarmActionType, AlarmSeverity, AlarmType } from '~/types';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

import { Box, Stack, Typography } from '~/components/MuiComponents';

export interface IFinishStepProps {}

export function FinishStep() {
  const { watch } = useFormContext<AlarmFormData>();

  const getConditionText = () => {
    const min = watch('info.min');
    const max = watch('info.max');

    if (min && max) {
      return `Từ ${min} đến ${max}`;
    } else if (min) {
      return `Lớn hơn hoặc bằng ${min}`;
    } else {
      return `Bé hơn hoặc bằng ${max}`;
    }
  };

  const ACTION_TYPE_TEXT = {
    [AlarmActionType.POPUP]: 'Hiện cảnh báo ở trang "Giám sát"',
    [AlarmActionType.EMAIL]: 'Gửi cảnh báo qua email',
  };

  const SEVERITY_TEXT = {
    [AlarmSeverity.URGENT]: 'Nghiêm trọng',
    [AlarmSeverity.HIGH]: 'Quan trọng',
    [AlarmSeverity.LOW]: 'Thông báo',
  };

  return (
    <Box sx={{ width: '600px' }}>
      <Typography sx={{ mb: 2 }} variant='body2'>
        Kiểm tra toàn bộ thông tin cảnh báo và bấm{' '}
        <b>&quot;Tạo cảnh báo&quot;</b> để hoàn thành.
      </Typography>
      <Box
        sx={(theme) => ({
          '& > div:nth-child(odd)': {
            background: theme.palette.grey[100],
          },
        })}
      >
        <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
          <Typography fontWeight='bold' sx={{ width: '240px' }} variant='body2'>
            Trạm
          </Typography>
          <Typography variant='body2'>{watch('info.station')?.name}</Typography>
        </Stack>
        <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
          <Typography fontWeight='bold' sx={{ width: '240px' }} variant='body2'>
            Địa chỉ biến
          </Typography>
          <Typography variant='body2'>
            {watch('info.sensorConfig')?.address}
          </Typography>
        </Stack>
        <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
          <Typography fontWeight='bold' sx={{ width: '240px' }} variant='body2'>
            Chu kì kiểm tra
          </Typography>
          <Typography variant='body2'>
            {watch('info.checkInterval')} (giây)
          </Typography>
        </Stack>
        <Stack
          alignItems='flex-start'
          direction='row'
          sx={{
            p: 2,
          }}
        >
          <Typography fontWeight='bold' sx={{ width: '240px' }} variant='body2'>
            Độ trễ
          </Typography>
          <Typography variant='body2'>
            {watch('info.timeDelay')} (giây)
          </Typography>
        </Stack>
        {watch('info.type') == AlarmType.CUSTOM && (
          <Stack
            alignItems='flex-start'
            direction='row'
            sx={{
              p: 2,
            }}
          >
            <Typography
              fontWeight='bold'
              sx={{ width: '240px' }}
              variant='body2'
            >
              Điều kiện cho phép
            </Typography>
            <Typography variant='body2'>{getConditionText()}</Typography>
          </Stack>
        )}

        <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
          <Typography fontWeight='bold' sx={{ width: '240px' }} variant='body2'>
            Nội dung cảnh báo
          </Typography>
          <Typography variant='body2'>{watch('noti.message')}</Typography>
        </Stack>
        <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
          <Typography fontWeight='bold' sx={{ width: '240px' }} variant='body2'>
            Mức độ
          </Typography>
          <Typography variant='body2'>
            {SEVERITY_TEXT[watch('info.severity')]}
          </Typography>
        </Stack>
        <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
          <Typography fontWeight='bold' sx={{ width: '240px' }} variant='body2'>
            Phương thức cảnh báo
          </Typography>
          <Box>
            {watch('noti.actions')?.map((item, index) => (
              <Typography
                key={item.actionType}
                sx={{ mt: index > 0 ? 1 : 0 }}
                variant='body2'
              >
                {ACTION_TYPE_TEXT[item.actionType]}
              </Typography>
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
