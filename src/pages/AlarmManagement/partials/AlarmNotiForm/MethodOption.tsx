import { AlarmActionType } from '~/types';

import { useNotiMethod } from '~/pages/AlarmManagement/hooks/useNotiMethod';

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
  actionType: AlarmActionType;
  title: string;
  description: string;
}

export function MethodOption(props: IToastMethodProps) {
  const { onRemoveAction, actionType, title, description } = props;
  const { handleCreateAction, handleDeleteAction, disabled, isUpdate } =
    useNotiMethod({
      onRemoveAction,
      actionType: actionType,
    });
  return (
    <Stack
      component='li'
      direction='row'
      justifyContent='space-between'
      spacing={4}
    >
      <FormControl sx={{ width: '100%' }} variant='outlined'>
        <Typography sx={{ fontWeight: 'bold' }} variant='subtitle2'>
          {title}
        </Typography>
        <Typography variant='body2'>{description}</Typography>
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
