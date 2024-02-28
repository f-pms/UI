import { AlertDialog } from '~/components';
import { PublishedWithChangesOutlinedIcon } from '~/components/Icons';

export interface IAlertChangeModeDialogProps {
  open: boolean;
  handleClose: () => void;
  handleAgree: () => void;
  isAdvanced: boolean;
}
export function AlertChangeModeDialog(props: IAlertChangeModeDialogProps) {
  const { open, handleClose, handleAgree, isAdvanced } = props;

  const alertTitle = isAdvanced
    ? 'Chuyển sang "Thiết lập cơ bản"'
    : 'Chuyển sang "Thiết lập nâng cao"';

  return (
    <AlertDialog
      content='Khi bạn chuyển đổi chế độ thiết lập, tất cả thông tin đã nhập sẽ bị
           xóa và không thể khôi phục. Bạn có chắc chắn muốn tiếp tục không?'
      handleAgree={handleAgree}
      handleClose={handleClose}
      icon={PublishedWithChangesOutlinedIcon}
      open={open}
      title={alertTitle}
    />
  );
}
