import { useFormContext } from 'react-hook-form';

import { AlarmActionType } from '~/types';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { useUpdateAction } from '~/pages/AlarmManagement/hooks/useUpdateAction';

import {
  DeleteOutlineOutlinedIcon,
  SaveAsOutlinedIcon,
} from '~/components/Icons';
import {
  FormControl,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '~/components/MuiComponents';

export interface IToastMethodProps {
  onRemoveAction: (value: AlarmActionType) => void;
}

export function ToastMethod({ onRemoveAction }: IToastMethodProps) {
  const { getValues } = useFormContext<AlarmFormData>();
  const { handleCreateAction, handleDeleteAction, disabled } = useUpdateAction({
    actionType: AlarmActionType.POPUP,
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
      <FormControl sx={{ width: '100%' }} variant='outlined'>
        <Typography sx={{ fontWeight: 'bold' }} variant='subtitle2'>
          Hiện cảnh báo ở trang <b>&quot;Giám sát&quot;</b>
        </Typography>
        <Typography variant='body2'>
          Tất cả mọi người đều có thể xem cảnh báo này
        </Typography>
      </FormControl>
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
