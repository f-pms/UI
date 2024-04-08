import { useEffect, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Checkbox, SelectChangeEvent, Tooltip } from '~/libs/mui';
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

const names = [
  'huybnse150819@fpt.edu.vn',
  'huynnse150807@fpt.edu.vn',
  'kienttse151340@fpt.edu.vn',
  'dailxse150683@fpt.edu.vn',
  'thinhltse151082@fpt.edu.vn',
  'huybui479@gmail.com',
  'nguyennhathuy.orit@gmail.com',
  'kien123456k@gmail.com',
  'lxdai0307@gmail.com',
  'letienthinh0109@gmail.com',
];

export interface ISendEmailMethodProps {
  onRemoveAction: (value: AlarmActionType) => void;
}

export function SendEmailMethod({ onRemoveAction }: ISendEmailMethodProps) {
  const [personNames, setPersonNames] = useState<string[]>([]);
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
    return !areArraysEqual(currentAction?.recipients ?? [], personNames);
  }, [currentAction?.recipients, personNames]);

  const handleChange = (event: SelectChangeEvent<typeof personNames>) => {
    const users = event.target.value as string[];

    setPersonNames(users);

    const actions = getValues('noti.actions');
    const newActions = actions.map((action) => {
      if (action.type === AlarmActionType.EMAIL) {
        return { ...action, recipients: users };
      }
      return action;
    });
    setValue('noti.actions', newActions);

    if (users.length) {
      clearErrors('noti.actions');
    }
  };

  const users = useMemo(() => {
    return (
      getValues('noti.actions').find(
        (action) => action.type === AlarmActionType.EMAIL,
      )?.recipients ?? []
    );
  }, [getValues]);

  useEffect(() => {
    setPersonNames(users);
  }, [users]);

  const handleClickUpdate = () => {
    if (!disabled) {
      handleCreateAction(personNames);
    } else {
      handleUpdateAction(personNames);
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
                label={`${personNames.length} đã chọn`}
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
          value={personNames}
          onChange={handleChange}
        >
          {names.map((name) => (
            <MenuItem key={name} sx={{ py: 0 }} value={name}>
              <Checkbox checked={personNames.indexOf(name) > -1} />
              <ListItemText
                primary={<Typography variant='body2'>{name}</Typography>}
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
