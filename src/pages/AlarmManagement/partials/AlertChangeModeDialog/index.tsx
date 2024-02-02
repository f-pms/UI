import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '~/components/MuiComponents';

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
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id='alert-dialog-title'>
        <Typography
          color='text.strong'
          sx={{ fontWeight: 'bold' }}
          variant='h6'
        >
          {alertTitle}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          <Typography variant='body2'>
            Khi bạn chuyển đổi chế độ thiết lập, tất cả thông tin đã nhập sẽ bị
            xóa và không thể khôi phục. Bạn có chắc chắn muốn tiếp tục không?
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          color='inherit'
          size='small'
          variant='outlined'
          onClick={handleClose}
        >
          Hủy
        </Button>
        <Button
          autoFocus
          size='small'
          variant='contained'
          onClick={handleAgree}
        >
          Tiếp tục
        </Button>
      </DialogActions>
    </Dialog>
  );
}
