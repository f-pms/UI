import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useDeleteAlarmCondition } from '~/services/alarm-condition/mutation/useDeleteAlarmCondition';
import { useQueryAlarmConditions } from '~/services/alarm-condition/queries/useQueryAlarmConditions';
import { Alarm } from '~/types';

import { AlertDialog } from '~/components';
import {
  DeleteOutlineOutlinedIcon,
  NotificationsOffOutlinedIcon,
} from '~/components/Icons';
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
      toast.success('Xóa cấu hình cành báo thành công.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      handleClose();
      toast.error(
        'Xóa cấu hình cảnh báo thất bại, vui lòng kiểm tra và thử lại.',
      );
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
          <DeleteOutlineOutlinedIcon sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText>Xóa cấu hình cảnh báo</ListItemText>
      </MenuItem>
      <AlertDialog
        color='warning'
        content='Lịch sử cảnh báo của cấu hình này sẽ không còn hiển thị trong hệ thống. Bạn có chắc chắn muốn tiếp tục không?'
        handleAgree={handleAgree}
        handleClose={handleClose}
        icon={DeleteOutlineOutlinedIcon}
        open={open}
        title='Xóa cấu hình cảnh báo?'
      />
    </>
  );
}
