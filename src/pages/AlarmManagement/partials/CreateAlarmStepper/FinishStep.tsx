import { useFormContext } from 'react-hook-form';

import { AlarmActionType, AlarmSeverity, AlarmType } from '~/types';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

import { Box, Stack, Typography } from '~/components/MuiComponents';

export interface IFinishStepProps {}

export function FinishStep() {
  const { getValues } = useFormContext<AlarmFormData>();

  const getConditionText = () => {
    const min = getValues('info.min');
    const max = getValues('info.max');

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
    [AlarmActionType.PUSH_MESSAGE]: 'Gửi cảnh báo qua tới thiết bị di động',
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
          '& > div:nth-of-type(odd)': {
            background: theme.palette.grey[100],
          },
        })}
      >
        <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
          <Typography fontWeight='bold' sx={{ width: '240px' }} variant='body2'>
            Trạm
          </Typography>
          <Typography variant='body2'>
            {getValues('info.station')?.name}
          </Typography>
        </Stack>
        <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
          <Typography fontWeight='bold' sx={{ width: '240px' }} variant='body2'>
            Địa chỉ biến
          </Typography>
          <Typography variant='body2'>
            {getValues('info.sensorConfig')?.address}
          </Typography>
        </Stack>
        <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
          <Typography fontWeight='bold' sx={{ width: '240px' }} variant='body2'>
            Chu kì kiểm tra
          </Typography>
          <Typography variant='body2'>
            {getValues('info.checkInterval')} (giây)
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
            {getValues('info.timeDelay')} (giây)
          </Typography>
        </Stack>
        {getValues('info.type') == AlarmType.CUSTOM && (
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
          <Typography variant='body2'>{getValues('noti.message')}</Typography>
        </Stack>
        <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
          <Typography fontWeight='bold' sx={{ width: '240px' }} variant='body2'>
            Mức độ
          </Typography>
          <Typography variant='body2'>
            {SEVERITY_TEXT[getValues('info.severity')]}
          </Typography>
        </Stack>
        <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
          <Typography fontWeight='bold' sx={{ width: '240px' }} variant='body2'>
            Phương thức cảnh báo
          </Typography>
          <Box>
            {getValues('noti.actions')?.map((item, index) => (
              <Typography
                key={item.type}
                sx={{ mt: index > 0 ? 1 : 0 }}
                variant='body2'
              >
                {ACTION_TYPE_TEXT[item.type]}
              </Typography>
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
