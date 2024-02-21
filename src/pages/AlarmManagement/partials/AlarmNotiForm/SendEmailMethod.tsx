import { useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Checkbox, SelectChangeEvent } from '~/libs/mui';
import { AlarmActionType } from '~/types';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

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
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export interface ISendEmailMethodProps {
  onRemoveAction: (value: AlarmActionType) => void;
}

export function SendEmailMethod({ onRemoveAction }: ISendEmailMethodProps) {
  const [personNames, setPersonNames] = useState<string[]>([]);
  const { setValue, watch } = useFormContext<AlarmFormData>();

  const isUpdate = watch('isUpdate');

  const handleChange = (event: SelectChangeEvent<typeof personNames>) => {
    const users = event.target.value as string[];

    setPersonNames(users);

    const actions = watch('noti.actions');
    const newActions = actions.map((action) => {
      if (action.actionType === AlarmActionType.EMAIL) {
        return { ...action, recipientsId: users };
      }
      return action;
    });
    setValue('noti.actions', newActions);
  };

  const users = useMemo(() => {
    return (
      watch('noti.actions').find(
        (action) => action.actionType === AlarmActionType.EMAIL,
      )?.recipientsId ?? []
    );
  }, [watch]);

  useMemo(() => {
    setPersonNames(users);
  }, [users]);

  return (
    <Stack direction='row' justifyContent='space-between' spacing={4}>
      <FormControl sx={{ mt: 2, width: '100%' }}>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          Thông báo qua email
        </Typography>
        <Typography variant='body2'>
          Những người có trong danh sách sẽ được cảnh báo qua email
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
          <IconButton aria-label='update' color='green'>
            <SaveAsOutlinedIcon />
          </IconButton>
        )}
        <IconButton
          aria-label='delete'
          color='red'
          onClick={() => onRemoveAction(AlarmActionType.EMAIL)}
        >
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
