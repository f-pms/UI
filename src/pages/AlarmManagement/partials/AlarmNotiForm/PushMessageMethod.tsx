import { useFormContext } from 'react-hook-form';

import { AlarmActionType } from '~/types';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { useUpdateAction } from '~/pages/AlarmManagement/hooks/useUpdateAction';

import {
  DeleteOutlineOutlinedIcon,
  SaveAsOutlinedIcon,
} from '~/components/Icons';
import {
  Box,
  FormControl,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '~/components/MuiComponents';

export interface IPushMessageMethodProps {
  onRemoveAction: (value: AlarmActionType) => void;
}

export function PushMessageMethod({ onRemoveAction }: IPushMessageMethodProps) {
  const { getValues } = useFormContext<AlarmFormData>();
  const { handleCreateAction, handleDeleteAction, disabled } = useUpdateAction({
    actionType: AlarmActionType.PUSH_MESSAGE,
    onRemoveAction,
  });
  const isUpdate = getValues('isUpdate');

  return (
    <Stack
      component='li'
      direction='row'
      justifyContent='space-between'
      spacing={4}
    >
      <Box>
        <FormControl sx={{ width: '100%' }} variant='outlined'>
          <Typography sx={{ fontWeight: 'bold' }} variant='subtitle2'>
            Cảnh báo tới thiết bị di động thông qua ứng dụng <b>PMS-Mobile</b>
          </Typography>
          <Typography variant='body2'>
            Tất cả mọi người đã cài đặt ứng dụng PMS-Mobile đều nhận được cảnh
            báo
          </Typography>
        </FormControl>
      </Box>

      <Stack alignItems='center' direction='row' justifyContent='center'>
        {isUpdate && (
          <Tooltip title='Lưu'>
            <IconButton
              aria-label='update'
              color='green'
              disabled={disabled}
              onClick={() => handleCreateAction()}
            >
              <SaveAsOutlinedIcon />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title='Xóa'>
          <IconButton
            aria-label='delete'
            color='red'
            onClick={handleDeleteAction}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
}
