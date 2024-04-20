import { useEffect, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Checkbox, SelectChangeEvent, Tooltip } from '~/libs/mui';
import { useQueryUsers } from '~/services/user/queries/useQueryUsers';
import { AlarmActionType } from '~/types';
import { areArraysEqual } from '~/utils/areArraysEqual';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import { useAlarmAction } from '~/pages/AlarmManagement/hooks/useAlarmAction';

import { SoftChip } from '~/components';
import {
  DeleteOutlineOutlinedIcon,
  SaveAsOutlinedIcon,
} from '~/components/Icons';
import {
  FormControl,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from '~/components/MuiComponents';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const MAX_USER = 999;
export interface ISendEmailMethodProps {
  onRemoveAction: (value: AlarmActionType) => void;
}

export function SendEmailMethod({
  onRemoveAction,
}: Readonly<ISendEmailMethodProps>) {
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const { data: users } = useQueryUsers({ page: 1, size: MAX_USER });
  const { setValue, getValues, clearErrors } = useFormContext<AlarmFormData>();

  const {
    handleCreateAction,
    handleDeleteAction,
    disabled,
    currentAction,
    handleUpdateAction,
  } = useAlarmAction({
    actionType: AlarmActionType.EMAIL,
    onRemoveAction,
  });

  const isUpdate = getValues('isUpdate');
  const isUpdateAction = useMemo(() => {
    return !areArraysEqual(currentAction?.recipients ?? [], selectedEmails);
  }, [currentAction?.recipients, selectedEmails]);

  const handleChange = (event: SelectChangeEvent<typeof selectedEmails>) => {
    const newValues = event.target.value as string[];

    setSelectedEmails(newValues);

    const actions = getValues('noti.actions');
    const newActions = actions.map((action) => {
      if (action.type === AlarmActionType.EMAIL) {
        return { ...action, recipients: newValues };
      }
      return action;
    });
    setValue('noti.actions', newActions);

    if (newValues.length) {
      clearErrors('noti.actions');
    }
  };

  const emails = useMemo(() => {
    return (
      getValues('noti.actions').find(
        (action) => action.type === AlarmActionType.EMAIL,
      )?.recipients ?? []
    );
  }, [getValues]);

  useEffect(() => {
    setSelectedEmails(emails);
  }, [emails]);

  const handleClickUpdate = () => {
    if (!disabled) {
      handleCreateAction(selectedEmails);
    } else {
      handleUpdateAction(selectedEmails);
    }
  };

  return (
    <Stack direction='row' justifyContent='space-between' spacing={4}>
      <FormControl sx={{ mt: 2, width: '100%' }}>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          Thông báo qua email
        </Typography>
        <Typography variant='body2'>
          Danh sách những người sẽ nhận được cảnh báo qua email (vui lòng chọn
          ít nhất một người)
        </Typography>
        <Select
          multiple
          MenuProps={MenuProps}
          endAdornment={
            <InputAdornment position='end'>
              <SoftChip
                label={`${selectedEmails.length} đã chọn`}
                shape='square'
                size='small'
                style={{ marginRight: '16px' }}
              />
            </InputAdornment>
          }
          input={
            <OutlinedInput
              inputProps={{ 'aria-label': 'Without label' }}
              size='small'
              sx={{ fontSize: '14px', mt: 1 }}
            />
          }
          renderValue={(selected) => selected.join(', ')}
          value={selectedEmails}
          onChange={handleChange}
        >
          {users?.content?.map((user) => (
            <MenuItem key={user.id} sx={{ py: 0 }} value={user.email}>
              <Checkbox checked={selectedEmails.indexOf(user.email) > -1} />
              <ListItemText
                primary={
                  <Typography variant='body2'>{user.fullName}</Typography>
                }
                sx={{ width: '140px', flex: 'none' }}
              />
              <ListItemText
                primary={
                  <Typography color='text.secondary' variant='caption'>
                    {user.email}
                  </Typography>
                }
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Stack alignItems='center' direction='row' justifyContent='center'>
        {isUpdate && (
          <Tooltip title='Lưu'>
            <IconButton
              aria-label='update'
              color='green'
              disabled={disabled && !isUpdateAction}
              onClick={handleClickUpdate}
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
