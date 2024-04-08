import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

import { Box, Divider } from '@mui/material';

import { AlarmActionType } from '~/types';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { PushMessageMethod } from '~/pages/AlarmManagement/partials/AlarmNotiForm/NotiMethodSelect/PushMessageMethod';
import { SendEmailMethod } from '~/pages/AlarmManagement/partials/AlarmNotiForm/NotiMethodSelect/SendEmailMethod';
import { ToastMethod } from '~/pages/AlarmManagement/partials/AlarmNotiForm/NotiMethodSelect/ToastMethod';

export interface ISelectedMethodListProps {}

export function SelectedMethodList() {
  const { setValue, watch, clearErrors } = useFormContext<AlarmFormData>();
  const selectedOptions = watch('noti.actions');

  const handleRemoveAction = useCallback(
    (value: AlarmActionType) => {
      setValue(
        'noti.actions',
        selectedOptions.filter((option) => option.type !== value),
      );
      if (value === AlarmActionType.EMAIL) {
        clearErrors('noti.actions');
      }
    },
    [selectedOptions, setValue, clearErrors],
  );

  const methodListItem = {
    [AlarmActionType.POPUP]: (
      <ToastMethod onRemoveAction={handleRemoveAction} />
    ),
    [AlarmActionType.EMAIL]: (
      <SendEmailMethod onRemoveAction={handleRemoveAction} />
    ),
    [AlarmActionType.PUSH_MESSAGE]: (
      <PushMessageMethod onRemoveAction={handleRemoveAction} />
    ),
  };

  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.grey[100],
        p: selectedOptions.length ? 2 : 0,
        borderRadius: '4px',
      })}
    >
      {selectedOptions.map((item, index) => (
        <Box key={item.type}>
          {methodListItem[item.type]}
          {index !== selectedOptions.length - 1 && <Divider sx={{ my: 2 }} />}
        </Box>
      ))}
    </Box>
  );
}
