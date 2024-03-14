import { InputWithLabel } from '~/components';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '~/components/MuiComponents';

export interface ICreateSensorAddressDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function CreateSensorAddressDialog(
  props: ICreateSensorAddressDialogProps,
) {
  const { open, setOpen } = props;

  const handleClose = () => setOpen(false);

  const handleAgree = () => {
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography
          color='text.strong'
          sx={{ fontWeight: 'bold' }}
          variant='h6'
        >
          Tạo mới địa chỉ biến
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant='body2'>
          Địa chỉ mới sẽ tự động cập nhật vào danh sách chọn{' '}
          <b>&quot;Địa chỉ biến&quot;</b>. Bạn có thể chọn địa chỉ biến này và
          tiếp tục cấu hình cảnh báo.
        </Typography>
        <Typography sx={{ fontStyle: 'italic', mt: 1, mb: 2 }} variant='body2'>
          (Lưu ý: Địa chỉ biến được định nghĩa theo mẫu{' '}
          <b>{`DB{dbblock}:{offset}:{dataType}`}</b>)
        </Typography>
        <InputWithLabel name={''} placeholder='DB00:00:00' />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          color='inherit'
          size='small'
          variant='outlined'
          onClick={handleClose}
        >
          Đóng
        </Button>
        <Button
          autoFocus
          size='small'
          variant='contained'
          onClick={handleAgree}
        >
          Thêm địa chỉ
        </Button>
      </DialogActions>
    </Dialog>
  );
}
