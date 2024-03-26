import { useState } from 'react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

import {
  AlarmActionType,
  AlarmHistory,
  AlarmSeverity,
  AlarmType,
} from '~/types';

import { SoftChip } from '~/components';
import { ContentPasteSearchOutlinedIcon } from '~/components/Icons';
import { List } from '~/components/MuiComponents';

export interface IAlarmHistoryDetailsDialogProps {
  alarmHistory: AlarmHistory;
}

export default function AlarmHistoryDetailsDialog(
  props: IAlarmHistoryDetailsDialogProps,
) {
  const { condition, sentAt, solvedAt } = props.alarmHistory;
  const [open, setOpen] = useState(false);

  const getConditionText = () => {
    const min = condition.min;
    const max = condition.max;

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
    [AlarmActionType.PUSH_MESSAGE]: 'Gửi cảnh báo tới thiết bị di động',
  };

  const SEVERITY_TEXT = {
    [AlarmSeverity.URGENT]: 'Nghiêm trọng',
    [AlarmSeverity.HIGH]: 'Quan trọng',
    [AlarmSeverity.LOW]: 'Thông báo',
  };

  return (
    <>
      <Tooltip placement='top' title='Xem chi tiết'>
        <IconButton size='small' onClick={() => setOpen(true)}>
          <ContentPasteSearchOutlinedIcon sx={{ fontSize: '20px' }} />
        </IconButton>
      </Tooltip>
      <Dialog maxWidth='md' open={open} onClose={() => setOpen(false)}>
        <DialogContent sx={{ pt: 2, px: 3, width: '900px' }}>
          <Stack
            alignItems='center'
            direction='row'
            justifyContent='space-between'
          >
            <Box>
              <Typography
                color='text.strong'
                sx={{ fontWeight: 'bold' }}
                variant='h6'
              >
                Chi tiết cảnh báo
              </Typography>
              <Typography variant='body2'>
                Bao gồm thông tin cảnh báo và phương thức gửi cảnh báo
              </Typography>
            </Box>
            <SoftChip
              label={
                condition.type == AlarmType.PREDEFINED
                  ? 'Thiết lập cơ bản'
                  : 'Thiết lập nâng cao'
              }
            />
          </Stack>
          <Box>
            <Typography
              fontWeight='bold'
              mb={1}
              mt={3}
              sx={{ width: '240px' }}
              variant='subtitle1'
            >
              Thông tin cảnh báo
            </Typography>
            <Box
              sx={(theme) => ({
                '& > div:nth-of-type(odd)': {
                  background: theme.palette.grey[100],
                },
              })}
            >
              <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
                <Typography
                  fontWeight='bold'
                  sx={{ width: '240px' }}
                  variant='body2'
                >
                  Cảnh báo lúc
                </Typography>
                <Typography variant='body2'>
                  {format(new Date(sentAt), 'EEEE, dd/MM/yyyy HH:mm:ss', {
                    locale: vi,
                  })}
                </Typography>
              </Stack>
              <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
                <Typography
                  fontWeight='bold'
                  sx={{ width: '240px' }}
                  variant='body2'
                >
                  Kết thúc cảnh báo
                </Typography>
                <Typography variant='body2'>
                  {format(new Date(solvedAt), 'EEEE, dd/MM/yyyy HH:mm:ss', {
                    locale: vi,
                  })}
                </Typography>
              </Stack>
              <Stack alignItems='flex-start' sx={{ p: 2 }}>
                <Typography
                  fontWeight='bold'
                  sx={{ width: '240px', mb: 1 }}
                  variant='body2'
                >
                  Phương thức cảnh báo
                </Typography>
                <Box sx={{ width: '100%' }}>
                  {condition.actions.map((item, index) => (
                    <>
                      <Box key={item.type} sx={{ mt: index > 0 ? 1 : 0 }}>
                        <Stack
                          alignItems='flex-start'
                          direction='row'
                          sx={{ pb: 1, pl: 4 }}
                        >
                          <Typography sx={{ width: '226px' }} variant='body2'>
                            Phương thức:
                          </Typography>
                          <Typography variant='body2'>
                            {ACTION_TYPE_TEXT[item.type]}
                          </Typography>
                        </Stack>
                        <Stack
                          alignItems='flex-start'
                          direction='row'
                          sx={{ pb: 1, pl: 4 }}
                        >
                          <Typography sx={{ width: '226px' }} variant='body2'>
                            Nội dung cảnh báo:
                          </Typography>
                          <Typography variant='body2'>
                            {item.message}
                          </Typography>
                        </Stack>
                        <Stack
                          alignItems='flex-start'
                          direction='row'
                          sx={{ pb: 1, pl: 4 }}
                        >
                          <Typography sx={{ width: '226px' }} variant='body2'>
                            Người nhận:
                          </Typography>
                          {item.type === AlarmActionType.POPUP ? (
                            <Typography variant='body2'>
                              Tất cả người dùng sẽ nhận được cảnh báo
                            </Typography>
                          ) : (
                            <List>
                              {item.recipients?.map((value, index) => (
                                <ListItem key={value} disableGutters>
                                  <ListItemText
                                    primary={`${index + 1}. ${value}`}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          )}
                        </Stack>
                      </Box>
                      {index !== condition.actions.length - 1 && (
                        <Divider sx={{ my: 1 }} />
                      )}
                    </>
                  ))}
                </Box>
              </Stack>
            </Box>
            <Typography
              fontWeight='bold'
              mb={1}
              mt={3}
              sx={{ width: '240px' }}
              variant='subtitle1'
            >
              Cấu hình cảnh báo
            </Typography>
            <Box
              sx={(theme) => ({
                '& > div:nth-of-type(odd)': {
                  background: theme.palette.grey[100],
                },
              })}
            >
              <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
                <Typography
                  fontWeight='bold'
                  sx={{ width: '240px' }}
                  variant='body2'
                >
                  Trạm
                </Typography>
                <Typography variant='body2'>
                  {condition.blueprint?.name}
                </Typography>
              </Stack>
              <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
                <Typography
                  fontWeight='bold'
                  sx={{ width: '240px' }}
                  variant='body2'
                >
                  Địa chỉ biến
                </Typography>
                <Typography variant='body2'>
                  {condition.sensorConfiguration.address}
                </Typography>
              </Stack>
              <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
                <Typography
                  fontWeight='bold'
                  sx={{ width: '240px' }}
                  variant='body2'
                >
                  Chu kì kiểm tra
                </Typography>
                <Typography variant='body2'>
                  {condition.checkInterval} (giây)
                </Typography>
              </Stack>
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
                  Độ trễ
                </Typography>
                <Typography variant='body2'>
                  {condition.timeDelay} (giây)
                </Typography>
              </Stack>
              {condition.type == AlarmType.CUSTOM && (
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
              {/* 
              <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
                <Typography
                  fontWeight='bold'
                  sx={{ width: '240px' }}
                  variant='body2'
                >
                  Nội dung cảnh báo
                </Typography>
                <Typography variant='body2'>
                  {getValues('noti.message')}
                </Typography>
              </Stack> */}
              <Stack alignItems='flex-start' direction='row' sx={{ p: 2 }}>
                <Typography
                  fontWeight='bold'
                  sx={{ width: '240px' }}
                  variant='body2'
                >
                  Mức độ
                </Typography>
                <Typography variant='body2'>
                  {SEVERITY_TEXT[condition.severity]}
                </Typography>
              </Stack>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ borderTop: 1, borderColor: 'divider' }}>
          <Stack
            alignItems='center'
            direction='row'
            justifyContent='space-between'
          >
            <Button
              color='inherit'
              variant='contained'
              onClick={() => setOpen(false)}
            >
              Đóng
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
}
