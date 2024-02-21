import { useFormContext } from 'react-hook-form';

import { IconButton, Stack } from '@mui/material';

import { AlarmActionType } from '~/types';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

import {
  DeleteOutlineOutlinedIcon,
  SaveAsOutlinedIcon,
} from '~/components/Icons';
import { FormControl, Typography } from '~/components/MuiComponents';

export interface IToastMethodProps {
  onRemoveAction: (value: AlarmActionType) => void;
}

export function ToastMethod({ onRemoveAction }: IToastMethodProps) {
  const { watch } = useFormContext<AlarmFormData>();

  const isUpdate = watch('isUpdate');

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
          <IconButton aria-label='update' color='green'>
            <SaveAsOutlinedIcon />
          </IconButton>
        )}
        <IconButton
          aria-label='delete'
          color='red'
          onClick={() => onRemoveAction(AlarmActionType.POPUP)}
        >
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
