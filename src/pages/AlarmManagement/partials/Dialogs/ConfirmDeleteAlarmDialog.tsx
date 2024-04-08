import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useDeleteAlarmCondition } from '~/services/alarm-condition/mutation/useDeleteAlarmCondition';
import { useQueryAlarmConditions } from '~/services/alarm-condition/queries/useQueryAlarmConditions';
import { Alarm } from '~/types';

import { AlertDialog } from '~/components';
import { NotificationsOffOutlinedIcon } from '~/components/Icons';
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
} from '~/components/MuiComponents';

export interface IConfirmDeleteAlarmDialogProps {
  alarm: Alarm;
  closeMenu: () => void;
}

export function ConfirmDeleteAlarmDialog(
  props: IConfirmDeleteAlarmDialogProps,
) {
  const { alarm, closeMenu } = props;
  const { mutate, isSuccess, isError } = useDeleteAlarmCondition();
  const { refetch } = useQueryAlarmConditions({
    enabled: false,
  });
  const [open, setOpen] = useState(false);
  const handleAgree = () => {
    mutate(alarm.id);
  };

  useEffect(() => {
    if (isSuccess) {
      handleClose();
      refetch();
      toast.success('Xóa cấu hình cành báo thành công');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      handleClose();
      toast.error('Xóa cấu hình cảnh báo thất bại');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  const handleClose = () => {
    setOpen(false);
    closeMenu();
  };
  return (
    <>
      <MenuItem key='delete' onClick={() => setOpen(true)}>
        <ListItemIcon>
          <NotificationsOffOutlinedIcon sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText>Xóa cấu hình cảnh báo</ListItemText>
      </MenuItem>
      <AlertDialog
        color='warning'
        content='Cảnh báo sẽ không còn hiển thị trong hệ thống. Bạn có chắc chắn muốn tiếp tục không?'
        handleAgree={handleAgree}
        handleClose={handleClose}
        icon={NotificationsOffOutlinedIcon}
        open={open}
        title='Xóa cấu hình cảnh báo?'
      />
    </>
  );
}
